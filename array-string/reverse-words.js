/*
  151. Reverse Words in a String

  Tags: Medium, Two Pointers, String

  Given an input string `s`, reverse the order of the words.

  A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

  Return a string of the words in reverse order concatenated by a single space.

  Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

  Example 1:

  Input: s = "the sky is blue"
  Output: "blue is sky the"
  
  Example 2:

  Input: s = "  hello world  "
  Output: "world hello"
  Explanation: Your reversed string should not contain leading or trailing spaces.
  
  Example 3:

  Input: s = "a good   example"
  Output: "example good a"
  Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
  
  Constraints:
  - 1 <= s.length <= 104
  - `s` contains English letters (upper-case and lower-case), digits, and spaces ' '.
  - There is at least one word in `s`.
  

  Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
*/

/**
 * @param {string} s
 * @return {string}
 */

// const reverseWords = (s) => {
//   if (s.length === 1) return s

//   let words = [];

//   let i = s.length - 1;
//   let j = i;

//   while (i > 0 && j > 0) {
//     if (s[i] === ' ' && s[j] === ' ') {
//       i--;
//       j--;
//     }

//     if (s[i] !== ' ') {
//       while (s[j] !== ' ' && j > 0) j--;
//       let start = j === 0 && s[j] !== ' ' ? 0 : j + 1;
//       words.push(s.substring(start, i + 1));
//       i = j;
//     }
//   }

//   return words.join(' ');
// };

const reverseWords = (s) => {
  // Create two pointers on start and end of string
  let i = 0;
  let j = s.length - 1;
  // Trim to remove leading and trailing spaces
  while (i <= j && s[i] === ' ') i++; // Find the first non-space char
  while (j >= i && s[j] === ' ') j--; // Find the last non-space char
  s = s.substring(i, j + 1);

  // Create array of words without spaces
  let words = s.split(/\s+/);
  // Initialize empty result string
  let result = '';

  // Loop through words array from end & add word to result string
  for (let k = words.length - 1; k > 0; k--) {
    result += words[k] + ' ';
  }
  // Add remaining first element to avoid adding space
  result += words[0];
  // Return result
  return result;
};

console.log(reverseWords('the sky is blue')); // "blue is sky the"
console.log(reverseWords('  hello world  ')); // "world hello"
console.log(reverseWords('a good   example')); // "example good a"
