// Own solution
// function isPalindrome(str) {
//   function reverse(str) {
//     const strLength = str.length;
//     if (strLength <= 1) return str;

//     return str.slice(-1) + reverse(str.slice(0, strLength - 1));
//   }

//   const result = reverse(str) === str;

//   return result;
// }

// Tutorial solution
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
