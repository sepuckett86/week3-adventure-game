import makeUser from './makeUser.js';

const createCharacterForm = document.getElementById('create-character-form');

createCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(createCharacterForm);
    console.log(makeUser(formData));
});

