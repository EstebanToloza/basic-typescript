interface Person{ //la interfaz define atributos y propiedades. Luego se puede acceder a los datos del "tipo" de dicha interfaz
    //atributos
    nombre:string

}

function caminar(person:Person):void { //por medio de la variable de "tipo person" puedo acceder a todos los atributos y métodos de la interface
    console.log("La person " + person.nombre + " esta caminando");
}

let nueva_person = {nombre:'Esteban', edad:34, apellido:"Toloza"} //al declarar una nueva variable se pueden añadir argumentos no definidos anteriormente. No se pueden omitir los definidos al principio
caminar(nueva_person)
