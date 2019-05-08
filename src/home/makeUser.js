function makeUser(formData) {
    const name = formData.get('name');
    const avatar = formData.get('avatar');
    const skill = formData.get('skill');
    return {
        name: name,
        avatar: avatar,
        skill: skill,
        energyPoints: 50,
        happinessPoints: 0
    };
}

export default makeUser;