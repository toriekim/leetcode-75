/*
  1493. Longest Subarray of 1's After Deleting One Element
  https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

  Tags: Medium, Dynamic Programming, Sliding Window

  Given a binary array `nums`, you should delete one element from it.

  Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
  

  Example 1:
  Input: nums = [1,1,0,1]
  Output: 3
  Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

  Example 2:
  Input: nums = [0,1,1,1,0,1,1,0,1]
  Output: 5
  Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

  Example 3:
  Input: nums = [1,1,1]
  Output: 2
  Explanation: You must delete one element.


  Constraints:
  1 <= nums.length <= 10^5
  nums[i] is either 0 or 1.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  // Sliding Window approach: Initialize 2 pointers for window
  let start = 0;
  let end = 0;
  // Keep track of max length of subarray
  let max = 0;
  // Keep track of last deleted zero position
  let zeroIdx = -1;

  // Loop while end of window is less than length of nums array
  while (end < nums.length) {
    // If current element is 0, check if there was a zero deleted before
    if (nums[end] === 0) {
      // If there was, move start to position after last deleted zero
      if (zeroIdx !== -1) start = zeroIdx + 1;
      // Set zeroIdx to current position
      zeroIdx = end;
    }
    // Update max if current length is greater than max
    max = Math.max(max, end - start);
  }
  // Return max length of subarray of 1's
  return max;
};
