//  own solution
function quickSort(array = []) {
  if (array.length <= 1) return array;

  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[0]) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return quickSort(leftArr).concat(array[0], quickSort(rightArr));
}

console.log(quickSort([4, 7, 2, 2, 1, 3, 6])); // [1, 2, 2, 3, 4, 6, 7]
console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
