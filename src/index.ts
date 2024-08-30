type Labyrinth = string[][];

export function shortestPath(labyrinth: Labyrinth): number {
  const numRows = labyrinth.length;
  const numCols = labyrinth[0].length;
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];

  let startX = -1,
    startY = -1;
  let endX = -1,
    endY = -1;

  // Find the start (S) and end (E) positions
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (labyrinth[i][j] === "S") {
        startX = i;
        startY = j;
      } else if (labyrinth[i][j] === "E") {
        endX = i;
        endY = j;
      }
    }
  }

  if (startX === -1 || startY === -1 || endX === -1 || endY === -1) {
    return -1; // S or E not found
  }

  // BFS initialization
  const queue: [number, number, number][] = [];
  const visited: boolean[][] = Array.from({ length: numRows }, () =>
    Array(numCols).fill(false)
  );

  queue.push([startX, startY, 0]); // [x, y, distance]
  visited[startX][startY] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift()!;

    // Check if we've reached the exit
    if (x === endX && y === endY) {
      return dist;
    }

    // Explore neighbors
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < numRows &&
        newY < numCols &&
        labyrinth[newX][newY] !== "1" &&
        !visited[newX][newY]
      ) {
        queue.push([newX, newY, dist + 1]);
        visited[newX][newY] = true;
      }
    }
  }

  // No path found
  return -1;
}
