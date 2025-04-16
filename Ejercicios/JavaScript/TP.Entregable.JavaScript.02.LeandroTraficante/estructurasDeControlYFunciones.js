// Que el usuario ingrese una nota numerica y le devuelva su situacion dependiendo la nota:
// 0-3 Muy deficiente
// 3-5 Insuficiente 
// 5-6 Suficiente
// 6-7 Bueno
// 7-9 Muy Bueno
// 10 Sobresaliente

let valor = parseInt(prompt("Ingrese el valor de su nota: ", "Entre 1 y 10"))

function calcularNota(valor) {
    if (valor >= 0 && valor < 3) {
        alert("Muy deficiente")
    } else if (valor >= 3 && valor < 5) {
        alert("Insuficiente")
    } else if (valor >= 5 && valor < 6) {
        alert("Suficiente")
    } else if (valor >= 6 && valor <= 7) {
        alert("Bueno")
    } else if (valor >= 8 && valor <= 9) {
        alert("Muy Bueno")
    } else if (valor === 10) {
        alert("Sobresaliente")
    } else {
        alert("Ingrese un numero valido")
    }
};


calcularNota(valor);

// Ingresar via prompt el numero del mes (del 1 al 12) y devolver si el mes tiene 30, 31 o 28 dias (Febrero): 

let mes = parseInt(prompt("Ingrese el numero del mes: ", "Entre 1 y 12"))
function diasDelMes(mes) {
    if (mes === 2) {
        alert("Febrero tiene 28 dias")
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        alert("El mes tiene 30 dias")
    }
    else if (mes >= 1 && mes <= 12) {
        alert("El mes tiene 31 dias")
    } else {
        alert("Ingrese un numero valido")
    }
};

diasDelMes(mes);

// Ingresar via prompt un numero y devolver si es positivo o negativo; colocar esto dentro de un bucle que finalice cuando el numero 
// ingresado sea 0.

let numero = parseInt(prompt("Ingrese un numero: ", "Para finalizar el programa ingrese '0'"))
function positivoONegativo(numero) {
    while (numero !== 0) {
        if (numero > 0) {
            alert("El numero es positivo")
        } else {
            alert("El numero es negativo")
        }
        numero = parseInt(prompt("Ingrese un numero: "))
    }
    alert("Ha ingresado 0; el programa ha finalizado")
};
positivoONegativo(numero);


// FUNCIONES

// Crear una funcion que reciba un dato y devuelva el tipo de dato que es.

function tipoDeDato(dato) {
    let tipo = typeof(dato)
    return `El dato ingresado es de tipo ${tipo}`;
};

console.log(tipoDeDato("Hola"));


// Dado dos numeros ingresados por el usuario, realizar una funcion que devuelva la resta entre ambos:

const resta = function () {
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let total = num1 - num2;
    return alert(`La resta entre ${num1} y ${num2} es ${total}`);
};

resta();


// Crear una funcion que dada una temperatura en grados Celsius la convierta en grados Fahrenheit:

function celsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

console.log(celsiusAFahrenheit(35))