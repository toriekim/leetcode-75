/*
  199. Binary Tree Right Side View

  Tags: Medium, Tree, Depth-First Search, Breadth-First Search, Binary Tree

  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.


  Example 1:
      1
    /   \
  2      3
    \      \
      5      4
  Input: root = [1,2,3,null,5,null,4]
  Output: [1,3,4]

  Example 2:
  Input: root = [1,null,3]
  Output: [1,3]

  Example 3:
  Input: root = []
  Output: []

  
  Constraints:
  The number of nodes in the tree is in the range [0, 100].
  -100 <= Node.val <= 100
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
 * @return {number[]}
 */
// Return the rightmost node at each level
// Approach: BFS with queue -> after completing each level, add the last node to the result
// const rightSideView = (root) => {
//   if (!root) return [];

//   const result = [];
//   const queue = [root];

//   while (queue.length) {
//     const levelSize = queue.length;

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift();

//       if (i === levelSize - 1) {
//         result.push(node.val);
//       }

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }

//   return result;
// };

// Depth-First Search pre-order traversal
const rightSideView = (root) => {
  // If the tree is empty, return an empty array
  if (!root) return [];
  // Create result array to store the rightmost node at each level
  const result = [];

  // Helper function to traverse the tree
  const dfsPre = (node, lvl) => {
    // Base case: If node is null, at the end, return
    if (!node) return;
    // Use index of result array to represent the level
    // Pre-order traversal: root -> left -> right
    // Value at index in result array will be replaced by the rightmost node at each level
    result[lvl] = node.val;
    // Process child nodes, increment level by 1
    dfsPre(node.left, lvl + 1);
    dfsPre(node.right, lvl + 1);
  };

  dfsPre(root, 0);
  return result;
};
