const { it, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

it("Returns Intern with getRole()", () => {
    const testVal = "Intern";
    const emp = new Intern("Bob",5,"bob@test.com",testVal);
    expect(emp.getRole()).toBe(testVal);
});

it('returns school from getSchool()', () => {
    const testVal = "OSU";
    const emp = new Intern("Bob",5,"Bob@test.com",testVal);
    expect(emp.getSchool()).toBe(testVal);
});