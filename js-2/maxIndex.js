function maxIndex(array) {
    //Si el arreglo est[a vacio retorna -1
    if (array.length === 0) {
        return -1;
    }
    //Declarar la variable que dice el numero mas alto
    let maxNum = 0;
    
    //Recorrer el arreglo para identificar numero mas alto
    for (i = 0; i < array.length; i++) {
        //Si el elemento es mas grande que el numero mas alto, el numero mas alto adopta ese valor        
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }

    //Recorrer el arreglo para encontrar el index del numero mas alto
    for (i = 0; i <array.length; i++) {
        //Si el elemnto es igual al numero mas alto, retorna el indice actual
        if (array[i] === maxNum) {
            return i;
        }
    }
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
console.log(maxIndex([10, 90, 86, 72, 6, 500, 48])) // 5
