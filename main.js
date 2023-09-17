// En esta oportunidad, voy a intentar acomplar mi primera entrega, que era un simulador interactivo que calculaba un precio final dependiendo de la cantidad de cuotas en las que el usuario deseaba pagar, agregandole productos, utilizando para esto un array de objetos, y que antes de operar el usuario pueda verificar que su producto este disponible.

const productos = [
{
    nombre: "buzo",
    precio: 15000

},

{
    nombre: "pantalon cargo",
    precio: 13500
},
{
    nombre: "zapatillas",
    precio: 35000
},
{
    nombre: "remera",
    precio: 10000
}
];

function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre === nombre)
}

const nombreProducto = prompt("Ingrese el nombre del producto que desea");
let productoExiste = buscarProducto(nombreProducto);


while (true){
if (productoExiste) {
    alert (`El producto ${productoExiste.nombre} tiene un precio de $${productoExiste.precio.toFixed(0)} pesos` );
    break;

} else {
    alert("Producto no disponible, intente con otro.");
    const nuevoIntento = prompt("Ingrese el nombre del producto que desea");
    productoExiste = buscarProducto(nuevoIntento);

}
}

let cuotas;
while (true) {
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 6 (10% de recargo), 12 (20% de recargo), 18(30% de recargo) o 24(40% recargo)"));
if ([6, 12, 18, 24].includes(cuotas)) {
    break;
} else {
    alert("La cantidad de cuotas no es válida, deben ser 6, 12, 18 o 24"); 
}
}

function precioFinal(producto, cuotas) {
    let recargo;
    if (cuotas === 6) {
      recargo = 1.10;
    } else if (cuotas === 12) {
      recargo = 1.20;
    } else if (cuotas === 18) {
      recargo = 1.30;
    } else if (cuotas === 24) {
      recargo = 1.40;
    }
    const precioConRecargo = producto.precio * recargo;
    const valorCuota = precioConRecargo / cuotas;
    return { precioConRecargo, valorCuota };
}

if (productoExiste) {
    const { precioConRecargo, valorCuota } = precioFinal(productoExiste, cuotas);
    alert(`El precio final es: $${precioConRecargo.toFixed(0)}. El valor de cada cuota es: $${valorCuota.toFixed(2)}`);
  }