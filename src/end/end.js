import energyOutcomes from './energy-outcomes.js';
import happinessOutcomes from './happiness-outcomes.js';
import loadProfile from '../load-profile.js';

const endMessageElement = document.getElementById('end-message');
const endImageElement = document.getElementById('end-image');

const endDepletedMessage = `You did not make it 
    through the night and head in early to bed. ` + 
    energyOutcomes['shattered'] + ' ' + happinessOutcomes['ecstatic'];
const endEnergizedMessage = `You made it with 
    energy to spare! ` + 
    energyOutcomes['tired'] + ' ' + happinessOutcomes['ecstatic'];

endMessageElement.textContent = endEnergizedMessage || endDepletedMessage;
endImageElement.src = './assets/bed.jpg' || './assets/rain.jpg';

loadProfile();