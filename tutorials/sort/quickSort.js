//  own solution
function quickSort(array = [], comparator) {
  if (array.length <= 1) return array;

  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (typeof comparator === 'function') {
      if (comparator(array[i], array[0]) <= 0) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    } else {
      if (array[i] <= array[0]) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    }
  }

  return quickSort(leftArr).concat(array[0], quickSort(rightArr));
}

// Tutorial solution

function pivot(arr, start = 0, end = arr.length - 1, comparator) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (typeof comparator === 'function') {
      if (comparator(pivot, arr[i]) > 0) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    } else {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right); //3
//     //left
//     quickSort(arr, left, pivotIndex - 1);
//     //right
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

console.log(quickSort([4, 7, 2, 2, 1, 3, 6])); // [1, 2, 2, 3, 4, 6, 7]
console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var moarKittyData = [
  {
    name: 'LilBub',
    age: 7
  },
  {
    name: 'Garfield',
    age: 40
  },
  {
    name: 'Heathcliff',
    age: 45
  },
  {
    name: 'Blue',
    age: 1
  },
  {
    name: 'Grumpy',
    age: 6
  }
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(quickSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
