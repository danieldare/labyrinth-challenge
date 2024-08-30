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

  it("should return -1 if no path exists", () => {
    const labyrinth = [
      ["S", "1", "E"],
      ["1", "1", "1"],
      ["0", "0", "0"],
    ];
    expect(shortestPath(labyrinth)).toBe(-1);
  });

  it("should find the shortest path in a complex labyrinth", () => {
    const labyrinth = [
      ["S", "0", "1", "0", "E"],
      ["1", "0", "1", "0", "1"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "1", "1"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(shortestPath(labyrinth)).toBe(8);
  });

  it("should handle a labyrinth with the start and exit adjacent", () => {
    const labyrinth = [["S", "E"]];
    expect(shortestPath(labyrinth)).toBe(1);
  });

  it("should handle a labyrinth with only one row", () => {
    const labyrinth = [["S", "0", "0", "E"]];
    expect(shortestPath(labyrinth)).toBe(3);
  });
});
