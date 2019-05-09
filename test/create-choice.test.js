const test = QUnit.test;

test('create choice radio', assert => {
    // Arrange
    const expected = '<div><input id="choice" type="radio" name="choice-radio" value="choice1" required><label for="choice">Choice</label></div>'; 
    // Act
    const div = createChoiceRadio(choice);
    // Assert
    assert.equal(div.outerHTML, expected);
});