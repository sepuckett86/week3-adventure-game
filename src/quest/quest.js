import loadProfile from '../load-profile.js';
import createChoice from '../quest/create-choice.js';
import api from '../services/api.js';

const choiceParent = document.getElementById('quest-choices');
const choiceForm = document.getElementById('choice-form');
const resultSection = document.getElementById('result');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = api.getQuest(id);
const quests = api.getQuests();

loadProfile();

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDom = createChoice(choice);
    choiceParent.appendChild(choiceDom);
}