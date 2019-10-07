function makeUser(formData) {
    const name = formData.get('name');
    const avatar = formData.get('avatar');
    const skill = formData.get('skill');
    return {
        name: name,
        avatar: avatar,
        skill: skill,
        energy: 50,
        happiness: 0,
        completed: {}
    };
}

export default makeUser;