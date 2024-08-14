

                                                            ///////////////////////////////
                                                            /***      Variables        ***/
                                                            //////////////////////////////

                                                            
ESTRUCTURA:
/*
palabra reservada ('var', 'let', 'const') + nombreVariable = valor

Ejemplos:

var nombre = "Juan"
console.log(nombre)

No se deben crear varaibles con la palabra reservada 'var' ❌
Con la palabra reservada 'let' ✅
Con la palabra reservada 'const' ✅

*/

// var = es una variable, por ende se le puede reasignar o cambiar el valor

var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

// let = es una variable, por ende se le puede reasignar o cambiar el valor

let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const = es una constante algo que no cambia durante un cierto periodo de tiempo, por ende no se le puede reasignar o cambiar un valor

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)