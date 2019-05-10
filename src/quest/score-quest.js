function scoreQuest(user, choice) {
    user.energy = user.energy + choice.energy;
    user.happiness = user.happiness + choice.happiness;
    return user;
}

export default scoreQuest;