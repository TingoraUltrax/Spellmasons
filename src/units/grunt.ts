import type { UnitSource } from './index';
import { UnitSubType } from '../commonTypes';
import { canInteractWithTarget, action } from './actions/gruntAction';
import * as config from '../config'

const unit: UnitSource = {
  id: 'grunt',
  info: {
    description: 'A simple but persistant creature that will pursue its enemies and attack them if within arm\'s reach.',
    image: 'units/golem',
    subtype: UnitSubType.GOON,
    probability: 100,
  },
  unitProps: {
    moveDistance: config.UNIT_BASE_MOVE_DISTANCE,
    attackRange: 10 + config.COLLISION_MESH_RADIUS * 2,
    manaMax: 0,
    mana: 0,
    manaPerTurn: 0
  },
  action,
  canInteractWithTarget,
};

export default unit;
