const finalElementOfAnArr = (arr) => arr.slice(-1)[0];

const search = (sortedArr, num) => {
  const arrayLength = sortedArr.length;
  if (arrayLength === 0 || num > finalElementOfAnArr(sortedArr)) {
    console.log(-1);
    return -1;
  }

  let result = -1;
  let tempArr = sortedArr;
  let tempIndex = 0;

  while (result < 0) {
    if (tempArr.length === 1) {
      if (tempArr[0] === num) {
        result = tempIndex;
      }
      break;
    }
    const midIndex = Math.floor(tempArr.length / 2);
    const leftArr = tempArr.slice(0, midIndex);
    const rightArr = tempArr.slice(midIndex);

    if (finalElementOfAnArr(leftArr) >= num) {
      tempArr = leftArr;
      tempIndex === leftArr.length;
    } else {
      tempArr = rightArr;
      tempIndex += leftArr.length;
    }
  }

  console.log(result)
  return result;
};

search([1, 2, 3, 4, 5, 6], 5);
search([1, 2, 3, 4, 5, 6], 11);
search([-15, -10, -5, 0, 1, 2, 3, 4, 5, 6, 9, 13, 17, 22], 11);
search([-15, -10, -5, 0, 1, 2, 3, 4, 5, 6, 9, 13, 17, 22], 9);
search([], 11);
