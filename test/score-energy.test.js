import scoreEnergy from '../src/end/score-energy.js';

const test = QUnit.test;

QUnit.module('score energy');

test('return shattered if under 15 energy', assert => {
    const user = {
        energy: 14
    };
    const expected = 'shattered';
    const actual = scoreEnergy(user);
    assert.equal(actual, expected);
});

test('return tired if under 30 energy but 15 or higher', assert => {
    const user = {
        energy: 15
    };
    const expected = 'tired';
    const actual = scoreEnergy(user);
    assert.equal(actual, expected);
});

test('return energetic if 30 or higher energy', assert => {
    const user = {
        energy: 30
    };
    const expected = 'energetic';
    const actual = scoreEnergy(user);
    assert.equal(actual, expected);
});