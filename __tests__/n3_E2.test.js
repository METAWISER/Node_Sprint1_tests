const { getEmployee, getSalary } = require("../archivosProbar/n3_E2");

//test correspondientes para verificar el funcionamiento de las funciones del ejercicio Promises y Callbacks N2 E1 y Promises y Callbacks N2 E2 (getEmployee() y getSalary()).

describe("getEmployee", () => {
  test('Debe rechazar la promesa con el mensaje de error correspondiente al caso null', async () => {
    expect.assertions(1);
    await expect(getEmployee(null)).rejects.toThrow('Error no puede ser nulo')
  });
  test(' Debe rechazar la promesa con el mensaje de error correspondiente defeult', async ()=> {
    expect.assertions(1);
    await expect(getEmployee(5)).rejects.toThrow('No se ha encontrado el empleado con ID 5')
  });
  test('', async ()=> {
    expect.assertions(1);
    await expect(getEmployee("1")).rejects.toThrow('Error el id debe ser un numero')
  })
});

describe("getSalary", () => {
  test('', async ()=> {
    expect.assertions(1);
    await expect(getSalary(!{})).rejects.toThrow('Se debe proporcionar un objeto')
  })
  test('', async ()=> {
    expect.assertions(1);
    await expect(getSalary({id: 5})).rejects.toThrow(`No se ha encontrado el salario del empleado`)
  })
})
