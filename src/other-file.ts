import { ATTACK } from "game/constants";
import { RoomPosition } from "game/prototypes";
import { getAttack } from "one-more-level";


export const isPosEqual = (pos1: RoomPosition, pos2: RoomPosition): boolean => {
  const test = getAttack(); // force some kinda import from one-more-level.ts
  return pos1.x === pos2.x && pos1.y === pos2.y && test === ATTACK;
}
