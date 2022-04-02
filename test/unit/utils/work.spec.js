import { sum } from '@/utils/work.utils';

describe('Work utils', () => {
  test('should return a valid sum', () => {
    expect(5).toEqual(sum(3, 2));
  });
});
