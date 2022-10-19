import { HasLife } from '../entity/Type';
import * as Unit from '../entity/Unit';
import floatingText from '../graphics/FloatingText';
import { containerSpells } from '../graphics/PixiUtils';
import { lerp } from '../jmath/math';
import { CardCategory } from '../types/commonTypes';
import { oneOffImage, playDefaultSpellSFX } from './cardUtils';
import { Spell } from './index';
import { CardRarity, probabilityMap } from '../types/commonTypes';

export const id = 'Bleed';
export interface UnitDamage {
  id: number;
  x: number;
  y: number;
  health: number;
  damageTaken: number;

}
function calculateDamageFromProportion(unit: HasLife, proportionDamage: number): number {
  const damage = Math.ceil(unit.healthMax * proportionDamage);
  return damage;
}
// Deals up to 30% damage
const instantKillProportion = 0.30;
function calculateDamage(unit: HasLife): number {
  // proportion is a percentage expressed as 0.0 - 1.0
  const proportionHealthLost = (unit.healthMax - unit.health) / unit.healthMax;
  const proportionDamage = lerp(0, instantKillProportion, proportionHealthLost / (1 - instantKillProportion));
  return proportionDamage;
}
const animationPath = 'spell-effects/spellHurtCuts';
const spell: Spell = {
  card: {
    id,
    category: CardCategory.Primary,
    supportQuantity: false,
    manaCost: 10,
    healthCost: 0,
    expenseScaling: 1,
    probability: probabilityMap[CardRarity.RARE],
    thumbnail: 'spellIconBleed.png',
    animationPath,
    sfx: 'rend',
    description: `
Deals more damage based on how much health the target is missing.

For example:
Target with ${instantKillProportion * 100}% health will die.
${[40, 65, 90].map(health => `Target with ${health}% health will take ${Math.floor(calculateDamage({ health, healthMax: 100, alive: true }) * 100)}% of max health as damage`).join(`
`)}
Target with full health will take no damage.
    `,
    effect: async (state, card, quantity, underworld, prediction) => {
      await new Promise<void>((resolve) => {
        // .filter: only target living units
        const targets = state.targetedUnits.filter(u => u.alive)
        if (!prediction) {
          playDefaultSpellSFX(card, prediction);
          for (let unit of targets) {
            const damage = calculateDamageFromProportion(unit, calculateDamage(unit));
            oneOffImage(unit, animationPath, containerSpells, resolve);
            const spellEffectImage = oneOffImage(unit, animationPath, containerSpells, resolve);
            if (spellEffectImage) {
              spellEffectImage.sprite.scale.x = -1;
            }
            Unit.takeDamage(unit, damage, state.casterUnit, underworld, prediction, state);
            // Temporarily use floating text until spell animation is finished
            floatingText({ coords: unit, text: id });
          }
        } else {
          for (let unit of targets) {
            const damage = calculateDamageFromProportion(unit, calculateDamage(unit));
            Unit.takeDamage(unit, damage, state.casterUnit, underworld, prediction, state);
          }
          resolve();
        }
      });
      return state;
    },
  },
};
export default spell;
