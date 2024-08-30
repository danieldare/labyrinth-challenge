import { shortestPath } from "..";

describe("Labyrinth shortest path", () => {
  it("should find the shortest path in a simple labyrinth", () => {
    const labyrinth = [
      ["S", "0", "E"],
      ["1", "0", "1"],
      ["1", "0", "0"],
    ];
    expect(shortestPath(labyrinth)).toBe(2);
  });
});
