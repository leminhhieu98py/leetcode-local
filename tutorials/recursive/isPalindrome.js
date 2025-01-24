function isPalindrome(str) {
  function reverse(str) {
    const strLength = str.length;
    if (strLength <= 1) return str;

    return str.slice(-1) + reverse(str.slice(0, strLength - 1));
  }

  const result = reverse(str) === str;

  return result;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
