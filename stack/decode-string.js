/*
  394. Decode String
  https://leetcode.com/problems/decode-string/

  Tags: Medium, String, Stack, Recursion

  Given an encoded string, return its decoded string.

  The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

  You may assume that the input string is always valid; no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there won't be input like `3a` or `2[4]`.

  The test cases are generated so that the length of the output will never exceed 10^5.


  Example 1:
    Input: s = "3[a]2[bc]"
    Output: "aaabcbc"

  Example 2:
    Input: s = "3[a2[c]]"
    Output: "accaccacc"

  Example 3:
    Input: s = "2[abc]3[cd]ef"
    Output: "abcabccdcdcdef"


  Constraints:
    - 1 <= s.length <= 30
    - s consists of lowercase English letters, digits, and square brackets '[]'.
    - s is guaranteed to be a valid input.
    - All the integers in s are in the range [1, 300].
*/
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  // Initialize a stack to store the characters
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // If the current character is not a closing bracket,
    // push it to the stack & continue to the next character
    if (s[i] !== ']') {
      stack.push(s[i]);
      continue;
    }
    // If the current character is a closing bracket, decode the string
    let str = '';
    let num = '';
    // Pop chars from the stack until an opening bracket is found
    // (to get the encoded string)
    while (stack[stack.length - 1] !== '[') {
      str = stack.pop() + str;
    }
    // Get rid of opening bracket
    stack.pop();
    // Pop chars from the stack to get k (# of times to repeat)
    while (stack.length && !isNaN(stack[stack.length - 1])) {
      num = stack.pop() + num;
    }
    // Repeat the string k times & push it back to the stack
    stack.push(str.repeat(Number(num)));
  }
  // Join the stack to get the decoded string
  return stack.join('');
};
