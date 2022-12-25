beforeAll(() => {
    console.log("beforeAll")
    // 'runs first/once before any test function execution'

})

// Applies to all tests in this file
beforeEach(() => {
    animals = ['zebra', 'tigers', 'bear', 'lions'];
    console.log('clearing array lists before');
    // runs beforeEach test execution
});

afterEach(() => {
    console.log('clearing array lists after');
    // runs afterEach test execution
})

afterAll(() => {
    console.log("afterAll")
    // 'runs once in last after any test function execution'
})

// order of executaiton
// before all runs first 
// then before each 
// then after each 
// then after all

// beforeAll
// beforeEach
// test
// afterEach
// afterAll

// if you have 3 tests for example and you want to run only one test use it.only 
// it will skip all other tests that are present in the file

// rule if you want to apply beforeEach to all tests then put it on the top of the file 
// if you want to apply beforeEach to only tests present in the describe block the use beforeEach inside the describe block only.

describe("animals array", () => {

    // if beforeEach(() =>) is inside describe block it will be Applies only to tests in this describe block
    // Note that the top-level beforeEach is executed before the beforeEach inside the describe block.

    it('should add animals to end of the array ', () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to the bigning of the array", () => {
        animals.unshift("monkey")
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })

})

