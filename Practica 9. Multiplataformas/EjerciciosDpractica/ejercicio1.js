// Definimos un array de números
let numeros = [1, 2, 3, 4, 5];

// Imprimimos el array original
console.log("Array original: " + numeros);

// Usamos el método splice para eliminar el segundo elemento (índice 1) del array
numeros.splice(1, 1);

// Imprimimos el array después de usar splice
console.log("Array después de eliminar el segundo elemento: " + numeros);

// Usamos el método splice para agregar dos elementos en el segundo índice del array
numeros.splice(1, 0, 6, 7);

// Imprimimos el array después de agregar elementos usando splice
console.log("Array después de agregar elementos en el segundo índice: " + numeros);
