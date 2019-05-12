import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';

const test = QUnit.test;

QUnit.module('has completed all quests');

test('return true if completed all quests', assert => {
    // arrange
    const questList = [{ id: 'quest1' }, { id: 'quest2' }, { id: 'quest3' }];
    const user = {
        completed: {
            quest1: true,
            quest2: true,
            quest3: true
        }
    };
    const expected = true;

    // act
    const actual = hasCompletedAllQuests(questList, user);

    // assert
    assert.equal(actual, expected);
});

test('return false if quests not all completed', assert => {
    // arrange
    const questList = [{ id: 'quest1' }, { id: 'quest2' }, { id: 'quest3' }];
    const user = {
        completed: {
            quest1: true,
            quest2: true
        }
    };
    const expected = false;

    // act
    const actual = hasCompletedAllQuests(questList, user);

    // assert
    assert.equal(actual, expected);
});