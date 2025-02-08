const insertionSort = (arr, comparator) => {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    const condition = (j) => {
      if (typeof comparator === 'function') {
        return comparator(arr[j], currentValue) > 0;
      }

      return arr[j] > currentValue;
    };

    while (j >= 0 && condition(j)) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
};

console.log(insertionSort([1, 3, 5, 2, 0, 2, 4, 5]));

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
