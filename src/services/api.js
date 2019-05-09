import quests from '../services/quest-data.js';

const api = {
    storage: localStorage,
    signUp(userData) {
        const json = JSON.stringify(userData);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return quests;
    },
    getQuest(id) {
        for(let i = 0; i < quests.length; i++) {
            const quest = quests[i];
            if(quest.id === id) {
                return quest;
            }
        }
        return null;
    }
};

export default api;