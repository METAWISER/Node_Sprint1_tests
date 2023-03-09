//Creo la Clase PERSONA
class Persona {
  constructor(nom) {
    if (nom === "") throw new Error("name is empty");
    this.nom = nom;
  }
  //Metodo que muestra el nom
  dirNom() {
    return this.nom;
  }
}
// Creo instancia de PERSONA
const persona = new Persona("Carlos Z.");
// Invoco el Metodo para mostrar el nombre por la consola
persona.dirNom();

module.exports = {
  Persona,
};
