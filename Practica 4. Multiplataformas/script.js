/*const persona = {
    id: 1,
    nombreCompleto: {
        nombre: 'Vanessa',
        apellidos: 'Perez'
    },
    edad: 23
}

function getEdad({ edad }) {
    return `La edad de la persona es ${edad}`
}

console.log(getEdad(persona))

function getNombreCompleto({ nombreCompleto: {nombre, apellidos }}) {
return `Nombre completo ${nombre} ${apellidos}`
}
 console.log(getNombreCompleto(persona))
*/

/*const bitacora = [
    {
        id: 1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00am',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez',
                }
            },
        },
        descripcion: 'Se ingresaron nuevos datos a la tabla personas'
    },
    {
        id: 2,
        titulo: 'Modificacion',
        detalles: {
            hora: '11:00am',
            fecha: '12 de agosto de 2023',
            campos: {
                anterior: [
                    {
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez',
                    }
                ],
                actual: {
                    id: 1,
                    nombres: 'Juan Carlos',
                    apellidos: 'Hernandez',
                }
            },
        },
        descripcion: 'Se ingresaron nuevos datos a la tabla personas'
    },
]
*/
/*ITERACION FOR ...OF Y DESETRUCTURACION

const personas = [
    {
        id: 1,
        nombreCompleto: {
            nombres: 'Vanessa',
            apellidos: 'Perez'
        },
        edad: 23
    },
    {
        id: 2,
        nombreCompleto: {
            nombres: 'Damary',
            apellidos: 'Gomez'
        },
        edad: 22
    }

]

for (const {nombreCompleto: {nombre, apellidos}} of personas){
    console.log(nombres, apellidos)
}*/

/*parte 1*/
const bitacora = [
    {
        id: 1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00am',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez',
                }
            },
        },
        descripcion: 'Se ingresaron nuevos datos a la tabla personas'
    },
] 

for (const {titulo, detalles: {hora, fecha}, descripcion} of bitacora){
    console.log( titulo);
    console.log( hora) ;
    console.log( fecha);
    console.log(descripcion); 
}

function getDetalles({ detalles: {hora, fecha }}) {
    return `La hora y fecha es: ${hora} ${fecha}`
    }
     console.log(getDetalles(bitacora))

     
//parte 2
     function desempacarCampos(objeto) {
        const { id, detalles: { campos: { actual: { nombres, apellidos } } } } = objeto;
        return { id, nombres, apellidos };
      }


//parte 3
      const [, Registro] = bitacora;

const {
  detalles: {
    campos: { anterior, actual },
  },
} = Registro;

console.log("Campos Anteriores:", anterior);
console.log("Campos Actuales:", actual);
