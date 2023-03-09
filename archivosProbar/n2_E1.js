//Funcion asincrona que recibe una funcion que retorna promesa
const funcionAsicrona = async (callback) => {
  try {
    const resultado = await callback();
    return resultado;
  } catch (error) {
    throw new Error(error);
  }
};

const funcionQueRetornaPormesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Gracias por la espera!");
    }, 2000);
  });
};

module.exports = {
  funcionQueRetornaPormesa,
  funcionAsicrona
};
