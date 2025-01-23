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

console.log(collectOddValues([1, 2, 3]));
console.log(collectOddValues([1, 2, 3, 4, 5, 4, 2, 3, 5, 1, 2, 1, 1, 1, 2]));
