let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array);

array.forEach((cadena)=> {
   console.log(cadena);
});

let nuevaLong = array.push("Esta es una cadena de texto al final");

console.log(array)
console.log(nuevaLong) // devuelve la longitud del array 

let alPrincipio = array.unshift("Esta es una cadena de texto al inicio");

console.log(array)
console.log(alPrincipio) // devuelve la longitud del array 