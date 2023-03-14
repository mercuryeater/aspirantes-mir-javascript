
function max(array) {

    if (array.length === 0) {
        return undefined;
    }


    let arrayActual = 0;

    for (i = 0; i < array.length; i++) {
        
        if (array[i] > arrayActual) {
            arrayActual = array[i];
        } 
    } 
    return arrayActual;
   
    }

console.log(max([3, 3, 2, 6])) // 6
console.log(max([5, 9, 8, 7, 6, 5, 4, 10])) // 10
console.log(max([])) // undefined
console.log(max([2])) // 2
console.log(max([0])) // 0