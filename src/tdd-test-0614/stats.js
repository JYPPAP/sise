exports.max = numbers => Math.max(...numbers);
exports.min = numbers => Math.min(...numbers);
/* 1 */
// exports.avg = numbers => {
//   const sum = numbers.reduce((acc, n) => acc + n, 0);
//   return sum / numbers.length;
// }
/* 2 */
// exports.avg = numbers => 
//   numbers.reduce((acc, n, i, array) => acc + n / array.length, 0);
/* 3 */
exports.avg = numbers => 
numbers.reduce((acc, n, i, {length}) => acc + n / length, 0);
exports.sort = numbers => numbers.sort((a, b) => a - b);