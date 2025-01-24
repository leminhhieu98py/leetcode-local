function flatten(arr) {
  if (!arr.length) return;

  const firstElement = arr[0];

  const remainArr = flatten(arr.slice(1));

  if (remainArr?.length) {
    return Array.isArray(firstElement)
      ? flatten(firstElement).concat(remainArr)
      : [firstElement].concat(remainArr);
  }

  return Array.isArray(firstElement) ? flatten(firstElement) : [firstElement];
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
