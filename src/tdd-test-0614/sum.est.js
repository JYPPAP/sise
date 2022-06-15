/* sum에서 분리해야 객체 형태로 받아서 사용할 수 있다. */
const { sum, sumOf } = require('./sum');

describe('sum', () => {
  it('1 + 2 계산', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('모든 숫자 더하기', () => {
    const array = [1,2,3,4,5];
    expect(sumOf(array)).toBe(15);
  });
});