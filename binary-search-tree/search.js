/*
  700. Search in a Binary Search Tree
  https://leetcode.com/problems/search-in-a-binary-search-tree/

  Tags: Easy, 

  You are given the `root` of a binary search tree (BST) and an 
  integer `val`.

  Find the node in the BST that the node's value equals `val` and 
  return the subtree rooted with that node. If such a node does not 
  exist, return `null`.


  Example 1:
  Input: root = [4,2,7,1,3], val = 2
  Output: [2,1,3]

  Example 2:
  Input: root = [4,2,7,1,3], val = 5
  Output: []


  Constraints:
    - The number of nodes in the tree is in the range [1, 5000].
    - 1 <= Node.val <= 10^7
    - `root` is a binary search tree.
    - 1 <= val <= 10^7
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  // If root is null, return null
  if (!root) return null;
  // If root value is equal to val, return root
  if (root.val === val) return root;
  // If val is less than root value, search left subtree
  if (val < root.val) return searchBST(root.left, val);
  // If val is greater than root value, search right subtree
  return searchBST(root.right, val);
};
