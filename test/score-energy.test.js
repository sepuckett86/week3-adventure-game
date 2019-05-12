const test = QUnit.test;

QUnit.module('score energy');

function scoreEnergy(user) {
    if(user.energy < 15) {
        return 'shattered';
    }
}

test('return shattered if under 15 energy', assert => {
    const user = {
        energy: 0
    };
    const expected = 'shattered';
    const actual = scoreEnergy(user);
    assert.equal(actual, expected);
});