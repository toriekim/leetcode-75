/*
  1004. Max Consecutive Ones III
  Leetcode: https://leetcode.com/problems/max-consecutive-ones-iii/

  Tags: Medium, Array, Binary Search, Sliding Window, Prefix Sum

  Given a binary array `nums` and an integer `k`, return the 
  maximum number of consecutive `1`'s in the array if you can flip 
  at most `k` `0`'s.


  Example 1:
    Input: nums = [1,1,0,0,1,1,1,0,1], k = 2
    Output: 6
    Explanation: [1,1,1,0,0,`1`,1,1,1,`1`]
    Bolded numbers were flipped from 0 to 1. The longest subarray is from index 5 to 10.

  Example 2:
    Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
    Output: 10
    Explanation: [0,0,1,1,`1`,`1`,1,1,1,`1`,1,1,0,0,0,1,1,1,1]
    Bolded numbers were flipped from 0 to 1. The longest subarray is from index 2 to 11.


  Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
    0 <= k <= nums.length
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let start = 0;
  let end = 0;
  let max = 0;

  while (end < nums.length) {
    // If current element is 0, decrement k ("flip" to 1)
    if (nums[end] === 0) {
      k--;
    }

    // If k is negative (flipped too many 0's), increment start until k is 0
    while (k < 0) {
      if (nums[start] === 0) {
        k++;
      }
      start++;
    }

    // Update max length of subarray & increment end
    max = Math.max(max, end - start + 1);
    end++;
  }

  return max;
};
