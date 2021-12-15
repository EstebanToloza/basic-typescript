//let permiso:boolean = true
let permiso = false;
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        if (permiso) {
            this.nombre = nombre;
        }
        else {
            console.log("permiso denegado para acceder a ésta información");
        }
    }
}
const objeto = new Persona("Esteban");
console.log(objeto.getNombre);
