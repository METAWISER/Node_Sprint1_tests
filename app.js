function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}


// Arrow Fuction que recibe un parametro y una funcion de callback 
const n1E2 = (numero, callback) => {
        if(numero > 0) {
            callback(`El numero ${numero} es mayor que 0`)
        } else {
            callback(`El numero ${numero} es menor o igual que 0`)
        }
}

//Objetos copiados del Nivel 2 Ejercicio 1
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

function getEmployee(id) {
    return new Promise((resolve, reject)=>{
        const empleado = employees.find((emp)=> emp.id === id )
        if(empleado){
            resolve(empleado.name);
        } else {
            reject(new Error(`No se ha encontrado el empleado con ID ${id}`));
        }   
    });
};

function getSalary(employee) {
    return new Promise((resolve, reject) => {
        const salario = salaries.find((salario) => salario.id === employee.id);
        if (salario) {
            resolve(salario.salary);
        } else {
            reject(new Error(`No se encontró el salario para el empleado con id ${employee.id}`));
        }
    });
};

//Funcion asincrona que recibe una funcion que retorna promesa
const funcionAsicrona = async () => {
    try {
      const resultado = await funcionQueRetornaPormesa();
      return resultado
    } catch (error) {
      return new Error(error);
    }
  };
  const funcionQueRetornaPormesa = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Gracias por la espera!');
      }, 2000);
    });
  };

  //Creo la Clase PERSONA
class Persona {
    constructor (nom) {
        this.nom = nom
    }
    //Metodo que muestra el nom 
    dirNom() {return(this.nom);} 
}
// Creo instancia de PERSONA
const persona = new Persona('Carlos Z.');
// Invoco el Metodo para mostrar el nombre por la consola 
persona.dirNom();



module.exports = {
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
};
