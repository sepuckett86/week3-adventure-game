import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

QUnit.module('score quest');

test('returns user with adjusted energy, happiness, completed', assert => {
    // Arrange
    const user = {
        energy: 50,
        happiness: 0,
        completed: {}
    };
    const choice = {
        energy: -10,
        happiness: 20
    };
    const questId = 'quest1';
    const expected = {
        energy: 40, 
        happiness: 20,
        completed: { quest1: true }
    };
    // Act
    const actual = scoreQuest(user, choice, questId);
    // Assert
    assert.deepEqual(actual, expected);
});
