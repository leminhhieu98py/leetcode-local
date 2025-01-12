const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;

  let result = 0;

  for (let i = 0; i < num; i++) {
    result += arr[i];
  }

  let temp = result;

  for (let i = num; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - num];
    if (temp > result) result = temp;
  }

  return result;
};

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4);
maxSubArraySum(
  [
    4, 8, 2, 65, 8, 4, 3, 7, 2, 7, 0, 7, 43, 5, 76, 3, 6, 34, 34, 74, 1, 3, 6, 34, 1, 34, 6, 8, 566,
    23, 5, 2, 6, 7, 4, 235, 7, 54, 6
  ],
  4
);
maxSubArraySum([4, 2, 1, 6], 1);
maxSubArraySum([4, 2, 1, 6, 2], 4);
maxSubArraySum([], 4);
