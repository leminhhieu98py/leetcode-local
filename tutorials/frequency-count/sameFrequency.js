const sameFrequency = (num1, num2) => {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  if (num1Str.length !== num2Str.length) return false;

  const num1InArr = num1Str.split('');
  const num2InArr = num2Str.toString().split('');

  const num1InObj = {};
  const num2InObj = {};

  num1InArr.forEach((num) => {
    num1InObj[num] = (num1InObj[num] || 0) + 1;
  });

  num2InArr.forEach((num) => {
    num2InObj[num] = (num2InObj[num] || 0) + 1;
  });

  for (const key in num1InObj) {
    if (num1InObj[key] !== num2InObj[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
