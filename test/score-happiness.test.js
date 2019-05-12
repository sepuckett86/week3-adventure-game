const test = QUnit.test;

QUnit.module('score happiness');

test('return miserable/content/ecstatic if 0 happiness', assert => {
    const user = {
        happiness: 0
    };
    const expected = 'miserable';
    const actual = scoreHappiness(user);
    assert.equal(actual, expected);
});