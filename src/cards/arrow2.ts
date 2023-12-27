import { CardCategory } from '../types/commonTypes';
import { Spell } from './index';
import { CardRarity, probabilityMap } from '../types/commonTypes';
import { arrowCardId, arrowEffect } from './arrow';
import { takeDamage } from '../entity/Unit';

export const arrow2CardId = 'Arrow 2';
const damageDone = 20;
const spell: Spell = {
  card: {
    id: arrow2CardId,
    replaces: [arrowCardId],
    category: CardCategory.Damage,
    supportQuantity: true,
    manaCost: 16,
    healthCost: 0,
    expenseScaling: 1,
    probability: probabilityMap[CardRarity.SPECIAL],
    thumbnail: 'spellIconArrow2.png',
    // so that you can fire the arrow at targets out of range
    allowNonUnitTarget: true,
    animationPath: '',
    sfx: 'arrow',
    description: ['spell_arrow', damageDone.toString()],
    effect: arrowEffect(1)
  },
  events: {
    onProjectileCollision: ({ unit, underworld, projectile, prediction }) => {
      if (unit) {
        takeDamage(unit, damageDone, projectile.startPoint, underworld, prediction, undefined, { thinBloodLine: true });
      }
    }
  }
};
export default spell;