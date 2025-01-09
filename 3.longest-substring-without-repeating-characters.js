/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (35.96%)
 * Likes:    40940
 * Dislikes: 1974
 * Total Accepted:    6.8M
 * Total Submissions: 18.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
//   if (s.length === 0 || s.length === 1) return s.length;

  let maxLength = 0;
  let currentString = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // console.log('i', i)
    const char = s[i];

    currentString += char;
    // console.log('72', currentString);

    if (currentString.includes(s[i + 1])) {
      if (currentString.length > maxLength) maxLength = currentString.length;

      currentString = '';
      i = ++count - 1;
    }

    // console.log('81', currentString);

    if (i === s.length - 1 && currentString.length > maxLength) maxLength = currentString.length;
  }

  return maxLength;
};
// @lc code=end

console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('aab'));
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(''));
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(' '));
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('au'));
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('bbbbb'));
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('pwwkew'));
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('abcabcbb'));
