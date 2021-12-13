// const parametrosOpcionales = (nombre:string, edad:number) => {
//     console.log(`Se llama ${nombre} y su edad es ${edad}`)
// };

// parametrosOpcionales("Esteban", 32)

const parametrosOpcionales = (nombre:string, edad?:number) => { //se agrega el "?" para indicar que es un parametro opcional
    console.log(`Se llama ${nombre} y su edad es ${edad}`)
};

parametrosOpcionales("Esteban")
//Se puede utilizar un condicional para responder en caso de que el parámetro exista/no exista