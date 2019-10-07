function hasCompletedAllQuests(questList, user) {
    for(let i = 0; i < questList.length; i++) {
        const quest = questList[i];
        if(!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export default hasCompletedAllQuests;