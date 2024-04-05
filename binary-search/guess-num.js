/*
  374. Guess Number Higher or Lower

  Tags: Easy, Binary Search, Interactive

  We are playing the Guess Game. The game is as follows:

  I pick a number from 1 to n. You have to guess which number I picked.

  Every time you guess wrong, I will tell you whether the number I 
  picked is higher or lower than your guess.

  You call a pre-defined API int guess(int num), which returns three 
  possible results:
    1. Returns -1: Your guess is higher than the number I picked (i.e. num > pick).
    2. Returns 1: Your guess is lower than the number I picked (i.e. num < pick).
    3. Returns 0: your guess is equal to the number I picked (i.e. num == pick).
    
  Return the number that I picked.

  
  Example 1:
  Input: n = 10, pick = 6
  Output: 6

  Example 2:
  Input: n = 1, pick = 1
  Output: 1

  Example 3:
  Input: n = 2, pick = 1
  Output: 1


  Constraints:
  1 <= n <= 2^31 - 1
  1 <= pick <= n
*/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return   -1 if num is higher than the picked number
 *            1 if num is lower than the picked number
 *            otherwise return 0
 *
 *  const guess = function (num) {
 *    if (num === picked) return 0;
 *    else if (num > picked) return -1;
 *    else return 1;
 *  };
 */

/**
 * @param {number} n
 * @return {number}
 */

const guessNumber = function (n) {
  if (n === 1) return 1;

  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const hint = guess(mid);

    if (hint === 0) return mid;
    else if (hint === -1) end = mid - 1;
    else start = mid + 1;
  }

  return start;
};
