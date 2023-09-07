//Crear un array

/*const palabras = Arrary()
const lenguajes =["C#", "C++", "Phyton"]
const lista = document.querySelector("#lista");

lenguajes.forEach(funtion(item, index) {
    lista.innerHTML +='<li>$(item)<li>'
})
*/
const libros = ["libro1", "libro2"]

const btnAgregar = document.querySelector("#btnAgregar")

const libro = document.querySelector("#libro")

const listaLibros = document.querySelector("#misLibros")
const btnBuscar = document.querySelector("#btnBuscar")

btnAgregar.addEventListener("click", () => {
    if (libro.value === '') return

    if (libros.includes(libro.value) == true) return

    libros.push(libro.value)
    libro.value = ''
    mostrarLibros()
})

btnBuscar.addEventListener("click", () => {
    if (libro.value === '') return
    mostrarLibros(libro.value)
})

function mostrarLibros(searh = null) {
    listaLibros.innerHTML = null
    const result = (searh !== null) ? libros.filter(nombre => {
        return searh === nombre.toLocaleLowerCase()
    }) : libros
    
    result.forEach((item, index) => {
        listaLibros.innerHTML +=
            `<li>${item} - <button type="button" onclick="prestarLibro(${index})">Prestar</button></li>`
    })

}

function prestarLibro(index) {
    libros.splice(index, 1)
    console.log(libros)
    mostrarLibros()
    alert("Se presto un libro")
}

mostrarLibros()