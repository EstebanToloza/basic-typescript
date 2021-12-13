//parametros por defecto
// const mostrar = (nombre:string, edad:number) => {
//     console.log(`Se llama ${nombre} y su edad es ${edad}`)
// };
// mostrar("Esteban", 32)
var mostrar = function (nombre, edad) {
    if (edad === void 0) { edad = 32; }
    console.log("Se llama ".concat(nombre, " y su edad es ").concat(edad));
};
mostrar("Esteban");
