import { showTotal } from './index';
test("It should be 3", () => {
    const total: number = showTotal(1, 2);
    const expected = 3;
    expect(total).toBe(expected);
});