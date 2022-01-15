const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Constructor", () => {
    it("creates an object", () => {
      const intern = new Intern("Johnny Doe", 1, "fake@email.com", "University of Hogwarts");
      expect(typeof intern).toEqual("object");
    });

    it("takes a name, id, email, and school name and uses them as properties on the object", () => {
      const name = "Johnny Doe";
      const id = 1;
      const email = "johnny.doe@email.com";
      const school = "University of Hogwarts";
      const intern = new Intern(name, id, email, school);
      expect(intern.name).toEqual(name);
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(email);
      expect(intern.school).toEqual(school.trim());
    });
  });

  describe("getSchool", () => {
    it("returns school name passed to the constructor", () => {
      const name = "Johnny Doe";
      const id = 1;
      const email = "johnny.doe@email.com";
      const school = "University of Hogwarts";
      const intern = new Intern(name, id, email, school);
      expect(intern.getSchool()).toEqual(school.trim());
    });
  });

  describe("getRole", () => {
    it("returns 'Intern'", () => {
      const name = " Johnny Doe ";
      const id = 1;
      const email = "johnny.doe@email.com";
      const school = "University of Hogwarts";
      const intern = new Intern(name, id, email, school);
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});