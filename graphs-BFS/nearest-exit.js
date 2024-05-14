/*
  1926. Nearest Exit from Entrance in Maze

  Tags: Medium, Graphs, BFS

  You are given an `m x n` matrix `maze` (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the `entrance` of the maze, where `entrance = [entrance_row, entrance_col]` denotes the row and column of the cell you are initially standing at.

  In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the `entrance`. An exit is defined as an empty cell that is at the border of the `maze`. The `entrance` does not count as an exit.

  Return the number of steps in the shortest path from the `entrance` to the nearest exit, or `-1` if no such path exists.

  Example 1:
    Input: maze = [
      ["+","+",".","+"],
      [".",".",".","+"],
      ["+","+","+","."]
    ], 
      entrance = [1,2]
    Output: 1
    Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
    Initially, you are at the entrance cell [1,2].
    - You can reach [1,0] by moving 2 steps left.
    - You can reach [0,2] by moving 1 step up.
    It is impossible to reach [2,3] from the entrance.
    Thus, the nearest exit is [0,2], which is 1 step away.

  Example 2:
    Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
    Output: 2
    Explanation: There is 1 exit in this maze at [1,2].
    [1,0] does not count as an exit since it is the entrance cell.
    Initially, you are at the entrance cell [1,0].
    - You can reach [1,2] by moving 2 steps right.
    Thus, the nearest exit is [1,2], which is 2 steps away.

  Example 3:
    Input: maze = [[".","+"]], entrance = [0,0]
    Output: -1
    Explanation: There are no exits in this maze.


  Constraints:
    - maze.length == m
    - maze[i].length == n
    - 1 <= m, n <= 100
    - maze[i][j] is either '.' or '+'.
    - entrance.length == 2
    - 0 <= entrance_row < m
    - 0 <= entrance_col < n
    - entrance cell is an empty cell.
*/
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function (maze, entrance) {
  const [startRow, startCol] = entrance;
  // Mark entrance as visited
  maze[startRow][startCol] = '*';
  // Start queue with entrance position
  const queue = [[startRow, startCol, 0]];

  // BFS to find the nearest exit
  while (queue.length > 0) {
    const [row, col, steps] = queue.shift();
    // Explore all 4 directions from current position
    const deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (const [dRow, dCol] of deltas) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      const rowInbounds = 0 <= newRow && newRow < maze.length;
      const colInbounds = 0 <= newCol && newCol < maze[0].length;
      // If neighbor position is out of bounds, we found an exit
      if (!rowInbounds || !colInbounds) {
        // If we are not at the entrance, return steps
        if (steps > 0) return steps;
      } else if (maze[newRow][newCol] === '.') {
        // Otherwise, if neighbor is an empty cell, add to queue & mark as visited
        queue.push([newRow, newCol, steps + 1]);
        maze[newRow][newCol] = '*';
      }
    }
  }
  // If we didn't find a path to exit, return -1
  return -1;
};
