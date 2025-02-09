function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  const resultArr = [];

  while (i < arr1.length && j < arr2.length) {
    console.log({ i, j });

    if (arr1[i] <= arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
    }
  }

  console.log(resultArr);
  return resultArr;
}

function mergeSort(arr) {
  // TODO: implement it fully later
}

merge([2, 4, 5, 8, 9, 9, 10], [1, 2, 2, 7]);
