function scoreHappiness(user) {
    if(user.happiness === 0) {
        return 'miserable';
    } else if(user.happiness > 0 && user.happiness < 25) {
        return 'content';
    } else if(user.happiness >= 25) {
        return 'ecstatic';
    }
}

export default scoreHappiness;