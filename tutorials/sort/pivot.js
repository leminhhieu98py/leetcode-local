// pivot helper for the quicksort
function pivot(arr, comparator) {
  const start = 0;
  const end = arr.length - 1;
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

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strLength(a, b) {
  return a.length - b.length;
}

console.log(pivot(arr1)); // 3
console.log(pivot(arr2)); // 4
console.log(pivot(arr3, strLength)); // 1

console.log(arr1.slice(0, 3).sort((a, b) => a - b)); // [2, 3, 4]
console.log(arr1.slice(3).sort((a, b) => a - b)); // [5, 7, 8, 9, 10, 20]

console.log(arr2.slice(0, 4).sort((a, b) => a - b)); // [0, 2, 4, 5]
console.log(arr2.slice(4).sort((a, b) => a - b)); // [8, 10, 11, 12, 13, 16]

console.log(arr3.slice(0, 1).sort(strLength)); // ["Blue"]
console.log(arr3.slice(1).sort(strLength)); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
