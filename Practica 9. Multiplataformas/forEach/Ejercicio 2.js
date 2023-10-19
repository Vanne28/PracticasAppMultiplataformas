//Ejercicio 2
const products = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10},
]

let precioTotal = 0;

products.forEach(function (producto) {
    precioTotal+= producto.precio;
});

console.log('Precio total a pagar: $', precioTotal);