const test = QUnit.test;

test('returns user with adjusted energy', assert => {
    // Arrange
    const user = {
        energy: 50
    };
    const choice = {
        energy: -10
    };
    const expected = {
        energy: 40
    };
    // Act
    const actual = scoreQuest(user, choice);
    // Assert
    assert.deepEqual(actual, expected);
});