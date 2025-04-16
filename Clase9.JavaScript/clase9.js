// let miNombre;
// let miEdad;
// console.log(miEdad, miNombre)

// miNombre = "Leandro";
// miEdad = 36;

// const miApellido = "Traficante";
// // miApellido = "Traficante"; // esto tira error porque una const no se puede cambiar el valor ya asigando

// console.log(miNombre, miEdad, miApellido)

// let x = 8;
// let y = 8;

// if (x < y) {
//     console.log("X es mayor a Y")
// } else if (x == y) {
//     console.log("X == Y")
// } else {
//     console.log("X no es mayor a Y")
// };


// // SWITCH
// let diaDeLaSemana = parseInt(prompt("Ingrese el numero de la semana"));
// let win = false;

// switch (diaDeLaSemana) {
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         win = true;
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Seleccione un numero valido")
//         break;
// };

// if (win) {
//     alert("Es el día ganador!")
// };

// let i = 8;
// let k = 7;

// // while (i <= k) { // primero controla si esta condicion se cumple
// //     console.log(i); // luego se ejecuta este codigo
// //     i++; 
// // };

// do {
//     console.log(i); // primero se ejecuta este codigo
//     i++; 
// } while (i <= k); // luego ve si se cumple la condicion


// let m;

// for (let m = 1; m <= 8; m++) {
//     console.log("Bucle vuelta numero: ", m);
// };

// const persona = {
//     name: "Leandro",
//     edad: 37,
//     email: "leandro@leandro.com"
// };

// console.log(persona)

// for (let i in persona) {
//     console.log(i) // devuleve los keys, no los valores
// };

// let colores = ["rojo", "azul", "verde"]

// for (let color of colores) {
//     console.log(color)
// };


let array1 = [];
let array2 = [...array1];


console.log(array1 === array2); // por que false?

array1.push(10);
console.log(array1)
console.log(array2)
console.log(array1 === array2);
