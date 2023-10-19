//every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false.

let number = [ 1,2,3,4,5]
let mayorCero = number.every(function (number) {
    return number > 0
});
console.log(mayorCero)