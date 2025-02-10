function merge(arr1, arr2, comparator) {
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

    if (typeof comparator === 'function') {
      if (comparator(arr1[i], arr2[j]) < 0) {
        resultArr.push(arr1[i]);
        i++;
      } else {
        resultArr.push(arr2[j]);
        j++;
      }
    } else {
      if (arr1[i] <= arr2[j]) {
        resultArr.push(arr1[i]);
        i++;
      } else {
        resultArr.push(arr2[j]);
        j++;
      }
    }
  }

  return resultArr;
}

// TODO: own solution
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const splitArrList = [];

  for (let i = 0; i < arr.length; i++) {
    splitArrList.push([arr[i]]);
  }

  if (splitArrList.length % 2 !== 0) {
    splitArrList.push([]);
  }

  let mergeArrList = [];
  let result = [...splitArrList];

  while (result.length !== 1) {
    mergeArrList = [];
    for (let i = 0; i < result.length - 1; i += 2) {
      const mergeArr = merge(result[i], result[i + 1]);
      mergeArrList.push(mergeArr);
    }

    if (mergeArrList.length % 2 !== 0 && mergeArrList.length !== 1) {
      mergeArrList.push([]);
    }

    result = mergeArrList;
  }

  return result[0];
}

// TODO: tutorial solution
function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, midIndex));
  const rightArr = mergeSort(arr.slice(midIndex));

  return merge(leftArr, rightArr);
}

var names = ['Bob', 'Ethel', 'Christine'];
var otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

merge(names, otherNames, stringLengthComparator);

mergeSort([2, 4, 5, 8, 9, 9, 10, 1, 2, 2, 7]);
