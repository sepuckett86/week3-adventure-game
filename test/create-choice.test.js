import createChoice from '../src/quest/create-choice.js';

const test = QUnit.test;

test('create choice radio', assert => {
    // Arrange
    const choice = {
        id: 'choice1',
        description: 'Description'
    };
    const expected = '<div><input id="choice1" type="radio" name="choice-radio" value="choice1" required=""><label for="choice1">Description</label></div>'; 
    // Act
    const div = createChoice(choice);
    // Assert
    assert.equal(div.outerHTML, expected);
});