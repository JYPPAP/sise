const stats = require('./stats');

describe('값 구하기', () => {
  it('배열에서 최댓값 구하기', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it('배열에서 최솟값 구하기', () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
  it('배열에서 평균값 구하기', () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });
  describe('값 정렬', () => {
    it('배열을 오름차순 정렬', () => {
      expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
  });
});