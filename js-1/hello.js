// escribe la función hola acá

function hola() {
    return "Hola ";    
}

// código de prueba
console.log(hola() + 'Pedro!'); // "Hola Pedro!"
console.log(hola() + "Juan!"); // "Hola Juan!"
console.log(hola() + "!"); // "Hola !"

//O también:

function holaTwo(name) {
    console.log("Hola " + name);
  }
  
  holaTwo("Pedro!");
  holaTwo("Juan!");
  holaTwo("!");