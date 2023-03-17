let persona = {
    nombre: 'Juan',
    edad: 20,
    ciudad: 'Bogota'
}

//Imprime en la consola el objeto "persona" completo.

//console.log(persona);


//Crea una funcion llamada presentacion que devuelva una cadena de texto del objeto
let mensaje = ""; 
function presentacion(persona) {    
    for (keys in persona) {
        mensaje = mensaje + persona[keys] + " ";
    }
    return mensaje;
}

presentacion(persona);

console.log(mensaje);

persona.hobbies = ['Natacion', 'Yoga', 'Montañismo'];

console.log(persona.hobbies);

for (i =0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}
