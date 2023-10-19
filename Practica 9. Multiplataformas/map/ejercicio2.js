//Ejercicio 2
//Convertir grados celcius a grados farenheith
const Gcelcius = [ 0,15,30,5,10];
const Gfarenheith = Gcelcius.map(function (celcius) {
    //Formula °F = (°C * 9/5) + 32
    return ( celcius * 9/5) + 32;
});
console.log('Grados Celcius:', Gcelcius)
console.log('Grados Farenheith:', Gfarenheith)