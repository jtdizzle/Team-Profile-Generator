const Employees = require('./Employees.js');

class Manager extends Employees {
  constructor(name, id, email = '', officeNumber = '') {
    super(name, id, email);
    this.officeNumber = officeNumber.trim();
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;