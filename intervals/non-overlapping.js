/*
  435. Non-overlapping Intervals
  https://leetcode.com/problems/non-overlapping-intervals/

  Tags: Medium, Array, Dynamic Programming, Greedy, Sorting

  Given an array of `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.


  Example 1:
    Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

  Example 2:
    Input: intervals = [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

  Example 3:
    Input: intervals = [[1,2],[2,3]]
    Output: 0
    Explanation: You don't need to remove any of the intervals since they're already non-overlapping.


  Constraints:
    - 1 <= intervals.length <= 10^5
    - intervals[i].length == 2
    - -5 * 10^4 <= starti < endi <= 5 * 10^4
*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  // First, sort intervals by the end time
  intervals.sort((a, b) => a[1] - b[1]);
  // Initialize variables to track previous & removed count
  let prev = intervals[0]; // Start prev from the first interval
  let removed = 0;
  // Loop through intervals starting from the second interval
  for (let i = 1; i < intervals.length; i++) {
    // If the current interval overlaps (start time of current is before end time of previous)
    if (intervals[i][0] < prev[1]) {
      // Remove interval -> Increment removed count
      removed++;
    } else {
      // Otherwise, update previous interval
      prev = intervals[i];
    }
  }
  return removed;
};
// Time Complexity: O(n * log(n)), where n = the # of intervals
// Space Complexity: O(1)
