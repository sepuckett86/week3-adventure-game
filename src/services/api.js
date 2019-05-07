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
    }
};

export default api;