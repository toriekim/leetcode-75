/*
  ⭐ 875. Koko Eating Bananas
  https://leetcode.com/problems/koko-eating-bananas/

  Tags: Medium, Array, Binary Search

  Koko loves to eat bananas. There are `n` piles of bananas, the `i`th pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

  Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

  Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

  Return the minimum integer `k` such that she can eat all the bananas within `h` hours.


  Example 1:
    Input: piles = [3,6,7,11], h = 8
    Output: 4

  Example 2:
    Input: piles = [30,11,23,4,20], h = 5
    Output: 30

  Example 3:
    Input: piles = [30,11,23,4,20], h = 6
    Output: 23


  Constraints:
    - 1 <= piles.length <= 10^4
    - piles.length <= h <= 10^9
    - 1 <= piles[i] <= 10^9
*/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  // Set the range of possible bananas/hr
  let low = 1;
  let high = Math.max(...piles);

  // Conduct a binary search to find k (bananas/hr)
  while (low < high) {
    // Find current # bananas/hr avg
    const mid = Math.floor((low + high) / 2);
    // If Koko can finish all the piles with this avg...
    if (canEatAll(mid)) {
      // Update upper range to mid value to find lower value
      high = mid;
    } else {
      // Otherwise, update lower range to find higher value
      low = mid + 1;
    }
  }

  // Helper function to check if Koko can eat all the piles at k speed
  function canEatAll(k) {
    let hours = 0;
    // For each pile, add time it would take to finish it at speed k
    for (let pile of piles) {
      hours += Math.ceil(pile / k);
    }
    // Return if it's possible for Koko to finish all piles before the guards come back
    return hours <= h;
  }

  // Return the min # bananas per hour Koko can go
  return low;
};
