import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

QUnit.module('score quest');

test('returns user with adjusted energy', assert => {
    // Arrange
    const user = {
        energy: 50,
        happiness: 0
    };
    const choice = {
        energy: -10,
        happiness: 0
    };
    const expected = {
        energy: 40, 
        happiness: 0
    };
    // Act
    const actual = scoreQuest(user, choice);
    // Assert
    assert.deepEqual(actual, expected);
});

test('returns user with adjusted happiness', assert => {
    // Arrange
    const user = {
        energy: 50,
        happiness: 10
    };
    const choice = {
        energy: 0,
        happiness: 20
    };
    const expected = {
        energy: 50, 
        happiness: 30
    };
    // Act
    const actual = scoreQuest(user, choice);
    // Assert
    assert.deepEqual(actual, expected);
});