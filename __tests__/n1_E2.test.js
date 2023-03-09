const {n1E2} = require('../archivosProbar/n1_E2.js')

//Test funcion que recibe un parametro y una funcion de callback 

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
