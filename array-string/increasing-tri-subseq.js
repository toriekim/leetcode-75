/*
  334. Increasing Triplet Subsequence

  Tags: Medium, Array, Greedy

  Given an integer array `nums`, return `true` if there exists a 
  triple of indices `(i, j, k)` such that `i < j < k` and `nums[i] 
  < nums[j] < nums[k]`. If no such indices exist, return `false`.


  Example 1:
    Input: nums = [1,2,3,4,5]
    Output: true
    Explanation: Any triplet where i < j < k is valid.

  Example 2:
    Input: nums = [5,4,3,2,1]
    Output: false
    Explanation: No triplet exists.

  Example 3:
    Input: nums = [2,1,5,0,4,6]
    Output: true
    Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.


  Constraints:
    - `1 <= nums.length <= 5 * 10^5`
    - `-2^31 <= nums[i] <= 2^31 - 1`

  Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  // Initialize two variables to store first & second numbers in triplet
  let first = Infinity;
  let second = Infinity;

  // Loop through the input array of numbers
  for (let num of nums) {
    // If current number is less than or equal to first number
    // Need to start triplet over again, so update first
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      // If it's less than or equal to second number, update second
      // So third number has lower threshold to complete triplet
      second = num;
    } else {
      // If current number is greater than both first & second numbers
      // Return true since we found a triplet
      return true;
    }
  }

  // No triplet found
  return false;
};
