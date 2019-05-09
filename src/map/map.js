import quests from '../services/quest-data.js';
import loadProfile from '../load-profile.js';
import createQuestLink from '../map/create-quest-link.js';

const linkParent = document.getElementById('map');

loadProfile();

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    linkParent.appendChild(link);
}
