class Animal{
    private nombre:string
    private tamano:number

    public constructor(_nombre:string, _tamano:number) {
        this.nombre = _nombre
        this.tamano = _tamano
    }

    public moverse():void{
        console.log("Me estoy moviendo")
    }
}

const obj = new Animal("serpiente", 2);

//al acceder a obj. sólo podemos acceder a "moverse" ya que el resto de las propiedades son privadas y sólo se puede acceder a ellas dentro de la clase en la que se encuentran