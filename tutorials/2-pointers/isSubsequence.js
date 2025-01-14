function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  const str1Length = str1.length;
  const str2Length = str2.length;

  if (str1Length > str2Length) return false;
  if (!str1) return true;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2Length) {
    if (pointer1 === str1Length - 1) return true;

    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
