/*
  443. String Compression

  Tags: Medium, Two Pointers, String

  Given an array of characters `chars`, compress it using the following algorithm:

  Begin with an empty string `s`. For each group of consecutive repeating characters in `chars`:

  - If the group's length is 1, append the character to `s`.
  - Otherwise, append the character followed by the group's length.

  The compressed string `s` should not be returned separately, but instead be stored in the input character array `chars`. Note that the group lengths that are 10 or longer will be split into multiple characters in `chars`.

  After you are done modifying the input array, return *the new length of the array*.

  You must write an algorithm that uses only constant extra space.


  Example 1:
    Input: chars = ["a","a","b","b","c","c","c"]
    Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
    Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

  Example 2:
    Input: chars = ["a"]
    Output: Return 1, and the first character of the input array should be: ["a"]
    Explanation: The only group is "a", which remains uncompressed since it's a single character.

  Example 3:
    Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
    Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".


  Constraints:
    - `1 <= chars.length <= 2000`
    - `chars[i]` is a lower-case English letter, upper-case English letter, digit, or symbol.
*/
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  // Edge case: If chars only has 1 element, return 1
  if (chars.length === 1) return 1;
  // Initialize two pointers: i and j; slow/fast pointers approach
  let i = 0;
  let j = i;
  // Loop through input array while j is less than chars length
  while (j < chars.length) {
    // Initialize count to 0; store current character
    let count = 0;
    let currentChar = chars[j];
    // Count repeating characters & move fast pointer forward
    while (j < chars.length && chars[j] === currentChar) {
      j++;
      count++;
    }
    // Write current character at i index & move i forward
    chars[i++] = currentChar;
    // If count is greater than 1...
    if (count > 1) {
      // Convert count to string and add to chars array
      for (let digit of count.toString()) {
        // Move i forward after adding digit
        chars[i++] = digit;
      }
    }
  }
  // i will be at the end of compressed string portion of chars
  return i;
};
