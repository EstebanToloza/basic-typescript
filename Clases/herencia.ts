class Padre{

    nombre:string
    edad:number

    constructor(_nombre:string, _edad:number) {
        this.nombre = _nombre
        this.edad = _edad
    }

    mostrarNombre():void {
        console.log(this.nombre)
    }
}

class Hijo extends Padre{ //con la palabra reservada extends heredo las propiedades y métodos de la clase padre

    apellido:string

    constructor(_nombre:string, _edad:number, _apellido:string){
        super(_nombre, _edad);

        this.apellido = _apellido;
    }

    mostrarNombreHijo():void {
        console.log(this.nombre)
    }
}

const nuevoHijo = new Hijo("Manuel", 22, "Toloza");
