const insetionSort = (arr = []) => {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
};

console.log(insetionSort([1, 3, 5, 2, 0, 2, 4, 5]));
