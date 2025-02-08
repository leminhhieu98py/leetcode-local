const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const selectionSort = (arr, comparator) => {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (typeof comparator === 'function') {
        if (comparator(arr[j], arr[minIdx]) < 0) {
          minIdx = j;
        }
      } else if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }

      if (j === arr.length - 1 && minIdx !== i) {
        swap(arr, minIdx, i);
      }
    }
  }

  return arr;
};

console.log(selectionSort([1, 3, 2, 4, 5, 1]));

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
