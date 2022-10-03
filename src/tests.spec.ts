import { Creep } from "game/prototypes";
import { isPosEqual } from "other-file";
import { Mock } from "ts-mockery";

describe("test module", () => {
  describe("test", () => {
    it("works", () => {
      const test = Mock.of<Creep>({ hits: 0 });
      expect(test.hits).toBe(0);
      expect(test.hitsMax).toBe(undefined);
    })
  });

  describe("pos equal", () => {
    const res = isPosEqual({ x: 1, y: 1 }, { x: 1, y: 1 });
    expect(res).toBe(true);
  })
})
