function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  const strLength = str.length;
  if (!str || strLength === 1) return strLength;

  let start = 0;
  //   let end = 1;
  //   let currentStr = str[0];
  let seen = {};
  let max = 1;

  for (let i = 1; i < str.length; i++) {
    const currentChar = str[i];
    if (seen[currentChar]) {
      start = Math.max(start, seen[currentChar]);
    }

    max = Math.max(max, i + 1 - start);

    console.log({ start, max });

    seen[currentChar] = i + 1;
  }

  console.log('max', max);
  return max;
}

// findLongestSubstring(''); // 0
// findLongestSubstring('a'); // 1
// findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6
