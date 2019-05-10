import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

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