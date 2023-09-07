const btnAgregar = document.querySelector('#btn-agregar')
const btnEditar = document.querySelector('#btn-editar')

//desabilitamos el boton de editar
btnEditar.setAttribute('disabled',true)

//referenciando campos de formulario
const idPersona = document.querySelector("#id-persona")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const genero = document.querySelector("#genero")
const fecha = document.querySelector("#fecha")

//referenciando elementos de la tabla
const filas = document.querySelector("#filas-personas")

const personas = {
    data: [],
    nextId: 0,
    add: function(persona) {
        this.nextId++
        persona.id = this.nextId
        this.data.push(persona)
    }
}


btnAgregar.addEventListener('click', function() {
    if (nombre.value === '' || apellido.value==='') {
        return
    }

    const persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        genero: genero.value,
        fecha: fecha.value
    }

    personas.add(persona)

    console.log(personas.data)
    mostrarPersonas()
})


function getDataEdit(id) {
    personas.data.map(persona => {
        if(id === persona.id) {
            idPersona.value = persona.id
            nombre.value = persona.nombre
            apellido.value = persona.apellido
            fecha.value = persona.fecha
        }
    })

    btnEditar.removeAttribute('disabled')
    btnAgregar.setAttribute('disabled',true)
}


function mostrarPersonas() {
    filas.innerHTML = ''
    personas.data.forEach(persona => {
        filas.innerHTML += `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.nombre}</td>
                <td>${persona.apellido}</td>
                <td>${persona.genero}</td>
                <td>${persona.fecha}</td>
                <td>
                    <button class="btn btn-primary" onclick="getDataEdit(${persona.id})" >Editar</button>
                    <button class="btn btn-danger" onclick="" >Eliminar</button>
                </td>
            </tr>
        `
    })
}