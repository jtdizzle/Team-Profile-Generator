const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Constructor", () => {
    it("should create an object", () => {
      const engineer = new Engineer("John Doe", 1, "fake@email.com", "gitName");
      expect(typeof engineer).toEqual("object");
    });

    it("takes a name, id, email, and github username and sets them as propertties on the object", () => {
      const name = "Johnny Doe";
      const id = 1;
      const email = "johnny.doe@email.com";
      const github = "gitName";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.name).toEqual(name);
      expect(engineer.id).toEqual(id);
      expect(engineer.email).toEqual(email);
      expect(engineer.github).toEqual(github);
    });
  });

  describe("getGithub", () => {
    it("should return github username passed to the constructor", () => {
      const name = "Johnny Doe";
      const id = 1;
      const email = "johnny.doe@email.com";
      const github = "gitName";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getGithub()).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const name = " Johnny Doe ";
      const id = 1;
      const email = "johnny.doe@email.com";
      const engineer = new Engineer(name, id, email);
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});