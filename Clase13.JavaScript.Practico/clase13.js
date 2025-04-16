// // Tabla de multiplicar a partir de un valor dado:

// function tabla(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num * i}`)
//     }
// };

// tabla(6)


// Que el usuario ingrese una nota numerica y le devuelva su situacion dependiendo la nota:
// 0-3 Muy deficiente
// 3-5 Insuficiente 
// 5-6 Suficiente
// 6-7 Bueno
// 7-9 Muy Bueno
// 10 Sobresaliente

// let valor = parseInt(prompt("Ingrese el valor de su nota: ", "Entre 1 y 10"))

// function calcularNota(valor) {
//     if (valor >= 0 && valor < 3) {
//         alert("Muy deficiente")
//     } else if (valor >= 3 && valor < 5) {
//         alert("Insuficiente")
//     } else if (valor >= 5 && valor < 6) {
//         alert("Suficiente")
//     } else if (valor >= 6 && valor <= 7) {
//         alert("Bueno")
//     } else if (valor >= 8 && valor <= 9) {
//         alert("Muy Bueno")
//     } else if (valor === 10) {
//         alert("Sobresaliente")
//     } else {
//         alert("Ingrese un numero valido")
//     }
// };

// // calcularNota(valor);

// comparar si 2 textos son iguales:

// function compareTxt(txt1, txt2) {
//     return txt1 === txt2; // devuelve T o F
// };

// let texto1 = prompt("Ingrese el primer texto")
// let texto2 = prompt("Ingrese el segundo texto")

// if(compareTxt(texto1, texto2)) alert("Son iguales")
// else alert("Son distintos")


// Crear una funcion que reciba por prompt el lado de un cuadrado y devuelva el perimetro y el area del cuadrado.

function cuadrado() {
    let lado = parseInt(prompt("Ingrese el lado del cuadrado: "));

    if (isNaN(lado) || lado <= 0) {
        return "Ingrese un valor válido";
    }

    let perimetro = lado * 4;
    let area = lado ** 2

    return alert(`El perímetro es ${perimetro} y el área es ${area}`);
}

cuadrado();
