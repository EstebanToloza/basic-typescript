var cartaPostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre se llama ".concat(postre, " y tiene ").concat(frutas));
};
cartaPostres("Torta", "manzana", "pera");
