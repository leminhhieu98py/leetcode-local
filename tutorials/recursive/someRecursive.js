// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cb) {
  let result = false;

  function customIsEvery(inputArr) {
    if (!inputArr.length) return;

    if (cb(inputArr[0])) {
      result = true;
      return;
    }

    customIsEvery(inputArr.slice(1));
  }

  customIsEvery(arr);

  return result;
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
