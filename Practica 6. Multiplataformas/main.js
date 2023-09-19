/*
const parrafo1 = document.getElementById("parrafo1")
console.log(parrafo1)

parrafo1.style='color:red font-size: 50px'
parrafo1.setAttribute('class', 'alerta')
parrafo1.addEventListener('click', () =>{
console.log('Hiciste click sobre el parrafo1')
console.log(parrafo1.textContent)
})

const notaEjemplo = document.getElementsByClassName('nota')
console.log(notaEjemplo);

let sumatoria = 0 

for(let i = 0; i<notaEjemplo.length; i++) {
    console.log(notaEjemplo[i])
    sumatoria += parseInt(notaEjemplo[i].textContent)
}

let promedio = sumatoria/notaEjemplo.length
console.log(`El promedio es ${promedio}`)

const parrafo2 = document.getElementsByName
('resultado')

console.log(parrafo2)
parrafo2[0].textContent = promedio

const miDiv = document.querySelector('#promedios')
const nota1 = document.querySelector('.nota [name = "siete"]')
console.log(nota1)*/

const urlImagen = document.querySelector('#url-imagen')
const btnMostrar = document.querySelector('#btn-mostrar')
const btnRemover = document.querySelector('#btn-remover')
const galeria= document.querySelector('#galeria')

btnMostrar.addEventListener('click', () =>{
    if (urlImagen.value === ' ') {
        return
    }
})

btnRemover.addEventListener('click', =>{
    
})
function  imagen(url) {
    return
    `<did class="col-4">
    <img class="img-fluid" src=${url}" alt="Imagen galeria"/>
    </div>`
}