import isDepleted from '../src/map/is-depleted.js';

const test = QUnit.test;

QUnit.module('is depleted');

test('return true if energy below 0', assert => {
    const user = {
        energy: -10
    };
    const expected = true;
    const actual = isDepleted(user);
    assert.equal(actual, expected);
});

test('return true if energy equal to 0', assert => {
    const user = {
        energy: 0
    };
    const expected = true;
    const actual = isDepleted(user);
    assert.equal(actual, expected);
});

test('return false if energy above', assert => {
    const user = {
        energy: 10
    };
    const expected = false;
    const actual = isDepleted(user);
    assert.equal(actual, expected);
});