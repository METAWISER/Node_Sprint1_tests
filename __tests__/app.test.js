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
    Persona
} = require('../app')


/** Tests NIVEL 1 */
test('Sumar 1 + 2 es igual 3', ()=>{
    expect(sumar(1, 2)).toBe(3)
}) 

test('Restar 2 - 1 es igual 1', () => {
    expect(restar(2, 1)).toBe(1)
})

test('Multipliacar 2 * 2 es igual 4', () => { 
    expect(multiplicar(2, 2)).toBe(4)
})

test('Dividir 4 / 2 es igual 2', () => {
    expect(dividir(4, 2)).toBe(2)
 })

/** Tests Promises y Callbacks N1 E2 */
test('n1E2 devuelve "El numero 5 es mayor que 0" al llamarlo con 5', () => { 
  const callback = jest.fn();
  n1E2(5, callback)
  expect(callback).toHaveBeenCalledWith('El numero 5 es mayor que 0');
})

test('n1E2 devuelve "El numero 0 es menor o igual que 0" al llamarlo con 0', () => { 
   const callback = jest.fn();
   n1E2(-6, callback)
   expect(callback).toHaveBeenCalledWith('El numero -6 es menor o igual que 0');
})

/** Tests Promises y Callbacks N2 E1 y N2 E2 */
describe('getEmployee', ()  => {
    test('Debe retornar el nombre del empleado si el ID es valido', () => { 
        return getEmployee(1).then(nombre => {
            expect(nombre).toBe('Linux Torvalds')
        })
     })

    test('Activa el reject de la promesa si el ID no es valido', () => { 
        return getEmployee(5).catch(error => {
            expect(error.message).toBe('No se ha encontrado el empleado con ID 5')
        })
    })
})
describe('getSalary', () => {
    test('Debe retornar el salario del empleado si el ID es valido', () => {
        return getSalary({id: 1})
        .then(salario => {
            expect(salario).toBe(4000)
        })
    })
    test('Activa el reject y retorna el error', () => {
        return getSalary({id: 5})
        .catch(error => {
            expect(error.message).toBe('No se encontró el salario para el empleado con id 5')
        })
    })
})

describe('funcionAsicrona', () => {
    test('Debe resolverse despues de 2 segundos', async () => { 
        return await funcionAsicrona(funcionQueRetornaPormesa()
        .then(resolve => {
            expect(resolve).toBe('Gracias por la espera!')
        }))
    })
    test('Activa el Reject de la promesa', async () => {
        return await funcionAsicrona(funcionQueRetornaPormesa()
        .catch(error => {
            expect(error.message).toMatch('error')
        }))
    })
})
