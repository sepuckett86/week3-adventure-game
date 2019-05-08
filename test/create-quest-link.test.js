const test = QUnit.test;

test('returns a link element', assert => {
    // Arrange
    const quest = {
        title: 'Quest 1',
        id: 'quest1'
    };
    const expected = '<a href="./map.html?id=quest1">Quest 1</a>';
    // Act 

    const link = createQuestLink(quest);
    const actual = link.outerHTML;
    // Assert
    assert.test(actual, expected);
});