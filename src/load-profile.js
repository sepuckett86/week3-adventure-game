import api from './services/api.js';

function loadProfile() {
    const avatarImage = document.getElementById('avatar');
    const nameSpan = document.getElementById('name');
    const energySpan = document.getElementById('energy-points');
    const happinessSpan = document.getElementById('happiness-points');

    const user = api.getUser();
    
    if(!user) {
        window.location = './';
    }

    avatarImage.src = './assets/' + user.avatar + '.png';
    nameSpan.textContent = user.name;
    energySpan.textContent = user.energy;
    happinessSpan.textContent = user.happiness;
}

export default loadProfile;