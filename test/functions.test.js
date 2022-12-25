const functions = require('../function')

test('add 2 + 2 to be equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// toBe used to look for specific premitive value
test('add 2 + 2 should not be 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBe Null
test('should be null', () => {
    expect(functions.isNull()).toBe(null);
});

// pass with undefined 0 or null : toBe falsy
test('should be false', () => {
    expect(functions.check(undefined)).toBeFalsy();
});

// toBe is for premitive types 
// obj or array is reference types in js 
// toBe is not gonna work for obj and arrays use toEqual instead 
test('user Should be Kim Martin', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Kim',
        lastName: 'Martin'
    });
});

// equality matchers 
test('should be under 1600', () => {
    const loadOne = 800;
    const loadTwo = 700;
    expect(loadOne + loadTwo).toBeLessThan(1600);
});

// Regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in username', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Async await
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
});