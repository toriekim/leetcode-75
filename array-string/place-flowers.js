/*
  605. Can Place Flowers

  Tags: Easy, Array, Greedy

  You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

  Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

  Example 1:
  Input: flowerbed = [1,0,0,0,1], n = 1
  Output: true
  
  Example 2:
  Input: flowerbed = [1,0,0,0,1], n = 2
  Output: false
  
  Constraints:
  - 1 <= flowerbed.length <= 2 * 104
  - flowerbed[i] is 0 or 1
  - There are no two adjacent flowers in flowerbed
  - 0 <= n <= flowerbed.length
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = function (flowerbed, n) {
  let freeSpace = 0;

  // Loop through the flowerbed array
  for (let i = 0; i < flowerbed.length; i++) {
    // Create variables to hold prev, next, and current values
    const current = flowerbed[i];
    const prev = flowerbed[i - 1];
    const next = flowerbed[i + 1];

    // If all positions are 0, increment free space, move i 2 spaces forward
    if (!prev && !current && !next) {
      freeSpace++;
      i++;
    }
  }
  // Return if there's enough space to add n plants
  return freeSpace >= n;
};
