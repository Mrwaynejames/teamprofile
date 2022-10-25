const Employee = require("../lib/Employee");


test('gets name', () => {
    const name = "Meredith";
    const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
})

test('get Id', () => {
    const id = 1;
    const employee = new Employee("Meredith", id,);
    expect(employee.getId()).toBe(id);
})

test('get email', () => {
    const email = "meredithgrey@greysloanmem.com";
    const employee = new Employee("Meredith", 1, email);
    expect(employee.getEmail()).toBe(email);
})

test("get role.", () => {
    const role = "Employee";
    const employee = new Employee("meredith", 1, "meredithgrey@greysloanmem.com");
    expect(employee.getRole()).toBe(role);
});

// test('set Id', () => {
//     const id = 1
//     const employee = new Employee("Jack", id, "wx")
//     expect(employee.id).toBe(id);
// })

