/*
  437. Path Sum III
  https://leetcode.com/problems/path-sum-iii/

  Tags: Medium, Tree, Depth-First Search, Binary Tree

  Given the `root` of a binary tree and an integer `targetSum`, 
  return the number of paths where the sum of the values along the 
  path equals `targetSum`.

  The path does not need to start or end at the root or a leaf, but 
  it must go downwards (i.e., traveling only from parent nodes to 
  child nodes).


  Example 1:
    Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
    Output: 3
    Explanation: The paths that sum to 8 are shown.

  Example 2:
    Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
    Output: 3


  Constraints:
    - The number of nodes in the tree is in the range [0, 1000].
    - `-10^9 <= Node.val <= 10^9`
    - `-1000 <= targetSum <= 1000`
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
  if (!root) return 0;
  // For each node, we have two options:
  // 1. Include the current node value in the sum
  // 2. Exclude the current node value from the sum
  //    -> Start a new path from right or left child nodes
  return (
    findPaths(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

const findPaths = (root, targetSum, currentSum = 0) => {
  // Base case: If root is null, end of branch, return 0 (no path)
  if (!root) return 0;

  let paths = 0;
  // Update the current sum
  currentSum += root.val;
  if (currentSum === targetSum) paths++;

  // Continue in left and right subtrees
  paths += findPaths(root.left, targetSum, currentSum);
  paths += findPaths(root.right, targetSum, currentSum);

  return paths;
};
