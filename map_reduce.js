/*MAP REDUCE */

//Array:
let estudiantes = [
    { nombre: 'RICARDO', edad: 8, padres : 'Jorge'},
    { nombre: 'DANIELA', edad: 7, padres :'Beatriz'},
    { nombre: 'MARIA', edad: 6, padres : 'Pedro'},
    { nombre: 'DAVID', edad: 8, padres :'Jenifer'},
]

//Map:
const nombres = estudiantes.map(elemento => elemento.nombre)
console.log(nombres);

const edadNew = estudiantes.map(eNuevas =>{
    return {
        nombre: eNuevas.nombre,
        edad: eNuevas.edad + 1
    }
})

console.log(edadNew);

//reduce:
/*
Acumulador: valor devuelto de la iteración anterior
Valor actual: Elemento actual del arreglo
Indice: Indice del elemento actual
Arreglo: Arreglo original en el que se llamó a 'reduce'

Estructura:
const estructura.reduce(callback(acumulador, valorActual) => acumulador + valorActual.nomvre, valorinicial)
*/

let numeros = [1, 2, 3, 4];

const suma= numeros.reduce((acumulador, el) => acumulador + el, 6)
console.log(suma);


//suma de precios de tadas la frutas

fruits = [
    { description: 'orange', Amount: 50},
    { description: 'orange', Amount: 50},
    { description: 'apple', Amount: 75},
    { description: 'kiwi', Amount: 35},
    { description: 'watermelon', Amount: 25},
    
]

const itemNew = fruits.map(item => item.Amount)
console.log(itemNew);

let suma2 = itemNew.reduce((anterior, actual)=> anterior + actual, 0)
console.log(suma2); 