const Manager = require("../lib/Manager.js");


describe("Manager", () => {
  describe("Constructor", () => {
    it("should create an object", () => {
      const manager = new Manager("Johnny Doe", 1, "fake@mail.com", "101");
      expect(typeof manager).toEqual("object");
    });

    it("should take a name, id, email, and office number and use them as propertties on the object", () => {
      const name = "Johnny Doe";
      const id = 1;
      const email = "johnny.doe@email.com";
      const officeNumber = "110A";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.name).toEqual(name);
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(email);
      expect(manager.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return office number passed to the constructor", () => {
      const name = "Johnny Doe";
      const id = 1;
      const email = "johnny.doe@email.com";
      const officeNumber = "110A";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const name = " Johnny Doe ";
      const id = 1;
      const email = "johnny.doe@email.com";
      const officeNumber = "143"
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});