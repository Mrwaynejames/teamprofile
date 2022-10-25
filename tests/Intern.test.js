const Intern = require("../lib/Intern");

test("get school", () => {
    const school = "Oregon";
    const employee = new Intern("meredith", 1, "meredithgrey@greysloanmem.com", school);
    expect(employee.getSchool()).toBe(school);
});

test("get role.", () => {
    const role = "Intern";
    const employee = new Intern("meredith", 1, "meredithgrey@greysloanmem.com", "Oregon");
    expect(employee.getRole()).toBe(role);
});