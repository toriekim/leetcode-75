/*
  345. Reverse Vowels of a String

  Given a string `s`, reverse only all the vowels in the string and return it.

  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

  Example 1:
  Input: s = "hello"
  Output: "holle"

  Example 2:
  Input: s = "leetcode"
  Output: "leotcede"

  Constraints:
  1 <= s.length <= 3 * 10^5
  s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = (s) => {
  // Create set for O(1) lookup for vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'I', 'U', 'E', 'O']);
  // Create array from string
  const word = s.split('');

  // Create 2 pointers for each beginning & end of the string
  let start = 0;
  let end = s.length - 1;

  // Loop through the word array
  while (start < end) {
    // If start letter is not a vowel, move pointer
    if (!vowels.has(word[start])) start++;
    // If end letter is not a vowel, move pointer
    if (!vowels.has(word[end])) end--;
    // If start & end are vowels, swap & move pointers
    if (vowels.has(word[start]) && vowels.has(word[end])) {
      [word[start], word[end]] = [word[end], word[start]];
      start++;
      end--;
    }
  }
  // Return the new string with reversed vowels
  return word.join('');
};
