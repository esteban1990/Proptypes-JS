console.log("desde prototypes");   


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

//instanciarlo
const cliente1 = new Cliente("maximo","bravo", 501);
console.log(cliente1.tipoCliente());
console.log(cliente1);
console.log(cliente1.tipoClienteSaldo())
cliente1.retirarSaldo(100);
console.log(cliente1.tipoClienteSaldo())














// const cliente1 = new Cliente("maximo", "bravo", 9000);
// console.log(cliente1);