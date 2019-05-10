const test = QUnit.test;

QUnit.module('find by id');

test('return object with correct id', assert => {
    const object = { id: 'object1' };
    const id = 'object1';
    const expected = object;
    const actual = findById(id);
    assert.equal(actual, expected);
});