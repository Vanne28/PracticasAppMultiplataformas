
//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.
let num = [1,2,3,4];
let sum = num.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual
}, 0)

console.log(sum)