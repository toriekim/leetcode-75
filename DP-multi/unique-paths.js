/*
  62. Unique Paths

  Tags: Medium, Math, Dynamic Programming, Combinatorics

  There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

  Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

  The test cases are generated so that the answer will be less than or equal to 2 * 109.

  
  Example 1:
  Input: m = 3, n = 7
  Output: 28

  Example 2:
  Input: m = 3, n = 2
  Output: 3
  Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
  1. Right -> Down -> Down
  2. Down -> Down -> Right
  3. Down -> Right -> Down
  

  Constraints:
  1 <= m, n <= 100
*/
/**
 * @param {number} m Number of rows
 * @param {number} n Number of columns
 * @return {number}
 */
const uniquePaths = (m, n) => {
  let paths = 0;
  paths += dfs(0, 0, m, n);
  return paths;
};

const dfs = (row, col, m, n, memo = {}) => {
  // If position is in memo, return value
  const pos = row + ',' + col;
  if (pos in memo) return memo[pos];

  // If position is out of bounds, return 0 (no paths found)
  const rowInbounds = 0 <= row && row < m;
  const colInbounds = 0 <= col && col < n;
  if (!rowInbounds || !colInbounds) return 0;

  // If position is at bottom-right corner, return 1 (path found)
  if (row === m - 1 && col === n - 1) return 1;

  // Can only move either down or right at any point in time
  const down = dfs(row + 1, col, m, n, memo);
  const right = dfs(row, col + 1, m, n, memo);

  memo[pos] = down + right;
  return memo[pos];
};

// ----------------------------------------------------------------
// console.log(uniquePaths(3, 7)); // 28
// console.log(uniquePaths(3, 2)); // 3
