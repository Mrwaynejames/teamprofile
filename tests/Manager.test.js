const Manager = require("../lib/Manager");

test("get Office#.", () => {
    const officeNum = 211;
    const employee = new Manager("meredith", 1, "meredithgrey@greysloanmem.com", officeNum);
    expect(employee.getOfficeNumber()).toBe(officeNum);
});

test("get role.", () => {
    const role = "Manager";
    const employee = new Manager("meredith", 1, "meredithgrey@greysloanmem.com", 211);
    expect(employee.getRole()).toBe(role);
});