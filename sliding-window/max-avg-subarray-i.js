/*
  643. Maximum Average Subarray I

  Tags: Easy, Array, Sliding Window

  You are given an integer array nums consisting of n elements, and an integer k.

  Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

  Example 1:

  Input: nums = [1,12,-5,-6,50,3], k = 4
  Output: 12.75000
  Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

  Example 2:

  Input: nums = [5], k = 1
  Output: 5.00000

  Constraints:
  * n == nums.length
  * 1 <= k <= n <= 105
  * -104 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  // Find starting sum of first k elements in nums
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  // Create 2 pointers for start and end of sliding window
  let i = 0;
  let j = i + k;
  // Initialize maxSum variable to compare running sum with
  let maxSum = sum;
  // Loop through nums to find max sum of contiguous subarray
  while (j < nums.length) {
    // Update current running sum
    sum = sum - nums[i] + nums[j];
    // Update maxSum if current sum is greater than current max
    maxSum = Math.max(maxSum, sum);
    // Move pointers
    i++;
    j++;
  }
  // Return max avgerage
  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
// console.log(findMaxAverage([5], 1)); // 5.00000
