import { sum } from '@/domain/work/work.js';

describe('Work domain testes', () => {
  it('should return a 5 with adding 2 + 3', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
