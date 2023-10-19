//Ejercicio 2
const personas = [
    {nombre: 'Vane', edad: 23},
    {nombre: 'Vane', edad: 23},
    {nombre: 'Vane', edad: 23},
    {nombre: 'Vane', edad: 23},
    {nombre: 'Vane', edad: 23},
    ]
    
    const adultos = personas.filter(function (person) {
        return person.edad > 18
    })
    console.log(adultos)