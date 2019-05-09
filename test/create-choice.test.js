const test = QUnit.test;

function createChoiceRadio(choice) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.id = choice.id;
    input.type = 'radio';
    input.name = 'choice-radio';
    input.value = choice.id;
    input.required = true;

    label.setAttribute('for', choice.id);
    label.textContent = choice.description;

    div.appendChild(input);
    div.appendChild(label);

    return div;
}

test('create choice radio', assert => {
    // Arrange
    const choice = {
        id: 'choice1',
        description: 'Description'
    };
    const expected = '<div><input id="choice1" type="radio" name="choice-radio" value="choice1" required=""><label for="choice1">Description</label></div>'; 
    // Act
    const div = createChoiceRadio(choice);
    // Assert
    assert.equal(div.outerHTML, expected);
});