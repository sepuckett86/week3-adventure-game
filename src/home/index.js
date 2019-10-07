import makeUser from './makeUser.js';
import api from '../services/api.js';

const createCharacterForm = document.getElementById('create-character-form');

createCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(createCharacterForm);
    const userObject = makeUser(formData);
    api.saveUser(userObject);
    window.location = './map.html';
});

