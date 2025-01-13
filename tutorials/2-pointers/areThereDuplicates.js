function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  const stringArgs = args.map((arg) => arg?.toString());
  const sortStringArgs = stringArgs.sort();

  console.log('sortStringArgs', sortStringArgs)

  for (let i = 0; i < sortStringArgs.length - 1; i++) {
    if (sortStringArgs[i] === sortStringArgs[i + 1]) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 3, 2, 5, 4, 7, 9, 13, 4, 17, 9)); // true
console.log(areThereDuplicates(1, 3, 2, 5, 4, 7)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
