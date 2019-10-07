import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest');

test('returns a span element', assert => {
    // Arrange
    const quest = {
        title: 'Quest 1',
        map: {
            top: '72%',
            left: '10%'
        }
    };
    const expected = '<span class="completed" style="top: 72%; left: 10%;">Quest 1</span>';
    // Act
    const span = createCompletedQuest(quest);
    const actual = span.outerHTML;
    // Assert
    assert.equal(actual, expected);
});