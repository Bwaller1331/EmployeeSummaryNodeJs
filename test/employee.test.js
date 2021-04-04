
const Employee = require("../lib/employee");

it("Can create new employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
    const err = new Error;
});

it("Uses constructor to pull name", () => {
    const name = "bob";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
    const err = new Error;
});

it("Uses Constructor to set Id", () => {
    const testVal = 15;
    const emp = new Employee("Bob",testVal);
    expect(emp.id).toBe(testVal);
    const err = new Error;
});
it("Uses Constructor to set email", () => {
    const testVal = "bob@test.com";
    const emp = new Employee("Bob",testVal);
    const err = new Error;
});

