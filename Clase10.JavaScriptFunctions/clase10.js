//FUNCTIONS
//bloque de codigo reutilizable que ejecuta una tarea especifica y SIEMPRE devuelve un resultado

function saludar(nombre) {
    return "Hola " + nombre;
};

console.log(saludar("Leandro"));

// FX Anonimas --> funciones que no tienen nombre, y que estan asignadas a una variable:

const suma = function (num1, num2) {
    return num1 + num2;
};

// suma 2 paramentros, no necesariamente numeros:
console.log(suma(2, 3));
console.log(suma("Hola ", "Leandro"));
console.log(suma("Texto ", 3));
console.log(suma(true, false));

// FX Flecha (forma de fx anonima); son formas mas cortas de escribir las fx

const multiplicar = (a, b) => a * b;

console.log(multiplicar(7, 7))