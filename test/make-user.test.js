import makeUser from '../src/home/makeUser.js';

const test = QUnit.test;

QUnit.module('make user');

test('make a user object from form data', assert => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'Susan');
    formData.set('avatar', 'woman1');
    formData.set('skill', 'music');
    // act
    const user = makeUser(formData);
    // assert
    assert.deepEqual(user, {
        name: 'Susan',
        avatar: 'woman1',
        skill: 'music',
        energy: 50,
        happiness: 0,
        completed: {}
    });
});