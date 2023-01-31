
//Ejemplo de abstraccion de una funcion

function mayorQ(edad){
    if(edad >=18){
        return true;
    }else{
        return false;
    }
}

console.log(mayorQ(25));

/*Estructura de un forEach:
array_a_recorrrer.forEach(Element => console.log(Element)) */

//array:
let estudiantes = [
    { nombre: 'RICARDO', edad: 8, padres :['Daniela', 'Jorge']},
    { nombre: 'DANIELA', edad: 7, padres :['Beatriz', 'Antonio']},
    { nombre: 'MARIA', edad: 6, padres :['Maria', 'Pedro']},
    { nombre: 'DAVID', edad: 8, padres :['Jenifer', 'Carlos']}
]
    
estudiantes.forEach(nombreStud => {
    console.log(nombreStud.nombre);
})