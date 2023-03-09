// Arrow Fuction que recibe un parametro y una funcion de callback
const n1E2 = (numero, callback) => {
  if (numero > 0) {
    callback(`El numero ${numero} es mayor que 0`);
  } else {
    callback(`El numero ${numero} es menor o igual que 0`);
  }
};

module.exports = {
  n1E2,
};
