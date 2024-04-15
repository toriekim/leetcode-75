/*
  994. Rotting Oranges

  Tags: Medium, Array, Breath-First Search, Matrix

  You are given an `m x n` grid where each cell can have one of three values:
    - 0 representing an empty cell,
    - 1 representing a fresh orange, or
    - 2 representing a rotten orange.
  
  Every minute, any fresh orange that is 4-directionally adjacent 
  to a rotten orange becomes rotten.

  Return the minimum number of minutes that must elapse until no 
  cell has a fresh orange. If this is impossible, return -1.

  
  Example 1:
  Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
  Output: 4

  Example 2:
  Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
  Output: -1
  Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
  
  Example 3:
  Input: grid = [[0,2]]
  Output: 0
  Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
  

  Constraints:
    - `m` == grid.length
    - `n` == grid[i].length
    - `1 <= m, n <= 10`
    - `grid[i][j]` is 0, 1, or 2.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  // Breadth-first search uses queue
  // First, must find how many fresh oranges there are
  // and add rotten oranges to a queue to process later
  let fresh = 0;
  const queue = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const current = grid[row][col];
      // If there is a fresh orange, add it to tally
      if (current === 1) fresh += 1;
      // If there is a rotten orange, add position at minute 0 to queue
      if (current === 2) queue.push([row, col, 0]);
    }
  }
  // Have counter that increments minutes
  let minutes = 0;
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  // Process positions in queue
  while (queue.length && fresh) {
    const [row, col, mins] = queue.shift();
    // If current position is fresh, we're at next minute
    // Process by changing to rotten, decrementing fresh, and updating minutes
    if (grid[row][col] === 1) {
      grid[row][col] = 2;
      fresh -= 1;
      minutes = mins;
    }
    // Explore neighbors of current position
    for (const [dRow, dCol] of deltas) {
      const newRow = row + dRow;
      const newCol = col + dCol;
      const rowInbounds = 0 <= newRow && newRow < grid.length;
      const colInbounds = 0 <= newCol && newCol < grid[0].length;
      // If neighbor is inbounds and is fresh, increment minute & add to queue
      if (rowInbounds && colInbounds && grid[newRow][newCol] === 1) {
        queue.push([newRow, newCol, mins + 1]);
      }
    }
  }
  // If there are fresh oranges left, return -1
  // Otherwise, return total minutes it took for all to become rotten
  return fresh > 0 ? -1 : minutes;
};

// ----------------------------------------------------------------
// let grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];
// console.log(orangesRotting(grid)); // 4
// grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];
// console.log(orangesRotting(grid)); // -1
// grid = [[0, 2]];
// console.log(orangesRotting(grid)); // 0
