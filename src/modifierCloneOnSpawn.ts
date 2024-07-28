import { registerEvents, registerModifiers } from "./cards";
import { animateMitosis, doCloneUnit } from "./cards/clone";
import { getOrInitModifier } from "./cards/util";
import * as Unit from './entity/Unit';
import floatingText from "./graphics/FloatingText";
import Underworld from './Underworld';

export const cloneOnSpawnId = 'Clone on Spawn';
export default function registerContaminateSelfOnTeleport() {
  registerModifiers(cloneOnSpawnId, {
    description: 'Casts "Contaminate" on self when teleporting',
    costPerUpgrade: 100,
    add: (unit: Unit.IUnit, underworld: Underworld, prediction: boolean, quantity: number = 1) => {
      getOrInitModifier(unit, cloneOnSpawnId, { isCurse: false, quantity, keepOnDeath: true }, () => {
        Unit.addEvent(unit, cloneOnSpawnId);
      });
    }
  });
  registerEvents(cloneOnSpawnId, {
    onSpawn: (unit: Unit.IUnit, underworld: Underworld, prediction: boolean) => {
      const modifier = unit.modifiers[cloneOnSpawnId];
      if (modifier) {
        for (let i = 0; i < modifier.quantity; i++) {
          const clone = doCloneUnit(unit, underworld, prediction);
          // No need to transfer cloneOnSpawn
          clone && Unit.removeModifier(clone, cloneOnSpawnId, underworld)
        }
        // Wait a bit for floating text otherwise it gets covered by sky beam
        setTimeout(() => {
          floatingText({ coords: unit, text: cloneOnSpawnId, prediction });
        }, 500)
      } else {
        console.error(`Expected to find ${cloneOnSpawnId} modifier`)
      }
    }
  });
}

