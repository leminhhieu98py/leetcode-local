const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// default sort without comparator
const bubbleSort = (arr, comparator) => {
  if (arr.length <= 1) return arr;

  let noSwap = true;

  for (let i = 0; i < arr.length - 1; i++) {
    noSwap = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      const currentValue = arr[j];
      const nextValue = arr[j + 1];

      // TODO: add a comparator later
      if (typeof comparator === 'function') {
        if (comparator(currentValue, nextValue) > 0) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      } else if (currentValue > nextValue) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return arr;
};

console.log(bubbleSort([1, 5, 4, -3, 2, 3], (a, b) => (a - b > 0 ? -1 : 1)));
console.log([1, 5, 4, -3, 2, 3].sort((a, b) => (a - b > 0 ? -1 : 1)));
