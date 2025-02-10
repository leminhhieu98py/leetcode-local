function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  const resultArr = [];

  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      resultArr.push(arr2[j]);
      j++;
      continue;
    }

    if (j === arr2.length) {
      resultArr.push(arr1[i]);
      i++;
      continue;
    }

    if (arr1[i] <= arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
    }
  }

  return resultArr;
}

function mergeSort(arr) {
  // TODO: implement it fully later
}

merge([2, 4, 5, 8, 9, 9, 10], [1, 2, 2, 7]);
merge([], [1, 2, 2, 7]);
