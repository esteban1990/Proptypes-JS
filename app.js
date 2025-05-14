console.log("desde prototypes");

let arrayClientes = [];
//constructor function
function Cliente (nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


//creando objeto con el constructor
const cliente1 = new Cliente("maximo", 4000);
// arrayClientes.push(cliente1);
// console.log(arrayClientes);



const cliente2 = new Cliente("esteban",6000);
arrayClientes.push(cliente2);
console.log(arrayClientes);  


function formatearCliente(cliente){
    const {nombre,saldo} = cliente;
    return `mi nombre es ${nombre} y tengo un saldo de ${saldo}`;	
}

console.log(formatearCliente(cliente1));


function formatearEmpresa(empresa){
    const {nombre,saldo,categoria} = empresa;
    return `el nombre de la empresa es ${nombre}, el saldo es ${saldo} y su categoria es ${categoria}`;
}


function Empresa(nombre, saldo, cagetoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = cagetoria;     
 
}

const empresa1 =  new Empresa("peluqueria canina", 10000, "area canina")

console.log(formatearEmpresa(empresa1));
