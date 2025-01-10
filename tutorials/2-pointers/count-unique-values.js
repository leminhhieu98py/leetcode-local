const countUniqueValues = (arr) => {
  if (arr.length < 2) return arr.length;

  let result = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i + 1] - arr[i]);
    if (arr[i + 1] > arr[i]) result++;
  }

  console.log(result);
  return result;
};
countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
