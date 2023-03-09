const { Persona } = require("../archivosProbar/n2_E2");

jest.mock("../archivosProbar/n2_E2", () => {
  const originalModule = jest.requireActual("../archivosProbar/n2_E2");

  return {
    ...originalModule,

    Persona: jest.fn().mockImplementation((name) => {
      if (name === "") throw new Error("empty name");

      return {
        dirNom: jest.fn(() => name),
      };
    }),
  };
});

describe("Persona", () => {
  it("Given an empty name, when create a person with empty name, then should throw an error of empty name", () => {
    // arrange / given
    const emptyName = "";
    try {
      // act / when
      new Persona(emptyName);
    } catch (error) {
      //assert / then
      expect(error.message).toBe("empty name");
    }
  });

  it("Given a name, when Person is instanced with name, then check if it has been called with name", () => {
    // arrange / given
    const name = "Carlos Z.";

    // act / when
    new Persona(name);

    //assert / then
    expect(Persona).toHaveBeenCalledWith(name);
  });

  it("Given instance of Person, when dirNom method is called, then check if it has been called and returns the name expected to be", () => {
    // arrange / given
    const name = "Carlos Z.";
    const persona = new Persona(name);

    // act / when
    const expectedName = persona.dirNom();

    //assert / then
    expect(persona.dirNom).toHaveBeenCalled();
    expect(expectedName).toBe(name);
  });
});