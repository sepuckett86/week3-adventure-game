const test = QUnit.test;

QUnit.module('is depleted');

test('return true if energy below 0', assert => {
    const user = {
        energy: -10
    }
    const expected = true;
    const actual = isDepleted(user);
    assert.equal(actual, expected);
});