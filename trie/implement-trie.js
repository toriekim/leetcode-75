/*
  208. Implement Trie (Prefix Tree)
  https://leetcode.com/problems/implement-trie-prefix-tree/

  Tags: Medium, Hash Table, String, Design, Trie

  A trie[https://en.wikipedia.org/wiki/Trie] (pronounced as "try") 
  or prefix tree is a tree data structure used to efficiently store 
  and retrieve keys in a dataset of strings. There are various 
  applications of this data structure, such as autocomplete and 
  spellchecker.

  Implement the Trie class:
    - `Trie()` Initializes the trie object.
    - `void insert(String word)` Inserts the string word into the trie.
    - `boolean search(String word)` Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
    - `boolean startsWith(String prefix)` Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
    

  Example 1:
    Input
    ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
    [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
    Output
    [null, null, true, false, true, null, true]

    Explanation
    Trie trie = new Trie();
    trie.insert("apple");
    trie.search("apple");   // return True
    trie.search("app");     // return False
    trie.startsWith("app"); // return True
    trie.insert("app");
    trie.search("app");     // return True
  

  Constraints:
    - 1 <= word.length, prefix.length <= 2000
    - `word` and `prefix` consist only of lowercase English letters.
    - At most 3 * 10^4 calls in total will be made to `insert`, `search`, and `startsWith`.    
*/
class Trie {
  constructor() {
    this.root = {};
  }

  /**
   * Inserts a word into the trie
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    // Set `isEnd` to true for the last char node in a word
    node.isEnd = true;
  }

  /**
   * Returns if the word is in the trie
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    // Traverse through trie to find char path
    let node = this.searchNode(word);
    // If trie had all the chars, node pointer should be at the last char
    // Otherwise, node pointer is null
    return node !== null ? node.isEnd === true : false;
  }

  /**
   * Returns if there is any word in the trie that starts with prefix
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.searchNode(prefix);
    return node !== null;
  }

  // Helper function to search a node in the trie
  searchNode(searchStr) {
    let node = this.root;
    for (const char of searchStr) {
      if (node[char]) node = node[char];
      else return null;
    }
    return node;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
