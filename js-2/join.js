function join(array) {
    //Se crea una variable vacia
    
    let str = "";

    //Se recorre el array
    for (let i = 0; i < array.length; i++) {
        //Empiezo a llenar la variable vacia con el array y el espacio.
        str = str + array[i] + " ";        
    }
    //Se retorna str
    return str;
    
}

console.log(join([10, 9, 8, 7, 6, 5, 4]))
console.log(join(["hola", "mi", "nombre", "es", "F", 7]))
