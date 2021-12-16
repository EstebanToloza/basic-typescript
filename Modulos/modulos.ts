//pequeñas porciones de código reutilizables

export const nombre:string = "Esteban"

export class Persona{
    nombre:string
}

export interface Humano{
    nombre:string
}

export const mostrar = (dato:string):void =>{
    console.log(dato)
}

//se puede usar export default, sólo puede hacer un export default por modulo. A la hora de importar no requiere corchetes