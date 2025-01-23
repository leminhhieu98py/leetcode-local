// Own solution
function collectOddValues(arr, index = 0) {
  if (!arr?.length) return null;

  if (index === arr.length) return arr;

  if (arr[index] % 2 === 1) {
    // odd value case
    index++;
  } else {
    arr.splice(index, 1);
  }

  return collectOddValues(arr, index);
}

// tutorial solution
function collectOddValues(arr) {
  const result = [];

  function helper(helperArr) {
    if (helperArr.length === 0) return;

    if (helperArr[0] % 2 === 1) result.push(helperArr[0]);

    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3]));
console.log(collectOddValues([1, 2, 3, 4, 5, 4, 2, 3, 5, 1, 2, 1, 1, 1, 2]));
