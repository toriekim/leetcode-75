/*
  328. Odd Even Linked List

  Tags: Medium, Linked List

  Given the head of a singly linked list, group all the nodes with 
  odd indices together followed by the nodes with even indices, and 
  return the reordered list.

  The first node is considered odd, and the second node is even, and so on.

  Note that the relative order inside both the even and odd groups 
  should remain as it was in the input.

  You must solve the problem in O(1) extra space complexity and 
  O(n) time complexity.

  
  Example 1:
  Input: head = [1,2,3,4,5]
  Output: [1,3,5,2,4]
  
  Example 2:
  Input: head = [2,1,3,5,6,4,7]
  Output: [2,3,6,7,1,5,4]
  

  Constraints:
  - The number of nodes in the linked list is in the range `[0, 10^4]`.
  - `-10^6 <= Node.val <= 10^6`
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (!head || !head.next) return head;

  // Create two pointers to create odds & evens lists
  let odd = head;
  let even = head.next;
  let evenStart = head.next;

  // Iterate through list
  while (odd.next && even.next) {
    // Reassign current odd's next to following odd node in list
    odd.next = even.next;
    // Reassign current even next to the following even node in list
    even.next = odd.next.next;

    // Move both pointers
    odd = odd.next;
    even = even.next;
  }
  // Join end of odd list to even list
  odd.next = evenStart;
  // Return newly sorted list
  return head;
};

// ----------------------------------------------------------------
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// const one = new ListNode(1);
// const two = new ListNode(2);
// const three = new ListNode(3);
// const four = new ListNode(4);
// const five = new ListNode(5);
// one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;

// console.log(oddEvenList(one));
