//Clases es una plantilla de un objeto.
//Metodos, atributos de dicho objeto

//Ovjeto Coche
//Propiedades
//     Color
//     marca 
//     numero de ruedas 
//     numero de puertas 

//Metodos 
//     arrancar 
//     acelerar 
//     frenar 

class Vehículo {
    marca:string
    fecha:string
    puertas:number

    //propiedades
    constructor(marca_:string, fecha_:string, puertas_:number) {
        this.marca = marca_ //"this" hace referencia a "Vehículo"
        this.fecha = fecha_
        this.puertas = puertas_
    }

    //métodos
    acelerar():void {
        console.log("voy a acelerar")
    };

    frenar():void {
        console.log("voy a frenar")
    }
}

const coche = new Vehículo("Ford", "12/07/2020", 4);

coche.marca 
coche.fecha 
console.log(coche.marca)
coche.acelerar()