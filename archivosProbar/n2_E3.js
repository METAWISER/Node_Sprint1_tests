// Creo la clase abstracta a la que luego voy a instanciar o crear en la siguiente funcion
class ClaseAbs {
  constructor() {
      if(new.target === ClaseAbs){
          throw new TypeError('No se puede instanciar clase abstracta')
      }
      
  }
}
// Funcion Generadora de objetos de una clase abstracta
const creadorDeObj = (curso) => {
  const objCursos = Object.create(ClaseAbs.prototype);
  objCursos.curso = curso;
  return objCursos;
}
const cursoDeNode = creadorDeObj('NodeJs')
console.log(cursoDeNode);

// verifico el prototipo del objeto abstracto instanciado  
console.log(Object.getPrototypeOf(cursoDeNode));


module.exports= {
  ClaseAbs,
  creadorDeObj
}