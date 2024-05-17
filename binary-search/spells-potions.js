/*
  2300. Successful Pairs of Spells and Potions
  https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

  Tags: Medium, Array, Two Pointers, Binary Search, Sorting

  You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where `spells[i]` represents the strength of the `ith` spell and `potions[j]` represents the strength of the `jth` potion.

  You are also given an integer `success`. A spell and potion pair is considered successful if the product of their strengths is at least `success`.

  Return an integer array `pairs` of length `n` where `pairs[i]` is the number of potions that will form a successful pair with the `ith` spell.


  Example 1:
    Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
    Output: [4,0,3]
    Explanation:
    - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
    - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
    - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
    Thus, [4,0,3] is returned.
  
  Example 2:
    Input: spells = [3,1,2], potions = [8,5,8], success = 16
    Output: [2,0,2]
    Explanation:
    - 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
    - 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
    - 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
    Thus, [2,0,2] is returned.
  

  Constraints:
    - n == spells.length
    - m == potions.length
    - 1 <= n, m <= 105
    - 1 <= spells[i], potions[i] <= 105
    - 1 <= success <= 1010
*/
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// BRUTE FORCE; will time out for larger inputs O(n*m)
// var successfulPairs = function (spells, potions, success) {
//   const pairs = new Array(spells.length).fill(0);
//   // While looping through spells, loop through potions
//   for (let i = 0; i < spells.length; i++) {
//     const spell = spells[i];
//     for (let j = 0; j < potions.length; j++) {
//       // If spells[i] * p[j] >= success, update pairs[i] value to count
//       const possible = spell * potions[j];
//       if (possible >= success) pairs[i] += 1;
//     }
//   }
//   return pairs;
// };

// OPTIMIZED: Binary Search O(nlogn + mlogm)
const successfulPairs = (spells, potions, success) => {
  const sLen = spells.length;
  const pLen = potions.length;
  const pairs = new Array(n).fill(0);

  // Sort potions array in ascending order
  // This way, we can use binary search to find first successful pair
  // Any potion after that will also be successful.
  potions.sort((a, b) => a - b);

  // Loop through spells
  for (let i = 0; i < sLen; i++) {
    // Binary Search for the first successful potion pair
    const successIdx = binarySearch(spells[i], potions, success);
    pairs[i] = firstPairIdx === pLen ? 0 : pLen - successIdx;
  }

  return pairs;
};

const binarySearch = (spell, potions, success) => {
  let left = 0;
  let right = potions.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const possible = spell * potions[mid];
    if (possible >= success) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
