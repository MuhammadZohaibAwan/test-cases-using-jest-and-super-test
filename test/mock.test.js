const helpers = require("../helper");

test('returns undefined by default', () => {
    const mock = jest.fn();
    let result = mock('foo');

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation", () => {
    const mock = jest.fn(() => "bar");

    expect(mock("foo")).toBe('bar');
    expect(mock).toHaveBeenCalledWith("foo");

});

test("another implementation", () => {
    const againMock = jest.fn(() => "Best");

    expect(againMock("test")).toBe('Best');
    expect(againMock).toHaveBeenCalledWith("test");
});

// describe("", () => {

// })

it("should return proper value ", () => {
    // look, in contrast to jest.fn() that returns undefined by default
    // jest.spyOn() calls original implementation
    const mock = jest.spyOn(helpers, "add")
    const result = mock(1, 3)
    expect(result).toBe(4);
});



it("returns mocked and original result", () => {
    const addMock = jest.spyOn(helpers, "add");
    addMock.mockImplementation(() => 5);

    // redefined implementation
    expect(helpers.add()).toBe(5);

    addMock.mockRestore();

    // original implementation
    expect(helpers.add(1, 2)).toBe(3);
});


// .fn by default returns undefined value
// .spyOn by default implement origanal implementation
// .spyOn restores orignal implementation
