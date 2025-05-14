console.log("desde app3")

function Cliente(nombre,apellido,saldo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo
}


Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 1000){
        tipo = "gold"
    } else if (this.saldo > 500){
        tipo = "platinuum"
    } else {
        tipo = "normal"
    } return tipo;

}

Cliente.prototype.tipoClienteSaldo = function(){
    return `el nombre es ${this.nombre} y mi apellido es ${this.apellido}, tipo cliente ${this.tipoCliente()}`
}
Cliente.prototype.retirarSaldo = function(retira){
    this.saldo -= retira
}

function Persona(nombre,apellido,saldo,telefono){
    Cliente.call(this,nombre,apellido,saldo);
    this.telefono = telefono
}

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente

//instanciarlo
const persona1 = new Persona("esteban","bravo",1000,98181412)
console.log(persona1);
console.log(persona1.tipoClienteSaldo())




Persona.prototype.mostrarTelefono = function(){
    return `el telefono de ${this.nombre} es ${this.telefono}`
}

console.log(persona1.mostrarTelefono())