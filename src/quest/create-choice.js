function createChoice(choice) {
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

export default createChoice;