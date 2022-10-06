import { MOVE, OK, RANGED_ATTACK } from 'game/constants';
import { Creep } from "game/prototypes";
import * as utils from 'game/utils';
import { isPosEqual } from "other-file";
import { Mock } from "ts-mockery";

const getObjectsByPrototype = jest.spyOn(utils, 'getObjectsByPrototype');
const findInRange = jest.spyOn(utils, 'findInRange');
const getObjects = jest.spyOn(utils, 'getObjects');

describe("test module", () => {
  describe("test", () => {
    it("works", () => {
      const test = Mock.of<Creep>({ hits: 0 });
      expect(test.hits).toBe(0);
      expect(test.hitsMax).toBe(undefined);
    });
  });

  describe("pos equal", () => {
    const res = isPosEqual({ x: 1, y: 1 }, { x: 1, y: 1 });
    expect(res).toBe(true);
  });
});

describe("ranged attack", () => {
  it("attacks", () => {
    const creep = Mock.of<Creep>({
      id: "myCreep",
      exists: true,
      rangedAttack: jest.fn(() => OK),
      rangedMassAttack: () => OK,
      // getActiveBodyParts: () => 1,
      getRangeTo: () => 2,
      move: () => OK,
      // tick: {},
      // visuals: {},
      body: [{ type: RANGED_ATTACK, hits: 100 }, { type: MOVE, hits: 100 }],
      x: 1,
      y: 1
    });
    Mock.extend(creep);
    const target = Mock.of<Creep>({
      id: "hostile",
      x: 3,
      y: 1
    });

    getObjectsByPrototype.mockReturnValue([]);
    findInRange.mockReturnValue([target]);
    getObjects.mockReturnValue([creep, target]);
    // const result = rangedAttackRoutine(creep, target);
    expect(creep.rangedAttack).toHaveBeenCalledWith(target);
  });
});
