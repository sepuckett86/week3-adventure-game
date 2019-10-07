import scoreHappiness from '../src/end/score-happiness.js';

const test = QUnit.test;

QUnit.module('score happiness');

test('return miserable if 0 happiness', assert => {
    const user = {
        happiness: 0
    };
    const expected = 'miserable';
    const actual = scoreHappiness(user);
    assert.equal(actual, expected);
});

test('return content if greater than 0 and less than 25 happiness', assert => {
    const user = {
        happiness: 24
    };
    const expected = 'content';
    const actual = scoreHappiness(user);
    assert.equal(actual, expected);
});

test('return ecstatic if 25 or greater happiness', assert => {
    const user = {
        happiness: 25
    };
    const expected = 'ecstatic';
    const actual = scoreHappiness(user);
    assert.equal(actual, expected);
});