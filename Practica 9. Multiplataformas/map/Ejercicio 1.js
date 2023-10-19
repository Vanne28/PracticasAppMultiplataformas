//map(): Crea un nuevo array aplicando una función a cada elemento del array original
//Ejecicio 1
let numbers1 = [1,2,3];
let nuevoArreglo = numbers1.map(function (number) {
    return number * 2
})
console.log(nuevoArreglo)