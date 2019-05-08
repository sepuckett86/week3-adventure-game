import api from '../src/services/api.js';

const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('round trip for user data object', (assert) => {
    // Arrange
    const userData = {
        name: 'Susan',
        avatar: 'woman1',
        skill: 'music',
        energyPoints: 50,
        happinessPoints: 0
    };
    // Act
    api.signUp(userData);
    const actual = api.getUser();

    // Assert
    assert.deepEqual(actual, userData);
});