function mostrar():void{
    console.log("funcion 1")
};

function mostrarTexto(a:string):void{
    console.log(a)
};

const mostrar2 = ():void => { console.log("funcion 2") }; //arrow function

mostrar();
mostrarTexto("Esteban");
mostrar2();

//tsc --w nombreDelArchivo.ts ---> autocompila cada vez que se producen cambios en los archivos