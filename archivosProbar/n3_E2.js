//Objetos copiados del Nivel 2 Ejercicio 1
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

function getEmployee(id) {
  
  return new Promise((resolve, reject) => {
    const empleado = employees.find((emp) => emp.id === id);
    switch (id) {
      case "1":
        reject(new Error('Error el id debe ser un numero'));
        break;
      case null:
        reject(new Error('Error no puede ser nulo'));
        break;
      default:
        reject(new Error(`No se ha encontrado el empleado con ID ${id}`));
        break;
    }
  });
}

function getSalary(employee) {
  return new Promise((resolve, reject) => {
    const salario = salaries.find((salario) => salario.id === employee.id);
    switch (employee) {
      case !{}:
        reject(new Error('Se debe proporcionar un objeto'));
        break;
      default:
        reject(new Error(`No se ha encontrado el salario del empleado`));
        break;
    }
  });
}

module.exports = {
  getEmployee,
  getSalary,
};
