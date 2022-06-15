function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

/* 한 파일에서 여러 함수를 보낼 때는 이렇게 분리한다. */
exports.sum = sum;
exports.sumOf = sumOf;
