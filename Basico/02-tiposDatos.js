
                                                    ///////////////////////////////
                                                /***  Tipos de datos primitivos  ***/
                                                    //////////////////////////////

// Cadenas de texto (string)
let nombre = "Andres Mauricio" // ejemplo con comillas dobles
let alias = 'Mauro' // ejemplo con comillas simples
let email = `a.meloinvente03@mouredev.com` // ejemplo comillas invertidas

// Números (number)
let edad = 20 // Entero
let altura = 1.80 // Decimal

// Booleanos (boolean)
let esEstudiante = true
let esProfesor = false

/*

undefined: Se usa cuando una variable se ha declarado pero no se le ha asignado un valor.

null: Se usa cuando se quiere intencionalmente indicar que una variable no tiene un valor.

*/


// Undefined
let undefinedValue // su valor por defecto es "undefined" porque no se le a asignado un valor
console.log(undefinedValue)

// Null
let nullValue = null // el valor de la variable es "null" representa nada o vacio


/*
// Symbol


Un símbolo es un valor único e inmutable. 
Se utiliza principalmente como identificador para propiedades de objetos,
garantizando que no haya colisiones entre propiedades que puedan tener 
el mismo nombre

Únicos: Cada símbolo creado es único.
Aunque dos símbolos tengan la misma descripción, 
no son iguales entre sí.

*/

let mySymbol = Symbol("mysymbol")
let mySymbo2 = Symbol("mysymbol")

console.log( mySymbol === mySymbo2) // false


/*
// BigInt

let granInt1 = BigInt(817239871289371986589716389471628379612983761289376129);
- se está utilizando la función BigInt() para convertir un número 
(pasado como argumento) en un valor de tipo BigInt
- es muy grande y excede el límite que un Number estándar en JavaScript 
puede manejar con precisión. Al usar BigInt(), el número es convertido 
en un valor de tipo BigInt, permitiendo operaciones matemáticas 
precisas con números grandes.

let granInt2 = 817239871289371986589716389471628379612983761289376129n
- se está utilizando una sintaxis más simple para declarar un BigInt
-El sufijo n al final de un literal numérico convierte el número inmediatamente 
en un valor de tipo BigInt. Esta es una forma más directa de crear un BigInt 
sin necesidad de usar la función BigInt().

*/

let granInt1 = BigInt(817239871289371986589716389471628379612983761289376129)
let granInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof nombre)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof edad)
console.log(typeof altura)

console.log(typeof esEstudiante)
console.log(typeof esProfesor)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof granInt1)
console.log(typeof granInt2)