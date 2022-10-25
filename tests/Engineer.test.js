const Engineer = require("../lib/Engineer");

test("get github", () => {
    const ghUser = "mGrey";
    const employee = new Engineer( "meredith", 1, "meredithgrey@greysloanmem.com", ghUser);
    expect(employee.getGithub()).toBe(ghUser);
});
test("get role.", () => {
    const role = "Engineer";
    const employee = new Engineer("meredith", 1, "meredithgrey@greysloanmem.com", "mGrey");
    expect(employee.getRole()).toBe(role);
});