interface PersonaSoloLectura {
    readonly nombre:string //con readonly se evita que los valores de las propiedades de la interfaz se modifiquen después de que fueron instanciados
    readonly apellido:string
}

let personaSoloLectura:PersonaSoloLectura = { nombre: "Esteban", apellido:"Toloza"}