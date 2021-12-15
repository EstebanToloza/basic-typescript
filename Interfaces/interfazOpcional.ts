interface Persona{
    altura:number
    peso:number
    nombre?:string
}

let persona = {altura:2, peso:120}

function MostrarPersona(persona:Persona):string {
    let mediaPeso:number = persona.altura / persona.peso

    if(persona.nombre){
        return `${persona.nombre} tiene una media de ${mediaPeso}`
    } else {
        return `Ésta persona tiene una media de ${mediaPeso}`
    }
}

console.log(MostrarPersona(persona))

