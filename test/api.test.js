import api from '../src/services/api.js';
import quests from '../src/services/quest-data.js';

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
        energy: 50,
        happiness: 0
    };
    // Act
    api.signUp(userData);
    const actual = api.getUser();

    // Assert
    assert.deepEqual(actual, userData);
});

test('get quests array', assert => {
    const questArray = quests;
    const actual = api.getQuests();
    assert.deepEqual(actual, questArray);
});

test('get quest by id', assert => {
    const id = 'kitchen';
    const questArray = quests;
    const expected = questArray[0];
    const actual = api.getQuest(id);
    assert.deepEqual(actual, expected);
});