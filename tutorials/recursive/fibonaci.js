function fibonaci(num) {
  if (num < 3) return 1;

  return fibonaci(num - 1) + fibonaci(num - 2);
}

// function fibonaci(num) {
//   let sum = 0;
//   let prevSum = 1;

//   for (let i = 1; i <= num; i++) {
//     sum += prevSum;
//     prevSum = sum - prevSum;
//   }

//   return sum;
// }

console.log(fibonaci(10)); // 55
console.log(fibonaci(28)); // 317811
console.log(fibonaci(35)); // 9227465
