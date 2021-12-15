let permiso:boolean = true

class Persona{
    public nombre:string
    
    constructor(nombre:string){
        this.nombre = nombre
    }

    get getNombre():string{
        return this.nombre
    }

    set setNombre(nombre:string){
        if(permiso){
            this.nombre = nombre
        } else {
            console.log("permiso denegado para acceder a ésta información")
        }
    }
}

const objeto = new Persona("Esteban")
console.log(objeto.getNombre)