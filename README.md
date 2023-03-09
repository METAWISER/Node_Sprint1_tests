# Entrega 1.6: Testing

### Descripción
Para aprender a desarrollar con TDD (Test Driven Development) primero debemos conocer las librerías de testing. En los siguientes ejercicios usarás Jest, una librería con utilidades para testear código JavaScript. Podrás encontrar la documentación en el apartado de "Para saber más".

Antes de empezar los siguientes ejercicios, crea un proyecto Node con la siguiente estructura:

app . Carpeta con el código a testear. Deberás exportar las funciones y modificar algunas (p. ej. para que en vez de console.log() hagan return)
__tests__ . Carpeta con los test.
.gitignore. No olvides este archivo o subirás al repositorio cosas que no deben estar allí (mira la documentación oficial en el apartado de "Para saber más").
Readme.md. Pon aquí la descripción del proyecto y las instrucciones de instalación y arranque en formato Markdown (echa un vistazo a la guía oficial Markdown si tienes dudas).
package.json. Descripción y configuración del proyecto.
Una vez creado tu proyecto, sube a GitHub.

Los test que crees deben poder ejecutarse por la consola  con npm .

### Nivel 1
Crea un archivo con las funciones sumar, restar, multiplicar y dividir dos o más operandos. Testea la correcta ejecución de estas funciones.
Crea los test correspondientes para verificar el funcionamiento de las dos funciones del ejercicio Promises y Callbacks N1 E2.
Crea los test correspondientes para verificar el funcionamiento de las funciones del ejercicio Promises y Callbacks N2 E1 y Promises y Callbacks N2 E2 (getEmployee() y getSalary()).
Crea los test correspondientes para verificar el funcionamiento del ejercicio Async/Await N1 E2 .


### Nivel 2
Verifica mediante tests la ejecución del ejercicio Async/Await N2 E1 utilizando Jest Fake Timers.
Crea un mock que compruebe las llamadas al constructor de la clase Persona ya su método. dirNombre() en el ejercicio Clases & Arrow Functions - N2 E2 y testea que funcionan.
Verifica mediante test la creación de instancias de la clase abstracta del ejercicio Clases & Arrow Functions N3 E1.

### Nivel 3
Refundido los ejercicios Promisas y Callbacks N2 E1 y Promisas y Callbacks N2 E2 (getEmployee() y getSalary()) de forma que accedan a los datos de un archivo externo JSON. Crea tests que demuestren la correcta ejecución del ejercicio haciendo un mock del archivo JSON.
Utilizando como base el ejercicio Async/Await , crea tests que fuercen errores de funcionamiento y verifique que los errores lanzados son los esperados.