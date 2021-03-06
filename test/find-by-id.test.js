import findById from '../src/find-by-id.js';

const test = QUnit.test;

QUnit.module('find by id');

test('return object with correct id, first in list', assert => {
    const objectList = [ 
        { id: 'object1' }, 
        { id: 'object2' },
        { id: 'object3' }
    ];

    const id = 'object1';
    const expected = { id: 'object1' };
    const actual = findById(id, objectList);
    assert.deepEqual(actual, expected);
});

test('return object with correct id, last in list', assert => {
    const objectList = [ 
        { id: 'object1' }, 
        { id: 'object2' },
        { id: 'object3' }
    ];

    const id = 'object3';
    const expected = { id: 'object3' };
    const actual = findById(id, objectList);
    assert.deepEqual(actual, expected);
});