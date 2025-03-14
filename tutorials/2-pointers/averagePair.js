function averagePair(numArr, targetNum) {
  // add whatever parameters you deem necessary - good luck!
  const numArrLength = numArr.length;

  if (numArrLength === 0) return false;
  if (numArrLength === 1) return numArr[0] === targetNum;

  let left = 0;
  let right = numArrLength - 1;

  while (left < right) {
    const averageValue = (numArr[left] + numArr[right]) / 2;

    if (averageValue === targetNum) {
      return true;
    } else if (averageValue < targetNum) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
