const Employee = require('../lib/Employee');

// makes sure employee is an object
test('create employee object', () => {
  const employee = new Employee();

  expect(typeof(employee)).toBe('object');
});
test('set name', () => {
  const name = 'nelson';
  const employee = new Employee(name);

  expect(employee.name).toBe(name);
});
test('set id', () => {
  const id = 1;
  // foo is a placeholder value
  const employee = new Employee('jacob', id);

  expect(employee.id).toBe(id);
});
test('set email', () => {
  const email = 'email@email.com';
  // 1 is a placeholder value for id
  const employee = new Employee('jacob', 1, email);
  expect(employee.email).toBe(email);
});
// make sure getName() method returns employee name
test("get employee's name", () => {
  const name = 'jacob';
  const employee = new Employee(name);

  expect(employee.getName()).toBe(name);
});
// make sure getId() method returns employee id
test("get employee's id", () => {
  const id = 1;
  const employee = new Employee('jacob', id);

  expect(employee.getId()).toBe(id);
});
// make sure getEmail() method returns employee email
test("get employee's email", () => {
  const email = 'email@email.com';
  const employee = new Employee('jacob', 1, email);

  expect(employee.getEmail()).toBe(email);
});
// make sure getRole() method returns employee role
test("get employee's role", () => {
  const role = 'Employee';
  const employee = new Employee('jacob', 1, 'email@email.com');

  expect(employee.getRole()).toBe(role);
});
