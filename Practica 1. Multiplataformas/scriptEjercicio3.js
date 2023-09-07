var random = Math.floor(Math.random() * 5);
document.writeln(random);

let numero

do{
    numero = prompt ("Ingresa un numero aqui:")
    if (numero!=random){
        document.writeln("Sigue")
    }else{
        document.writeln("vvv")
        break;
    }
}while (numero!=random);