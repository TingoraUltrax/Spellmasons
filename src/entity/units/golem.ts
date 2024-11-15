import type { UnitSource } from './index';
import { UnitSubType } from '../../types/commonTypes';
import { meleeAction } from './actions/meleeAction';
import * as config from '../../config'
import * as Unit from '../Unit';
import type Underworld from '../../Underworld';

export const golem_unit_id = 'golem'
const unit: UnitSource = {
  id: golem_unit_id,
  info: {
    description: 'Golem description',
    image: 'gruntIdle',
    subtype: UnitSubType.MELEE,
  },
  unitProps: {
    damage: 30,
    staminaMax: config.UNIT_BASE_STAMINA,
    healthMax: 20,
    manaMax: 0,
    attackSpeed: 2000,
    moveSpeed: 0.05,
  },
  spawnParams: {
    probability: 100,
    budgetCost: 1,
    unavailableUntilLevelIndex: 0,
  },
  animations: {
    idle: 'gruntIdle',
    hit: 'gruntHit',
    attack: 'gruntAttack',
    die: 'gruntDeath',
    walk: 'gruntWalk',
  },
  sfx: {
    // Golem shares hurt sfx with archer intentionally
    damage: 'archerHurt',
    death: 'golemDeath'
  },
  action: async (unit: Unit.IUnit, attackTargets: Unit.IUnit[] | undefined, underworld: Underworld, canAttackTarget: boolean) => {
    meleeAction(unit, attackTargets, underworld, canAttackTarget, async (attackTarget: Unit.IUnit) => {
      return Unit.playComboAnimation(unit, unit.animations.attack, async () =>
        Unit.takeDamage({
          unit: attackTarget,
          amount: unit.damage,
          sourceUnit: unit,
          fromVec2: unit,
        }, underworld, false)
      );
    })
  },
  getUnitAttackTargets: (unit: Unit.IUnit, underworld: Underworld) => {
    const closestUnit = Unit.findClosestUnitInDifferentFactionSmartTarget(unit, underworld.units);
    if (closestUnit) {
      return [closestUnit];
    } else {
      return [];
    }
  }
};

export default unit;
