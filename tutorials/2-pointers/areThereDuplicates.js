function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  console.log(args.sort((a, b) => a - b));
}

areThereDuplicates(1, 3, 2); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
