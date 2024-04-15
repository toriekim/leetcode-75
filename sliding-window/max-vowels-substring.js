/*
  1456. Maximum Number of Vowels in a Substring of Given Length

  Tags: Medium, String, Sliding Window

  Given a string s and an integer k, return the maximum number of 
  vowel letters in any substring of s with length k.

  Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

  Example 1:
  Input: s = "abciiidef", k = 3
  Output: 3
  Explanation: The substring "iii" contains 3 vowel letters.
  
  Example 2:
  Input: s = "aeiou", k = 2
  Output: 2
  Explanation: Any substring of length 2 contains 2 vowels.
  
  Example 3:
  Input: s = "leetcode", k = 3
  Output: 2
  Explanation: "lee", "eet" and "ode" contain 2 vowels.
  

  Constraints:
  - `1 <= s.length <= 105`
  - `s` consists of lowercase English letters.
  - `1 <= k <= s.length` 
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// const maxVowels = (s, k) => {
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

//   // set up start and end of sliding window
//   let start = 0;
//   let end = 0;
//   // set up variables to keep track of vowel counts
//   let prevWasVowel = false;
//   let currVowels = 0;
//   let maxNumVowels = 0;

//   while (end < start + k) {
//     if (vowels.has(s[end])) {
//       currVowels += 1;
//       maxNumVowels = Math.max(currVowels, maxNumVowels);
//     }
//     end += 1;
//   }

//   while (start < end && end <= s.length) {
//     if (vowels.has(s[start])) {
//       prevWasVowel = true;
//     } else prevWasVowel = false;
//     start += 1;
//     end += 1;
//     if (prevWasVowel) currVowels -= 1;
//     if (vowels.has(s[end - 1])) currVowels += 1;
//     maxNumVowels = Math.max(currVowels, maxNumVowels);
//   }

//   return maxNumVowels;
// };

const maxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let currVowels = 0;
  let maxNumVowels = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currVowels += 1;
  }

  if (currVowels === k) return currVowels;
  maxNumVowels = currVowels;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) currVowels -= 1;
    if (vowels.has(s[i])) currVowels += 1;

    if (currVowels === k) return currVowels;
    maxNumVowels = Math.max(currVowels, maxNumVowels);
  }

  return maxNumVowels;
};

// ----------------------------------------------------------------
let s = 'abciiidef';
let k = 3;
console.log(maxVowels(s, k)); // 3
// s = 'aeiou';
// k = 2;
// console.log(maxVowels(s, k)); // 2
// s = 'leetcode';
// k = 3;
// console.log(maxVowels(s, k)); // 2
