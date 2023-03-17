let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar","squash","piano"]
}

//Imprime en la consola el valor de la llave edad.
//console.log(pedro.edad);
//console.log(pedro["edad"])

//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;

//console.log(pedro.estatura);

//Elimina la propiedad con llave activo.
delete pedro.activo;

//Recorre todas las propiedades e imprímelas en consola 
//(una línea por propiedad y separando la llave y el valor con dos puntos :).

// let llaves = Object.keys(pedro);

// for (i = 0; i < llaves.length; i++) {
//     let valor = llaves[i];
//     console.log(llaves[i] + " : " + pedro[valor]) 
// }


pedro.saluda = function() {
  let saludo = "Hola, me llamo " + this.nombre;
  return saludo;
}

console.log(pedro.saluda());

