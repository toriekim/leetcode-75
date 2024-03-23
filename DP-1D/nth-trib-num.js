/*
  1137. N-th Tribonacci Number

  Tags: Easy, Math, Dynamic Programming, Memoization

  The Tribonacci sequence Tn is defined as follows: 

  T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

  Given n, return the value of Tn.

  Example 1:

  Input: n = 4
  Output: 4
  Explanation:
  T_3 = 0 + 1 + 1 = 2
  T_4 = 1 + 1 + 2 = 4

  Example 2:

  Input: n = 25
  Output: 1389537
  
  Constraints:
  * 0 <= n <= 37
  * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

/**
 * @param {number} n
 * @return {number}
 */

// 0, 1, 1, 2, 4, 7, 11...

const memo = { 0: 0, 1: 1, 2: 1 };
// Recursive
const tribRec = (n) => {
  if (n in memo) return memo[n];
  memo[n] = tribRec(n - 1) + tribRec(n - 2) + tribRec(n - 3);
  return memo[n];
};

// Iterative
const tribonacci = (n) => {
  if (n in memo) return memo[n];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }
  return memo[n];
};
