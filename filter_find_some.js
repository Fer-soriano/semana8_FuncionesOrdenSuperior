/*FILTER -FIND -SOME */

//Array:
let estudiantes = [
    { nombre: 'RICARDO', edad: 8, padres : 'Jorge'},
    { nombre: 'DANIELA', edad: 7, padres :'Beatriz'},
    { nombre: 'MARIA', edad: 6, padres : 'Pedro'},
    { nombre: 'DAVID', edad: 8, padres :'Jenifer'},
]
 
//filter
let edadStud = estudiantes.filter(elemento => elemento.edad > 7)
console.log(edadStud);

//filter - includes:
const padresStud = estudiantes.filter(elemento => elemento.padres.includes('P'))
console.log(padresStud);

//find
const buscarStud = estudiantes.find(Student => Student.nombre == 'DAVID')
console.log(buscarStud);

//Some
const nombreStud = estudiantes.some(elemento => elemento.nombre == 'DANIELA')
console.log(nombreStud);

const edadStud2 = estudiantes.some(elemento => elemento.edad >= 5)
console.log(edadStud2);



