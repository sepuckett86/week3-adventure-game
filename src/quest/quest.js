import loadProfile from '../load-profile.js';
import createChoice from '../quest/create-choice.js';
import api from '../services/api.js';

const choiceParent = document.getElementById('quest-choices');
const choiceForm = document.getElementById('choice-form');
const resultSection = document.getElementById('result');
const resultDescription = document.getElementById('result-description');
const questDescription = document.getElementById('quest-description');
const questImage = document.getElementById('quest-image');
const questTitle = document.getElementById('quest-title');
const resultEnergy = document.getElementById('result-energy');
const resultHappiness = document.getElementById('result-happiness');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = api.getQuest(id);

loadProfile();

questTitle.textContent = quest.title;
questDescription.textContent = quest.description;
questImage.src = quest.image;

// Display choices
for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDom = createChoice(choice);
    choiceParent.appendChild(choiceDom);
}

// On choice submit
choiceForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(choiceForm);
    const value = formData.get('choice-radio');

    for(let i = 0; i < quest.choices.length; i++) {
        const choice = quest.choices[i];
        if(choice.id === value) {
            resultDescription.textContent = choice.result;
            resultEnergy.textContent = choice.energy + ' Energy';
            resultHappiness.textContent = choice.happiness + ' Happiness';
        }
    }
    
    resultSection.classList.remove('hidden');
    choiceForm.classList.add('hidden'); 
});