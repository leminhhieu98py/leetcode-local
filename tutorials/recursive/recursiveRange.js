// only natural number
function recursiveRange(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;

  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(0)); // 1
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
