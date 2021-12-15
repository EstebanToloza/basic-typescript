var persona = { altura: 2, peso: 120 };
function MostrarPersona(persona) {
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return "".concat(persona.nombre, " tiene una media de ").concat(mediaPeso);
    }
    else {
        return "\u00C9sta persona tiene una media de ".concat(mediaPeso);
    }
}
console.log(MostrarPersona(persona));
