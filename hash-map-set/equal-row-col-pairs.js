/*
  ⭐ 2352. Equal Row and Column Pairs
  https://leetcode.com/problems/equal-row-and-column-pairs/

  Tags: Medium, Array, Hash Table, Matrix, Simulation

  Given a 0-indexed `n x n` integer matrix `grid`, return the number of pairs `(ri, cj)` such that row `ri` and column `cj` are equal.

  A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array).


  Example 1:
    Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
    Output: 1
    Explanation: There is 1 equal row and column pair:
      - (Row 2, Column 1): [2,7,7]

  Example 2:
    Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
    Output: 3
    Explanation: There are 3 equal row and column pairs:
    - (Row 0, Column 0): [3,1,2,2]
    - (Row 2, Column 2): [2,4,2,2]
    - (Row 3, Column 2): [2,4,2,2]


  Constraints:
    - n == grid.length == grid[i].length
    - 1 <= n <= 200
    - 1 <= grid[i][j] <= 10^5
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// Brute force approach:
// Map over each row and column, join the values and then compare
// const equalPairs = (grid) => {
//   const rows = grid.map((row) => row.join(''));
//   const cols = grid[0].map((_, i) => grid.map((row) => row[i]).join(''));
//   let count = 0;
//   // Loop through rows and columns
//   for (let row of rows) {
//     for (let col of cols) {
//       // If row and column are equal, increment count
//       if (row === col) count++;
//     }
//   }
//   return count;
// };

// Hash map approach: Use a map to store the frequency of row values and then compare with columns
const equalPairs = (grid) => {
  const n = grid.length;
  // Initialize count and a map to store row frequencies
  let count = 0;
  const rows = new Map();
  // Loop through rows to store row value frequencies
  for (let row = 0; row < n; row++) {
    const rowStr = JSON.stringify(grid[row]);
    rows.set(rowStr, (rows.get(rowStr) || 0) + 1);
  }
  // Loop through columns to compare with row frequencies
  for (let col = 0; col < n; col++) {
    const colStr = JSON.stringify(grid.map((row) => row[col]));
    count += rows.get(colStr) || 0;
  }
  return count;
};
