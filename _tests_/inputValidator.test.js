const inputValidator = require('../lib/inputValidator.js');

describe("validateTeamName", () => {
  it("returns true if the input has at least 1 non-whitespace character", () => {
    expect(inputValidator.validateTeamName("My Team")).toStrictEqual(true);
    expect(inputValidator.validateTeamName(" My Team ")).toStrictEqual(true);
  });
  it("does not return true if the input does not have at least 1 non-whitespace character", () => {
    expect(inputValidator.validateTeamName("")).not.toStrictEqual(true);
    expect(inputValidator.validateTeamName(" ")).not.toStrictEqual(true);
  })
});

describe("validateEmployeeName", () => {
  it("returns true if the input has at least 1 non-whitespace character", () => {
    expect(inputValidator.validateEmployeeName("Johnny Doe")).toStrictEqual(true);
    expect(inputValidator.validateEmployeeName(" Johnny Doe ")).toStrictEqual(true);
  });
  it("does not return true if the input does not have at least 1 non-whitespace character", () => {
    expect(inputValidator.validateEmployeeName("")).not.toStrictEqual(true);
    expect(inputValidator.validateEmployeeName(" ")).not.toStrictEqual(true);
  })
});

describe("validateId", () => {
  it("returns true if the input is a non-negative integer", () => {
    expect(inputValidator.validateId(0)).toStrictEqual(true);
    expect(inputValidator.validateId(3241)).toStrictEqual(true);
  });
  it("does not return true if the input is negative", () => {
    expect(inputValidator.validateId(-1)).not.toStrictEqual(true);
  });
  
  it("does not return true if the input is not an integer", () => {
    expect(inputValidator.validateId(1.5)).not.toStrictEqual(true);
  });
});

describe("validateEmail", () => {
  it("returns true if the input has no non-whitespace characters", () => {
    expect(inputValidator.validateEmail("")).toStrictEqual(true);
    expect(inputValidator.validateEmail(" ")).toStrictEqual(true);
  });
  it("returns true if the input has an '@' with at least one alphanumeric character on each side", () => {
    expect(inputValidator.validateEmail("a@a")).toStrictEqual(true);
    expect(inputValidator.validateEmail(" a@a ")).toStrictEqual(true);
  });
  it("does not return true if the input has at least 1 non-whitespace character but not an '@' with at least one alphanumeric on each side", () => {
    expect(inputValidator.validateEmail("aa")).not.toStrictEqual(true);
    expect(inputValidator.validateEmail(" a @a ")).not.toStrictEqual(true);
  })
});