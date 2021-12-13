function mostrar() {
    console.log("funcion 1");
}
;
function mostrarTexto(a) {
    console.log(a);
}
;
var mostrar2 = function () { console.log("funcion 2"); }; //arrow function
mostrar();
mostrarTexto("Esteban");
mostrar2();
//tsc --w nombreDelArchivo.ts ---> autocompila cada vez que se producen cambios en los archivos
