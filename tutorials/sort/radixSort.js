const getDigit = (num, indexFromRight) =>
  Math.floor((Math.abs(num) / Math.pow(10, indexFromRight)) % 10);

const digitCount = (num) => Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigit = (numArr = []) => {
  if (numArr.length === 0) return 0;
  let max = 1;

  for (let i = 0; i < numArr.length; i++) {
    max = Math.max(digitCount(numArr[i]), max);
  }

  return max;
};

const radixSort = (numArr = []) => {
  if (numArr.length <= 1) return numArr;

  let result = numArr.slice(0);
  let buckets = Array.from({ length: 10 }, () => []);
  let mostDigitNumber = mostDigit(numArr);

  for (let count = 0; count < mostDigitNumber; count++) {
    buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < result.length; i++) {
      const digit = getDigit(result[i], count);

      buckets[digit].push(result[i]);
    }

    result = [];
    buckets.forEach((bucket) =>
      bucket.forEach((num) => {
        result.push(num);
      })
    );
  }

  return result;
};

console.log(getDigit(123450, 0)); // 0
console.log(getDigit(123450, 1)); // 5
console.log(getDigit(123450, 2)); // 4
console.log(getDigit(123450, 3)); // 3
console.log(getDigit(123450, 4)); // 2
console.log(getDigit(123450, 9)); // 1

console.log(mostDigit([1234, 2, 5])); // 4

radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
