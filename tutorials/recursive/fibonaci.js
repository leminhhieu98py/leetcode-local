function fibonaci(num) {
  if (num < 3) return 1;

  return fibonaci(num - 1) + fibonaci(num - 2);
}

console.log(fibonaci(10)); // 55
console.log(fibonaci(28)); // 317811
console.log(fibonaci(35)); // 9227465
