const Employee = require("../lib/Employee");

test("creating new employee", () => {
    const employeeNew = new Employee();
    expect(typeof(employeeNew)).toBe("object");
})

test('gets employee name through getName method', () => {
    const name = "Jack";
    const employeeNew = new Employee(name);
  expect(employeeNew.name).toBe(name);
})

test('get Id through getID', () => {
    const id = 1
    const employeeNew = new Employee("Jack", id)
    expect(employeeNew.id).toBe(id);
})