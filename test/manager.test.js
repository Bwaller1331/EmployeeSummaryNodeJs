const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

it("Can set value for office number through constructor", () => {
    const testVal = 50;
    const emp = new Manager("bob",5,"test@test.com",testVal);
    expect(emp.officeNumber).toBe(testVal);
  
});

it("getRole() should return manager", () => {
    const testVal = "Manager";
    const emp = new Manager("bob",5,"bob@test.com",50);
    expect(emp.getRole()).toBe(testVal);
});

it("Can set value for office number via getOffice()", () => {
    const testVal = 50;
    const emp = new Manager("bob",5,"bob@test.com",testVal);
    expect(emp.getOfficeNumber()).toBe(testVal);
});