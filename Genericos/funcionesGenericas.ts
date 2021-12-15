function mostrar(dato:string):string {
    return dato
}

console.log(mostrar("Acá hay un dato"))

function mostrarGenerico<T>(dato:T):T{ //se usa T por convención. La función, el dato que recibe y la devolución son genericos
    return dato
}

console.log(mostrarGenerico("Acá hay un dato generico " + 32))
