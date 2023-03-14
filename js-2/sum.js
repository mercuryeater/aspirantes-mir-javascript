function sum(array) {
    let arrayActual = 0;
    
    for (i = 0; i < array.length; i++) {
        
        arrayActual = arrayActual + array[i]; 
        
    }   
    return arrayActual;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0