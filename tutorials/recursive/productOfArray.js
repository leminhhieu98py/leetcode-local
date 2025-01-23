function productOfArray(arr) {
  if (arr.includes(0)) return 0;
  if (!arr[0]) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 0, 7])); // 0
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
