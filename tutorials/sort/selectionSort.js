const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const selectionSort = (arr) => {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;

      if (j === arr.length - 1 && minIdx !== i) {
        swap(arr, minIdx, i);
      }
    }
  }

  return arr;
};

console.log(selectionSort([1, 3, 2, 4, 5, 1]));
