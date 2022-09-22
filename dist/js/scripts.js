alert ("Bienvenido a nuestro espacio de Armonía");
let clientes=[];
let productos=[];
let compras=[];

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
let nuevoCliente=new cliente(clientes.length,nombre,apellido);
clientes.push(nuevoCliente);

let velas=new producto(productos.length+1,"Velas",200);
productos.push(velas);

let aceite=new producto(productos.length+1,"Aceite Escenciales",300);
productos.push(aceite);

let lampara=new producto(productos.length+1,"Lamparas de Sal",800);
productos.push(lampara);

let jabon=new producto(productos.length+1,"Jabones",100);
productos.push(jabon);

let difusores=new producto(productos.length+1,"Difusores",1.200);
productos.push(difusores);

let fuentes=new producto(productos.length+1,"Fuentes de Agua",1.700);
productos.push(fuentes);

let inciensos=new producto(productos.length+1,"Inciensos",50);
productos.push(inciensos);

let fragancia=new producto(productos.length+1,"Fragancia",600);
productos.push(fragancia);

/*
function calcularCompras (option) {
    let cantidad = 0;
    let productoBuscado=buscarProducto(option); 
    if(productoBuscado!=null){
        alert ("el costo de " +productoBuscado.descripcion + " es de $"+productoBuscado.precio +" cada una"); 
        cantidad = prompt("Indique la cantidad que desea comprar");
        if (Number(cantidad)>0 ){
            alert (nuevoCliente.nombre + " " +nuevoCliente.apellido + " el costo total de su compra es: $ "+calcularCostoTotal(productoBuscado.precio,Number(cantidad)));
            let nuevaCompra = new compra(nuevoCliente,productoBuscado,cantidad);
            compras.push(nuevaCompra);
        } else {
            alert ("debe seleccionar al menos un producto")
        }
    } else{
        alert ("la opcion elegida no es valida")
    }
}*/

function calcularCostoTotal (precio,cantidad){
    return precio * cantidad * 1.22;

}

function cliente (id, nombre, apellido){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
}
function producto(id,descripcion, precio){
    this.id=id;
    this.descripcion=descripcion;
    this.precio=precio;
}
function compra(cliente,producto,cantidad){
    this.cliente=cliente;
    this.producto=producto;
    this.cantidad=cantidad;
}
function buscarProducto(id){
    for (let index = 0; index < productos.length; index++) {
        if(productos[index].id==id){
            return productos[index];
        }
    }
}

const buttonVelas = document.querySelector("#btnComprarVelas");

buttonVelas.onclick= function () {
    agregarCarrito (1);
}

const buttonAceites = document.querySelector("#btnComprarAceites");

buttonAceites.onclick= function () {
    agregarCarrito (2);
}

const buttonLamparas = document.querySelector("#btnComprarLampara");

buttonLamparas.onclick= function () {
    agregarCarrito (3);
}

const buttonJabones = document.querySelector("#btnComprarJabones");

buttonJabones.onclick= function () {
    agregarCarrito (4);
}

const buttonDifusores = document.querySelector("#btnComprarDifusores");

buttonDifusores.onclick= function () {
    agregarCarrito (5);
}

const buttonFuente = document.querySelector("#btnComprarFuente");

buttonFuente.onclick= function () {
    agregarCarrito (6);
}

const buttonInciensos = document.querySelector("#btnComprarInciensos");

buttonInciensos.onclick= function () {
    agregarCarrito (7);
}

const buttonFragancia = document.querySelector("#btnComprarFragancia");

buttonFragancia.onclick= function () {
    agregarCarrito (8);
}


function agregarCarrito (option) {
    let productoBuscado=buscarProducto(option); 
    alert ("el costo de " +productoBuscado.descripcion + " es de $"+productoBuscado.precio +" cada una"); 
    cantidad = prompt("Indique la cantidad que desea comprar");
    if (Number(cantidad)>0 ){
        alert (nuevoCliente.nombre + " " +nuevoCliente.apellido + " el costo total de su compra es: $ "+calcularCostoTotal(productoBuscado.precio,Number(cantidad)));
        let nuevaCompra = new compra(nuevoCliente,productoBuscado,cantidad);
        compras.push(nuevaCompra);
        let cantidadCompras=compras.length+1;
        document.querySelector("#carrito").innerText = "Carrito ("+cantidadCompras+")";
    }

}
