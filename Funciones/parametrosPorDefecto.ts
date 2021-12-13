//parametros por defecto

// const mostrar = (nombre:string, edad:number) => {
//     console.log(`Se llama ${nombre} y su edad es ${edad}`)
// };

// mostrar("Esteban", 32)

const mostrar = (nombre:string, edad:number = 32) => { //se setea un valor por default 
    console.log(`Se llama ${nombre} y su edad es ${edad}`)
};

mostrar("Esteban")