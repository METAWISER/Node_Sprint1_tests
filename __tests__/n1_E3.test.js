const {getEmployee, getSalary} = require('../archivosProbar/n1_E3')

//test correspondientes para verificar el funcionamiento de las funciones del ejercicio Promises y Callbacks N2 E1 y Promises y Callbacks N2 E2 (getEmployee() y getSalary()).

describe('getEmployee', () => {
  test('Debe retornar el nombre del empleado si el ID es valido', () => {
    return getEmployee(1).then((nombre) => {
      expect(nombre).toBe('Linux Torvalds');
    });
  });
  

  test('Activa el reject de la promesa si el ID no es valido', () => {
    return getEmployee(5).catch((error) => {
      expect(error.message).toBe('No se ha encontrado el empleado con ID 5');
    });
  });
});
describe('getSalary', () => {
  test('Debe retornar el salario del empleado si el ID es valido', () => {
    return getSalary({ id: 1 }).then((salario) => {
      expect(salario).toBe(4000);
    });
  });
  test('Activa el reject y retorna el error', () => {
    return getSalary({ id: 5 }).catch((error) => {
      expect(error.message).toBe('No se encontró el salario para el empleado con id 5');
    });
  });
});
