const {
  sumar,
  restar,
  multiplicar,
  dividir,
} = require("../archivosProbar/n1_E1");

//Test funcion sumar
const sumarCases = [[2, 2, 4],[5, 5, 10],[2,-1, 1]]

describe('"sumar" utility ', () => {
  test.each(sumarCases)(
    "given %p and %p as arguments, returns %p",(firstArg,secondArg, expectedResult) => {
      const result = sumar(firstArg,secondArg);
      expect(result).toEqual(expectedResult)
    }
  )
})

//test funcion restar
const restarCases = [[3,1,2],[5,5,0],[-6,-7, 1]]

describe('"restar" utility', () => {
  it.each(restarCases)(
    "given %p and %p as arguments, returns %p",(firstArg,secondArg, expectedResult) => {
      const result = restar(firstArg, secondArg);
      expect(result).toEqual(expectedResult)
    }
  )
})

//test funcion multiplicar 
const multiplicarCases = [[5,5,25],[4,2,8],[-7,3,-21]]

describe('"multiplicar" utility', ()=>{
  it.each(multiplicarCases)(
    "given %p and %p as arguments, returns %p",(firstArg, secondArg, expectedResult)=> {
      const result = multiplicar(firstArg, secondArg)
      expect(result).toEqual(expectedResult)
    }
  )
})

//test funcion dividir
const dividirCases = [[10,2,5],[-14,2,-7], [50,100,0.5]]

describe('"multiplicar" utility', ()=> {
  it.each(dividirCases)(
    "given %p and %p as arguments, returns %p",(firstArg, secondArg, expectedResult) => {
      const result = dividir(firstArg,secondArg)
      expect(result).toEqual(expectedResult)
    }
  )
}) 