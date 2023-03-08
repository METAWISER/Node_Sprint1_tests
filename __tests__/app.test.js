
const {
  sumar,
  restar,
  multiplicar,
  dividir,
  n1E2,
  getEmployee,
  getSalary,
  funcionAsicrona,
  funcionQueRetornaPormesa,
  Persona,
} = require('../app');


/** Tests NIVEL 1 */
test('Sumar 1 + 2 es igual 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('Restar 2 - 1 es igual 1', () => {
  expect(restar(2, 1)).toBe(1);
});

test('Multipliacar 2 * 2 es igual 4', () => {
  expect(multiplicar(2, 2)).toBe(4);
});

test('Dividir 4 / 2 es igual 2', () => {
  expect(dividir(4, 2)).toBe(2);
});

/** Tests Promises y Callbacks N1 E2 */
test('n1E2 devuelve "El numero 5 es mayor que 0" al llamarlo con 5', () => {
  const callback = jest.fn();
  n1E2(5, callback);
  expect(callback).toHaveBeenCalledWith('El numero 5 es mayor que 0');
});

test('n1E2 devuelve "El numero 0 es menor o igual que 0" al llamarlo con 0', () => {
  const callback = jest.fn();
  n1E2(-6, callback);
  expect(callback).toHaveBeenCalledWith('El numero -6 es menor o igual que 0');
});

/** Tests Promises y Callbacks N2 E1 y N2 E2 */
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

describe('funcionAsicrona', () => {
  /* test('Debe resolverse despues de 2 segundos', async () => { 
        return await funcionAsicrona(funcionQueRetornaPormesa()
        .then(resolve => {
            expect(resolve).toBe('Gracias por la espera!')
        }))
    }) */
  test('Activa el Reject de la promesa', async () => {
    const mockFunc = () => {
      throw new Error('error');
    };
    try {
      await funcionAsicrona(mockFunc);
      throw Error('pass here');
    } catch (error) {
      /*  expect(mockFunc).toHaveBeenCalled() */
      expect(error.message).toMatch('error');
    }
  });
});

/* jest.mock('../Persona', () => {
        return jest.fn().mockImplementation(() => {
          return {
            dirNom: jest.fn(),
          };
        });
      });
      
      
      
      describe('Persona', () => {
        it('should call the constructor and dirNom method', () => {
          // Creamos una nueva instancia de Persona
          const persona = new Persona('Carlos Z.');
      
          // Verificamos que el constructor haya sido llamado con los parámetros correctos
          expect(Persona).toHaveBeenCalledWith('Carlos Z.');
      
          // Llamamos al método dirNom
          persona.dirNom();
      
          // Verificamos que el método dirNom haya sido llamado correctamente
          expect(persona.dirNom).toHaveBeenCalled();
        });
      }); */

// Importamos el módulo que exporta la clase Persona y lo mockeamos
jest.mock('../app', () => {
  const originalModule = jest.requireActual('../app');

  return {
    ...originalModule,

    Persona: jest.fn().mockImplementation((name) => {
      if (name === '') throw new Error('empty name');

      return {
        dirNom: jest.fn(() => name),
      };
    }),
  };
});

// Importamos la clase Persona del módulo mockeado

describe('Persona', () => {
  it('Given an empty name, when create a person with empty name, then should throw an error of empty name', () => {
    // arrange / given
    const emptyName = '';
    try {
      // act / when
      new Persona(emptyName);
    } catch (error) {
      //assert / then
      expect(error.message).toBe('empty name');
    }
  });

  it('Given a name, when Person is instanced with name, then check if it has been called with name', () => {
    // arrange / given
    const name = 'Carlos Z.';

    // act / when
    new Persona(name);

    //assert / then
    expect(Persona).toHaveBeenCalledWith(name);
  });

  it('Given instance of Person, when dirNom method is called, then check if it has been called and returns the name expected to be', () => {
    // arrange / given
    const name = 'Carlos Z.';
    const persona = new Persona(name);

    // act / when
    const expectedName = persona.dirNom()

    //assert / then
    expect(persona.dirNom).toHaveBeenCalled();
    expect(expectedName).toBe(name);
  });

});
