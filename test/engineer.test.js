const { it, test } = require("@jest/globals");
const Engineer = require("../lib/engineer");

it("Can set Github account with constructor", () => {
    const testVal = "githubName";
    const emp = new Engineer("bob", 5, "bob@test.com",testVal);
    expect(emp.github).toBe(testVal);
});
it("Should return Engineer from getRole()", () => {
    const testVal = "Engineer";
    const emp = new Engineer("Bob",5,"bob@test.com","githhubName");
    expect(emp.getRole()).toBe(testVal);
});
it("Get Githuib username through getGithub()", () => {
    const testVal = "githubName";
    const emp = new Engineer("Bob",5,"bob@test.com",testVal);
});