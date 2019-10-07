function scoreQuest(user, choice, questId) {
    user.energy = user.energy + choice.energy;
    user.happiness = user.happiness + choice.happiness;
    user.completed[questId] = true;
    return user;
}

export default scoreQuest;