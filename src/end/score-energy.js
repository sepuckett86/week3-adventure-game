function scoreEnergy(user) {
    if(user.energy < 15) {
        return 'shattered';
    } else if(user.energy < 30) {
        return 'tired';
    } else if(user.energy >= 30) {
        return 'energetic';
    }
}

export default scoreEnergy;