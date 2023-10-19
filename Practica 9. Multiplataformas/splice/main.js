//slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.
let Frutas = ['banana', 'naranja', 'kiwi', 'pera','manzana'];
let removerFrutas = Frutas.splice(2,1,'uva');
console.log(Frutas);
console.log(removerFrutas);