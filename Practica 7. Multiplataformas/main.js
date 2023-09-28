const contentFilas = document.querySelector("#filas-content")
const templateFilas = document.querySelector("#filas-template")
const fragment = document.createDocumentFragment()

let productos =[
    {
        id: 1,
        name: 'Coca Cola',
        stock: 20,
        price: 2.00
    },

    {
        id: 2, 
        name: 'Pepsi',
        stock: 15,
        price: 1.50
    },

    {
        id: 3,
        name: 'Jugo del Valle',
        stock: 35,
        price: 1.50
    },
]


function filasTabla(){
contentFilas.textContent=''
productos.forEach( item =>{
    const clone = templateFilas.content.cloneNode(true)


        clone.querySelector('.id').textContent = item.id
        clone.querySelector('.name').textContent = item.name
        clone.querySelector('.stock').textContent = item.stock
        clone.querySelector('.price').textContent = `$ ${item.price}`

        clone.querySelector('.btn-remover').dataset.id = item.id
       

        fragment.appendChild(clone)
    })

    contentFilas.appendChild(fragment)
    agregarEventoRemoverProducto()
   agregarEventoAgregarProducto()
}

function agregarEventoRemoverProducto() {
    const buttons = document.querySelectorAll('.btn-remover')

    buttons.forEach(btn => {
        btn.addEventListener('click',(e) =>{
            let id= btn.dataset.id
            removerProducto(id)
            filasTabla()
        })
    })
}

function removerProducto(id){
    productos = productos.filter(
        pro => parseInt(pro.id) !== parseInt(id)
    )   
}

function agregarEventoAgregarProducto() {
    const buttons = document.querySelectorAll('.btn-agregar')

    buttons.forEach(btn => {
        btn.addEventListener('click',(e) =>{
            let id= btn.dataset.id
            agregarProducto(id)
            filasTabla()
        })
    })
}

function agregarProducto(id){
    productos = productos.filter(
        pro => parseInt(pro.id) !== parseInt(id)
    )   
}


filasTabla()