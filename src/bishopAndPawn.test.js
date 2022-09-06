const solution = require('./bishopAndPawn.js');

test('test 1', () => {
    expect(solution('a1', 'c3')).toBe(true);
});

test('test 2', () => {
    expect(solution('h1', 'h3')).toBe(false);
});

test('test 3', () => {
    expect(solution('a5', 'c3')).toBe(true);
});

test('test 4', () => {
    expect(solution('g1', 'f3')).toBe(false);
});

test('test 5', () => {
    expect(solution('e7', 'd6')).toBe(true);
});

test('test 6', () => {
    expect(solution('e7', 'a3')).toBe(true);
});

test('test 7', () => {
    expect(solution('e3', 'a7')).toBe(true);
});

test('test 8', () => {
    expect(solution('a1', 'h8')).toBe(true);
});

test('test 9', () => {
    expect(solution('a1', 'h7')).toBe(false);
});

test('test 10', () => {
    expect(solution('h1', 'a8')).toBe(true);
});
