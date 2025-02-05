function naiveSearch(longStr, shortStr) {
  let count = 0;

  for (let i = 0; i <= longStr.length - shortStr.length; i++) {
    if (longStr[i] === shortStr[0]) {
      if (shortStr.length === 1) {
        count++;
      } else {
        for (let j = 1; j < shortStr.length; j++) {
          if (longStr[i + j] !== shortStr[j]) break;

          if (j === shortStr.length - 1) count++;
        }
      }
    }
  }

  return count;
}

console.log(naiveSearch('lolie lolol', 'lol'));
