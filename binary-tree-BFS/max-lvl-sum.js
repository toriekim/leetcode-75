/*
  1161. Maximum Level Sum of a Binary Tree
  https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

  Tags: Medium, Tree, DFS, BFS, Binary Tree

  Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

  Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

  Example 1:
    Input: [1,7,0,7,-8,null,null]
    Output: 2
    Explanation: 
    Level 1 sum = 1.
    Level 2 sum = 7 + 0 = 7.
    Level 3 sum = 7 + -8 = -1.
    So we return the level with the maximum sum which is level 2.

  Example 2:
    Input: [989,null,10250,98693,-89388,null,null,null,-32127]
    Output: 2


  Constraints:
    - The number of nodes in the tree is in the range [1, 10^4].
    - -10^5 <= Node.val <= 10^5
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
 * @return {number}
 */
const maxLevelSum = (root) => {
  let maxSums = [];

  const queue = [[root, 0]];
  while (queue.length) {
    const [node, lvl] = queue.shift();

    if (!maxSums[lvl]) maxSums[lvl] = 0;
    maxSums[lvl] += node.val;

    if (node.left) queue.push([node.left, lvl + 1]);
    if (node.right) queue.push([node.right, lvl + 1]);
  }
  const max = Math.max(...maxSums);
  return maxSums.indexOf(max) + 1;
};
