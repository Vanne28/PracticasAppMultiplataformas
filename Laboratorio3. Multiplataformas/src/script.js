class Calculadora {
    constructor(valorPrevioTextElement, valorActualTextElement, finalizaFuncion) {
        this.valorPrevioTextElement = valorPrevioTextElement
        this.valorActualTextElement = valorActualTextElement
        this.finalizaFuncion = ""
        this.borrarTodo()
    }

    borrarTodo() {
        this.valorActual = ''
        this.valorPrevio = ''
        this.operacion = undefined
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1)
    }

    agregarNumero(numero) {
        /* 3. Si lo que se presiona despues de igual es un numero entonces que borre el resultado anterior e inicie una nueva operacion */
        if (this.finalizaFuncion == "OK") {
            this.borrarTodo()
            this.finalizaFuncion = ""
        }

        if (this.contarDigitos() >= 11) {
            
        }else{
            if (numero === '.' && this.valorActual.includes('.')) return
            this.valorActual = this.valorActual.toString() + numero.toString()
        }
    }

    contarDigitos() {
        return Array.prototype.reduce.call(this.valorActual, function (acu, val) {
            return (val.charCodeAt(0) > 47) && (val.charCodeAt(0) < 58) ? acu + 1 : acu;
        }, 0);
    }

    /* 2 - Funcionabilidad de boton de porcentaje */
    procentaje() {
        this.valorActual = this.valorActual.toString() / 100
    }

    elejirOperacion(operacion) {
        if (this.valorActual === '') return
        if (this.valorPrevio !== '') {
            this.calcular()
        }
        this.operacion = operacion
        this.valorPrevio = this.valorActual
        this.valorActual = ''
    }


    calcular() {
        let resultado
        const valor_1 = parseFloat(this.valorPrevio)
        const valor_2 = parseFloat(this.valorActual)
        if (isNaN(valor_1) || isNaN(valor_2)) return
        switch (this.operacion) {
            case '+':
                resultado = valor_1 + valor_2
                break
            case '-':
                resultado = valor_1 - valor_2
                break
            case 'x':
                resultado = valor_1 * valor_2
                break
            case '÷':
                resultado = valor_1 / valor_2
                break
            default:
                return
        }
        this.valorPrevio = valor_1 + this.operacion + valor_2
        this.valorActual = resultado
        this.operacion = undefined
    }
/*finalizamos la funcion de agregar numero para que si se preciona igual y luego un numero borrara el resultado*/
    finalizarFuncion() {
        this.finalizaFuncion = "OK"
    }

    obtenerNumero(numero) {
        
        const cadena = numero.toString()
        const enteros = parseFloat(cadena.split('.')[0])
        const decimales = cadena.split('.')[1]
        let mostrarEnteros
        if (isNaN(enteros)) {
            mostrarEnteros = ''
        } else {
            mostrarEnteros = enteros.toLocaleString('en', { maximumFractionDigits: 0})
        }

        if (decimales != null) {
            return `${mostrarEnteros}.${decimales}`
        } else {
            return mostrarEnteros
        }
    }

    actualizarPantalla() {
      
        this.valorActualTextElement.innerText = this.obtenerNumero(this.valorActual)

        if (this.operacion != null) {
            this.valorPrevioTextElement.innerText = `${this.obtenerNumero(this.valorPrevio)} ${this.operacion}`
        } else {

            /* 4. Muestre la operacion completa en el display superior */
            if (this.valorPrevio != null) {
                this.valorPrevioTextElement.innerText = this.valorPrevio
            } else {
                this.valorPrevioTextElement.innerText = ''
            }
        }
    }
}

//Captura de datos del DOM
const numeroButtons = document.querySelectorAll('[data-numero]')
const operacionButtons = document.querySelectorAll('[data-operacion]')
const igualButton = document.querySelector('[data-igual]')
const porcentajeButton = document.querySelector('[data-porcentaje]')
const borrarButton = document.querySelector('[data-borrar]')
const borrarTodoButton = document.querySelector('[data-borrar-todo]')
const valorPrevioTextElement = document.querySelector('[data-valor-previo]')
const valorActualTextElement = document.querySelector('[data-valor-actual]')

// Instanciar un nuevo objeto de tipo calculadora
const calculator = new Calculadora(valorPrevioTextElement, valorActualTextElement, "")

numeroButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.agregarNumero(button.innerText)
        calculator.actualizarPantalla()
    })
})

operacionButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.elejirOperacion(button.innerText)
        calculator.actualizarPantalla()
    })
})

igualButton.addEventListener('click', _button => {
    calculator.calcular()
    calculator.actualizarPantalla()
    calculator.finalizarFuncion()
})

borrarTodoButton.addEventListener('click', _button => {
    calculator.borrarTodo()
    calculator.actualizarPantalla()
})

borrarButton.addEventListener('click', _button => {
    calculator.borrar()
    calculator.actualizarPantalla()
})


/* 2 - Funcionabilidad de boton de porcentaje */
porcentajeButton.addEventListener('click', _button => {
    calculator.procentaje()
    calculator.calcular()
    calculator.actualizarPantalla()
})


/*Parcial:
1. Arreglar bug que limite los numeros en pantalla
2. Funcionabilidad de boton de porcentaje
3. Si lo que se presiona despues de igual es un numero entonces que borre el resultado anterior e inicie una nueva operacion
4. Muestre la operacion completa en el display superior
*/