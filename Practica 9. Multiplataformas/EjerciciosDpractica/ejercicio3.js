// Función que multiplica cada elemento del array por 2 utilizando map
function multiplyByTwo(numbers) {
    const doubledNumbers = numbers.map(function(number) {
      return number * 2;
    });
  
    return doubledNumbers;
  }
  
  // Array de números de ejemplo
  const numbers = [1, 2, 3, 4, 5];
  
  // Llamamos a la función y almacenamos el resultado en una nueva variable
  const doubledNumbers = multiplyByTwo(numbers);
  
  // Imprimimos el resultado
  console.log("Array original: " + numbers);
  console.log("Array duplicado: " + doubledNumbers);
  