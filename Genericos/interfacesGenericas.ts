interface interfacePersona<T> {
    nombre: T  
}

let obj:interfacePersona<string> = {nombre:"Esteban"}

let objNum:interfacePersona<number> = {nombre:32}