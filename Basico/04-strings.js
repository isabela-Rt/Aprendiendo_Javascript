

                                                                    ///////////////////////////////
                                                                 /*** Strings (cadenas de texto) ***/
                                                                    //////////////////////////////


/**

 * ¿Que es Concatenación?
    es la operación de unir dos o más cadenas de texto (strings) en una sola.
    Por ejemplo, si tienes dos cadenas "Hola, " y "mundo!", al concatenarlas obtienes "Hola, mundo!".
    Esto se hace comúnmente con el operador + o con funciones específicas según el lenguaje de programación que estés usando.

 * ¿la concatenación solo se puede hacer a strings?
    No, la concatenación no se limita solo a strings, aunque es más común en ese contexto. 
    En algunos lenguajes de programación, puedes concatenar otros tipos de datos, como listas, arrays o incluso números,
    dependiendo de cómo esté implementado el lenguaje.

    2. Concatenación de Arrays:
    
  *  Puedes usar el método "concat()" o el operador de propagación ( ... ) para unir arrays.

    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let resultado = array1.concat(array2); // [1, 2, 3, 4, 5, 6]
    // O usando el operador de propagación:
    let resultado2 = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]


    3. Concatenación de Números:

  *  Si intentas concatenar un número con una cadena,
    JavaScript convierte el número a string automáticamente.

    let numero = 5;
    let texto = " es un número";
    let resultado = numero + texto; // "5 es un número"


  * Pero si concatenas números directamente,
    los suma en lugar de unirlos como texto.

    let numero1 = 5;
    let numero2 = 10;
    let resultado = numero1 + numero2; // 15

 */

                                                                     ///////////////////////////////
                                                                       /***  Concatenación  ***/
                                                                     ///////////////////////////////

let miNombre = "Brais"
let saludo = "Hola, " + miNombre + "!"
console.log(saludo)
console.log(typeof saludo)


                                                                     ///////////////////////////////
                                                                       /***      Longitud     ***/
                                                                     ///////////////////////////////

/*

¿Para que Sirve length?
se utiliza para obtener la cantidad de elementos en un objeto, 
como el número de caracteres en una cadena (string) 
o el número de elementos en un array.

* Ejemplo con Strings:
Si tienes una cadena de texto, "length" te dice cuántos caracteres contiene.

let saludo = "Hola, mundo!";
console.log(saludo.length); // 12

En este ejemplo, "Hola, mundo!" tiene 12 caracteres (incluyendo espacios y signos de puntuación), por lo que saludo.length devuelve 12.


* Ejemplo con Arrays:
Para arrays, length te indica cuántos elementos hay en el array.

let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // 5

Aquí, numeros.length devuelve 5 porque hay cinco elementos en el array numeros.

*/

console.log(saludo.length)


                                                                     ///////////////////////////////
                                                                    /***  Acceso a caracteres     ***/
                                                                     ///////////////////////////////


/*
    * En JavaScript, las cadenas de texto son tratadas como un arreglo de caracteres, 
donde cada carácter tiene un índice (posición) que empieza desde 0. 
Puedes acceder a un carácter específico de la cadena utilizando 
la sintaxis de corchetes [] con el índice del carácter que quieres obtener. 

*/
console.log(saludo[0])
console.log(saludo[11])


                                                                     ///////////////////////////////
                                                                    /***    Métodos comunes     ***/
                                                                     ///////////////////////////////


console.log(saludo.toUpperCase()) // Mayúsculas
console.log(saludo.toLowerCase()) // Minúsculas
console.log(saludo.indexOf("Hola")) // Índice
console.log(saludo.indexOf("Brais"))
console.log(saludo.indexOf("MoureDev"))
console.log(saludo.includes("Hola")) // Incluye
console.log(saludo.includes("Brais"))
console.log(saludo.includes("MoureDev"))
console.log(saludo.slice(0, 10)) // Sección
console.log(saludo.replace("Brais", "MoureDev")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)