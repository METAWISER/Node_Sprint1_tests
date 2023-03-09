const {ClaseAbs, creadorDeObj} = require('../archivosProbar/n2_E3');

describe('creadorDeObj', () => {
  it('devuelve un objeto con la propiedad curso establecida', () => {
    const cursoDeNode = creadorDeObj('NodeJs');
    expect(cursoDeNode).toEqual(expect.objectContaining({ curso: 'NodeJs' }));
  });

  it('crea un objeto con el prototipo de la clase abstracta ClaseAbs', () => {
    const cursoDeNode = creadorDeObj('NodeJs');
    expect(Object.getPrototypeOf(cursoDeNode)).toBe(ClaseAbs.prototype);
  });
});