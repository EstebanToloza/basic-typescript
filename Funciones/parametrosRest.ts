const cartaPostres = (postre:string, ...frutas:string[]):void => { //el parámetro rest recibe un array y lo recorre mostando todos los elementos del array
    console.log(`El postre se llama ${postre} y tiene ${frutas}`)
};

cartaPostres("Torta", "manzana", "pera")