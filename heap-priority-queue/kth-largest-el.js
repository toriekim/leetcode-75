/*
  ⭐️ 215. Kth Largest Element in an Array
  https://leetcode.com/problems/kth-largest-element-in-an-array/
  
  Tags: Medium, Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect

  Given an integer array `nums` and an integer `k`, return the 
  `kth` largest element in the array.

  Note that it is the `kth` largest element in the sorted order,
  not the `kth` distinct element.

  Can you solve it without sorting?


  Example 1:
    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5
  
  Example 2:
    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    Output: 4

  
  Constraints:
    1 <= k <= nums.length <= 10^5
    -10^4 <= nums[i] <= 10^4
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Brute force with sorting: O(nlogn) time O(n) space
// Not most efficient for very large array inputs -> O(n) time
// const findKthLargest = (nums, k) => {
//   const sorted = nums.sort((a,b) => b - a)
//   return sorted[k - 1]
// };

// Without sorting first:
// Using QuickSelect

const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (arr, start, end, k) => {
  const pivotIdx = partition(arr, start, end);

  if (k < arr.length - pivotIdx) {
    return quickSelect(arr, pivotIdx + 1, end, k);
  } else if (k > arr.length - pivotIdx) {
    return quickSelect(arr, start, pivotIdx - 1, k);
  }
  return arr[pivotIdx];
};

const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start;
  let j = end - 1;
  while (i <= j) {
    // Move all elements smaller than pivot to left
    while (arr[i] < pivot) i++;
    // Move all elements larger than pivot to right
    while (arr[j] > pivot) j--;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  // Swap pivot with i (current position) to place pivot in correct position in sorted array (left smaller, right larger)
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
};
