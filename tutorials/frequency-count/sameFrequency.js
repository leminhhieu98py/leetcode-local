const sameFrequency = (num1, num2) => {
  if (num1.length !== num2.length) return false;

  const num1InArr = num1.toString().split('');
  const num2InArr = num2.toString().split('');

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
