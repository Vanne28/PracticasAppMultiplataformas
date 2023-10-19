// Definimos un array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];

// Usamos el método filter para obtener solo los números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Imprimimos el resultado
console.log("Números pares:", numerosPares);
