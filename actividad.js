//1. Imprimir en consola solo las marcas con sus stock.

let zapatos = [
    { marca: 'NIKE', stock: 8, precios: 150.30 },
    { marca: 'PUMA', stock: 7, precios: 80.50 },
    { marca: 'ADIDAS', stock: 6, precios: 70.41 },
    { marca: 'CONVERSE', stock: 8, precios: 220.8 }
]

zapatos.forEach(stockZap => {
    console.log(stockZap.marca, stockZap.stock);
})

//2. Imprimir en consola solo si alguno de los productos cuesta más de 200.
let precioZap = zapatos.filter(elemento => elemento.precios > 200)
console.log(precioZap);

//3. Imprime en consola el precio promedio de los productos. Si no sabes sacar un promedio te sugerimos veas el siguiente video: https://youtu.be/_B50eYV44-k
const itemNew = zapatos.map(item => item.precios)
console.log(itemNew);

let suma = itemNew.reduce((anterior, actual)=> anterior + actual, 0)
promedio = suma/4;
console.log('El promedio de los productos es: ', promedio);


//4. Imprime en consola alfabéticamente el nombre de los productos.
zapatos.sort((a,b) =>{
    if(a.marca == b.marca){
        return 0;
    }
    if(a.marca < b.marca){
        return -1;
    }
    return 1;
});
console.log(zapatos);

//5. Imprime en consola el producto más costoso, y redondea en un número entero.
let preciosMax = 0;

zapatos.forEach(elemento => {
    console.log(elemento.precios);
    preciosMax = Math.max(elemento.precios, preciosMax);
    productoEntero = Math.round(preciosMax);
});

console.log('El producto mas costoso es: ', productoEntero);
