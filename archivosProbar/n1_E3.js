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
    if (empleado) {
      resolve(empleado.name);
    } else {
      reject(new Error(`No se ha encontrado el empleado con ID ${id}`));
    }
  });
}

function getSalary(employee) {
  return new Promise((resolve, reject) => {
    const salario = salaries.find((salario) => salario.id === employee.id);
    if (salario) {
      resolve(salario.salary);
    } else {
      reject(
        new Error(
          `No se encontró el salario para el empleado con id ${employee.id}`
        )
      );
    }
  });
}

module.exports = {
  getEmployee,
  getSalary,
};
