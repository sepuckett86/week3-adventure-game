import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('returns a link element', assert => {
    // Arrange
    const quest = {
        title: 'Quest 1',
        id: 'quest1',
        map: {
            top: '72%',
            left: '10%'
        }
    };
    const expected = '<a href="./quest.html?id=quest1" style="top: 72%; left: 10%;">Quest 1</a>';
    // Act 

    const link = createQuestLink(quest);
    const actual = link.outerHTML;
    // Assert
    assert.equal(actual, expected);
});