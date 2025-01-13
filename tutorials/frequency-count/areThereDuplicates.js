function areThereDuplicates(...args) {
  const argsInObj = {};

  for (let i = 0; i < args.length; i++) {
    const num = args[i];

    if (argsInObj[num] >= 1) return true;

    argsInObj[num] = (argsInObj[num] || 0) + 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 3, 2)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
