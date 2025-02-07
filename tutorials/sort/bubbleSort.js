const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// default sort without comparator
const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const currentValue = arr[j];
      const nextValue = arr[j + 1];

      // TODO: add a comparator later
      if (currentValue > nextValue) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

console.log(bubbleSort([1, 5, 4, -3, 2, 3]));
