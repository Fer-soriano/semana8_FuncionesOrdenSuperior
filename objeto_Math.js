/*OBJETO MATH */

//Valor máximo
console.log(Math.max(12, 7, 11, 25, 67));

//valor minimo
console.log(Math.min(3, 78, 90, 12, 7));

//Maximo entero menor o igual a un numero
console.log(Math.floor(12.7));

//redondear un valor
console.log(Math.round(12.7));

//Exponencial
console.log(Math.pow(10, 2));

//Numero aleatorio entre 0 y menor que 1
console.log(Math.random());

//raiz cuadrada
console.log(Math.sqrt(12,7));

//Tangente de un numero
console.log(Math.tan(45));


//Ejemplo aplicado : promedio maximo de los estudiantes
let estudiantes = [
    { nombre: 'RICARDO', edad: 8, promedio: 5},
    { nombre: 'DANIELA', edad: 7, promedio: 8},
    { nombre: 'MARIA', edad: 6, promedio: 9},
    { nombre: 'DAVID', edad: 8, promedio: 3},
];

let promedioMax = 0;

estudiantes.forEach(elemento => {
    console.log(elemento.promedio);
    promedioMax = Math.max(elemento.promedio, promedioMax);
});

console.log('El promedio máximo es: ', promedioMax);