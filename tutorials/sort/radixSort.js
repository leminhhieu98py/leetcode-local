const getDigit = (num, indexFromRight) =>
  Math.floor((Math.abs(num) / Math.pow(10, indexFromRight)) % 10);

const digitCount = (num) => Math.floor(Math.log10(Math.abs(num))) + 1;

console.log(getDigit(123450, 0)); // 0
console.log(getDigit(123450, 1)); // 5
console.log(getDigit(123450, 2)); // 4
console.log(getDigit(123450, 3)); // 3
console.log(getDigit(123450, 4)); // 2
console.log(getDigit(123450, 9)); // 1
