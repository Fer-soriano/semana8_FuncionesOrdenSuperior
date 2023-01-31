/*SORT */

const numeros = [ 10, 25, 38, 40, 56, 61];

//ordenar de menor a mayor
let ordenar1 = numeros.sort((a,b) => a-b);
console.log(ordenar1);

//mAYOR  A menor
let ordenar2 = numeros.sort((a,b) => b-a);
console.log(ordenar2);

//Ordenar strings
let palabras = ["a", "b", "c", "d", "e", "f"];
palabras.sort((a,b) =>{
    if(a==b){
        return 0;
    }
    if(b < a){
        return -1;
    }
    return 1;
});

console.log(palabras);

//ordenar arrays con objetos
let estudiantes = [
    { nombre: 'RICARDO', edad: 8, padres : 'Jorge'},
    { nombre: 'DANIELA', edad: 7, padres :'Beatriz'},
    { nombre: 'MARIA', edad: 6, padres : 'Pedro'},
    { nombre: 'DAVID', edad: 8, padres :'Jenifer'},
];

//ORDENA POR EDAD
estudiantes.sort((a,b) =>{
    if(a.edad==b.edad){
        return 0;
    }
    if(b.edad < a.edad){
        return -1;
    }
    return 1;
});

console.log(estudiantes);

//ORDENAR POR NOMBRRE (alfabeticamente)
estudiantes.sort((a,b) =>{
    if(a.nombre == b.nombre){
        return 0;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
    return 1;
});
console.log(estudiantes);