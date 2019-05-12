import energyOutcomes from './energy-outcomes.js';
import happinessOutcomes from './happiness-outcomes.js';
import loadProfile from '../load-profile.js';
import isDepleted from '../map/is-depleted.js';
import hasCompletedAllQuests from '../map/has-completed-all-quests.js';
import scoreEnergy from './score-energy.js';
import scoreHappiness from './score-happiness.js';
import api from '../services/api.js';

const endMessageElement = document.getElementById('end-message');
const endImageElement = document.getElementById('end-image');

const user = api.getUser();
const energy = scoreEnergy(user);
const happiness = scoreHappiness(user);

let endMessage = '';
if(hasCompletedAllQuests(user)) {
    endMessage = `You made it to all parts of the house 
    during your party and head to the bedroom for a well-deserved rest. ` + 
    energyOutcomes[energy] + ' ' + happinessOutcomes[happiness];
} else if(isDepleted(user)) {
    endMessage = `You did not make it 
    through the night and head in early to bed. ` + 
    energyOutcomes[energy] + ' ' + happinessOutcomes[happiness];
} else {
    endMessage = `You made it with 
    energy to spare! ` + 
    energyOutcomes[energy] + ' ' + happinessOutcomes[happiness];
}
endMessageElement.textContent = endMessage;


if(happiness === 'miserable') {
    endImageElement.src = './assets/rain.jpg';
} else {
    endImageElement.src = './assets/bed.jpg';
}





loadProfile();