let receta = {};

receta.nombre = "Sandwich";

receta.ingredientes = [];

receta.ingredientes = [
    {nombre: "Pan", cantidad: 2}
]

receta.ingredientes.push({nombre: "Queso", cantidad: 1});

let ingrediente = receta.ingredientes[0];
console.log(ingrediente.nombre);

let sum = 0;
function sumaCantidad() {
    
    for (i = 0; i < receta.ingredientes.length; i++) {
        sum += receta.ingredientes[i].cantidad;
    }
    
    return sum;
}

sumaCantidad();

console.log(sum);
