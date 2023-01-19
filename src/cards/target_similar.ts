import { addTarget, getCurrentTargets, Spell } from './index';
import { CardCategory } from '../types/commonTypes';
import { Vec2, add } from '../jmath/Vec';
import * as math from '../jmath/math';
import { isUnit } from '../entity/Unit';
import { isPickup } from '../entity/Pickup';
import { isDoodad } from '../entity/Doodad';
import { CardRarity, probabilityMap } from '../types/commonTypes';
import { raceTimeout } from '../Promise';
import { easeOutCubic } from '../jmath/Easing';
import * as config from '../config';
import * as colors from '../graphics/ui/colors';
import { HasSpace } from '../entity/Type';

const id = 'Target Similar';
const spell: Spell = {
  card: {
    id,
    category: CardCategory.Targeting,
    supportQuantity: true,
    manaCost: 20,
    healthCost: 0,
    expenseScaling: 1,
    probability: probabilityMap[CardRarity.UNCOMMON],
    thumbnail: 'spellIconTargetSimilar.png',
    requiresFollowingCard: true,
    description: 'spell_target_similar',
    allowNonUnitTarget: true,
    effect: async (state, card, quantity, underworld, prediction, outOfRange) => {
      // Note: This loop must NOT be a for..of and it must cache the length because it
      // mutates state.targetedUnits as it iterates.  Otherwise it will continue to loop as it grows
      let targets: Vec2[] = getCurrentTargets(state);
      targets = targets.length ? targets : [state.castLocation];
      const length = targets.length;
      const animators = [];
      for (let i = 0; i < length; i++) {
        // Refresh the targets array so it excludes reselecting a target that was selected by the last iteration
        targets = getCurrentTargets(state);
        const target = targets[i];
        if (!target) {
          continue;
        }
        const potentialTargets = underworld.getPotentialTargets(prediction)
          // Filter out current targets
          .filter(t => !targets.includes(t))
          // Filter out dissimilar types
          // @ts-ignore Find similar units by unitSourceId, find similar pickups by name
          .filter(t => {
            if (isUnit(target)) {
              return isUnit(t) && t.unitSourceId == target.unitSourceId && t.alive == target.alive;
            } else if (isPickup(target)) {
              return isPickup(t) && t.name == target.name;
            } else if (isDoodad(target)) {
              return isDoodad(t) && t.name == target.name;
            }
          })
          .sort((a, b) => math.distance(a, target) - math.distance(b, target));
        const newTargets = potentialTargets.slice(0, quantity);
        if (!prediction) {
          playSFXKey('targeting');
          animators.push({ pos: target, newTargets });
        }
        for (let newTarget of newTargets) {
          addTarget(newTarget, state);
        }
      }
      await animate(animators);

      return state;
    },
  },
};

async function animate(circles: { pos: Vec2, newTargets: Vec2[] }[]) {
  if (globalThis.headless) {
    // Animations do not occur on headless, so resolve immediately or else it
    // will just waste cycles on the server
    return Promise.resolve();
  }
  if (circles.length == 0) {
    // Prevent this function from running if there is nothing to animate
    return Promise.resolve();
  }
  const iterations = 100;
  const millisBetweenIterations = 4;
  const extraIterationsToShowAnimatedCircleAtEnd = 40;
  // "+10" gives it a little extra time so it doesn't timeout right when the animation would finish on time
  return raceTimeout(millisBetweenIterations * (iterations + extraIterationsToShowAnimatedCircleAtEnd + 10), 'animatedConnect', new Promise<void>(resolve => {
    // +extraIterations... gives iterations some time to show the circle at the end
    for (let i = 0; i < iterations + extraIterationsToShowAnimatedCircleAtEnd; i++) {

      setTimeout(() => {
        if (globalThis.predictionGraphics) {
          globalThis.predictionGraphics.clear();
          globalThis.predictionGraphics.lineStyle(2, colors.targetingSpellGreen, 1.0);
          for (let { pos, newTargets } of circles) {
            // between 0 and 1;
            const proportionComplete = easeOutCubic((i + 1) / iterations);
            newTargets.forEach(target => {

              globalThis.predictionGraphics?.moveTo(pos.x, pos.y);
              const dist = math.distance(pos, target)
              const pointApproachingTarget = add(pos, math.similarTriangles(target.x - pos.x, target.y - pos.y, dist, dist * proportionComplete));
              globalThis.predictionGraphics?.lineTo(pointApproachingTarget.x, pointApproachingTarget.y);
              if (proportionComplete >= 1) {
                globalThis.predictionGraphics?.drawCircle(target.x, target.y, config.COLLISION_MESH_RADIUS);
                playSFXKey('targetAquired');
              }
            });
            // // Draw completed lines and circles on old targets
            // oldTargets.forEach(target => {
            //   if (!entitiesTargeted.includes(target)) {
            //     entitiesTargeted.push(target);
            //     let sfxNumber = Math.floor(i / (iterations / 4));
            //     playSFXKey(`targetAquired`);
            //   }
            //   // globalThis.predictionGraphics?.moveTo(pos.x, pos.y);
            //   // globalThis.predictionGraphics?.lineTo(target.x, target.y);
            //   globalThis.predictionGraphics?.drawCircle(target.x, target.y, config.COLLISION_MESH_RADIUS);
            // });
          }
        }
        if (i >= iterations - 1) {
          resolve();
        }

      }, millisBetweenIterations * i)
    }
  })).then(() => {
    globalThis.predictionGraphics?.clear();
  });
}
export default spell;