/*
  238. Product of Array Except Self

  Tags: Medium, Array, Prefix Sum

  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

  You must write an algorithm that runs in O(n) time and without using the division operation.

  Example 1:

  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]
  
  Example 2:

  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]
  
  Constraints:
  * 2 <= nums.length <= 105
  * -30 <= nums[i] <= 30
  * The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer
  
  Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// BRUTE FORCE: O(n^2)
// const productExceptSelf = (nums) => {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     const product = getProduct(nums, i);
//     result[i] = product;
//   }
//   return result;
// };

// const getProduct = (nums, idx) => {
//   let product = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (i !== idx) product *= nums[i];
//   }
//   return product;
// };

// OPTIMIZED: O(n) time & O(1) constant space
// First, loop through array from start to build an array of prefix product values
// Then, loop through array from end, find suffix product value, update initial array to equal prefix * suffix

const productExceptSelf = (nums) => {
  // Initialize empty array as result
  let result = [];

  // Initialize prefix product tracker at 1
  let prefix = 1;
  // Loop through input to populate result with prefix values
  // Update prefix to product multiplied by input value at index
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  // Loop through input backwards to find suffix value
  // Multiply prefix value at index in result by suffix
  // Update suffix to product multiplied by input value at index
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4])); // [24,12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
