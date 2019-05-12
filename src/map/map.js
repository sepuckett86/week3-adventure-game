import quests from '../services/quest-data.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import api from '../services/api.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';
import isDepleted from './is-depleted.js';

const linkParent = document.getElementById('map');

loadProfile();
const user = api.getUser();

if(hasCompletedAllQuests(quests, user) || isDepleted(user)) {
    window.location = './end.html';
}

let questDom;

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if(user.completed[quest.id]) {
        questDom = createCompletedQuest(quest);
    }
    else {
        questDom = createQuestLink(quest);
    }

    linkParent.appendChild(questDom);
}
