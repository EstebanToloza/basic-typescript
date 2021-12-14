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
var Vehículo = /** @class */ (function () {
    function Vehículo(marca_, fecha_, puertas_) {
        this.marca = marca_; //"this" hace referencia a "Vehículo"
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehículo.prototype.acelerar = function () {
        console.log("voy a acelerar");
    };
    ;
    Vehículo.prototype.frenar = function () {
        console.log("voy a frenar");
    };
    return Vehículo;
}());
var coche = new Vehículo("Ford", "12/07/2020", 4);
coche.marca;
coche.fecha;
console.log(coche.marca);
coche.acelerar();
