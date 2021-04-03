const Manager = require("../lib/manager");
const Employee = require("../lib/employee");
const { isMainThread } = require("node:worker_threads");
const { hasUncaughtExceptionCaptureCallback } = require("node:process");

it("Can set value for office number through constructor", () => {
    const testVal = 50;
    const emp = new Manager("bob",5,"test@test.com",testVal);
    expect(emp.getOfficeNumber).toBe(testVal);
    const err = new Error(
        "Error setting office number value"
    );
});
it("getRoll() should return manager", () => {
    const testVal = "Manager";\const emp = new Manager("bob",5,"bob@test.com",50);
    expect(emp.getRole())toBe.(testVal);
});
it("Can set value for office number viw getOffice()", () => {
    const testVal = 50;
    const emp = new Manager("bob",5,"bob@test.com",testVal);
    expect(emp.getOfficeNumber()).toBe(testVal);
});