/*
  ⭐ 450. Delete Node in a BST
  https://leetcode.com/problems/delete-node-in-a-bst/

  Tags: Medium, Tree, Binary Search Tree, Binary Search

  Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

  Basically, the deletion can be divided into two stages:
    1. Search for a node to remove.
    2. If the node is found, delete the node.


  Example 1:
    Input: root = [5,3,6,2,4,null,7], key = 3
    Output: [5,4,6,2,null,null,7]
    Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
    One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
    Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

  Example 2:
    Input: root = [5,3,6,2,4,null,7], key = 0
    Output: [5,3,6,2,4,null,7]
    Explanation: The tree does not contain a node with value = 0.

  Example 3:
    Input: root = [], key = 0
    Output: []


  Constraints:
    - The number of nodes in the tree is in the range [0, 10^4].
    - -10^5 <= Node.val <= 10^5
    - Each node has a unique value.
    - root is a valid binary search tree.
    - -10^5 <= key <= 10^5

  Follow up: Could you solve it with time complexity O(height of tree)?
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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = (root, key) => {
  if (!root) return null;

  // If node is found, delete the node
  if (root.val === key) {
    // To delete the node, we need to consider its children:
    // 1. No children, 2. Both children, 3. One child

    // If the node has no child nodes, simply return null
    if (!root.left && !root.right) return null;

    // If the node has both (left & right), pick one to replace it
    if (root.left && root.right) {
      // To preserve the integrity of BST, pick root.right as the root node
      let current = root.right;
      // Find the min node in the right subtree that has no left
      while (current.left) {
        current = current.left;
      }
      // Assign the root.left to the min node
      current.left = root.left;
      return root.right;
    }

    // If the node has either left/right, pick the one that is not null
    if (!root.left) return root.right;
    if (!root.right) return root.left;
  }

  // Otherwise, continue search for the node with key value
  // If key is less than current, search the left subtree
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  // If key is more than current, search the right subtree
  else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
