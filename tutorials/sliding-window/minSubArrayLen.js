function minSubArrayLen(arr, num) {
  const arrLength = arr.length;
  if (!arrLength) return 0;

  let arrMaxNumber;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > arrMaxNumber) {
      arrMaxNumber = arr[i];
    }
  }

  if (arrMaxNumber > num) return 1;

  let startIndex = 0;
  let endIndex = 1;
  let total = arr[0];
  let minLen = Infinity;

  while (startIndex < arrLength) {
    if (total < num && endIndex < arrLength) {
      total += arr[endIndex];
      endIndex++;
    } else if (total >= num) {
      minLen = Math.min(minLen, endIndex - startIndex);
      total -= arr[startIndex];
      startIndex++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
