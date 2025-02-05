function binarySearch(numArr, num) {
  if (!numArr || !Array.isArray(numArr)) return -1;
  const arrLength = numArr.length;

  if (arrLength === 0 || num < numArr[0] || num > numArr[arrLength - 1]) return -1;

  if (arrLength === 1) {
    if (numArr[0] === num) return 0;
    return -1;
  }

  let start = 0;
  let end = arrLength - 1;
  let middle = Math.floor((start + end) / 2);

  while (numArr[middle] !== num && start <= end) {
    if (num > numArr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return numArr[middle] === num ? middle : -1;
}

console.log(binarySearch([1], 1)); // 0
console.log(binarySearch([1, 1, 3], 2)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)
); // 2
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)
); // 16
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)
); // -1
