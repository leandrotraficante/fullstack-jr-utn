// Crear una funcion que contenga un array de colores y su parametro de entrada sea un color y su valor de salida verdadero cuando el 
// color se encuentre en la lista y falso cuando no se encuentre en la lista:

function colorEnLista(color) {
    let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
    return colores.includes(color.toLowerCase());
};

let color = prompt("Ingrese un color: ");
if (colorEnLista(color)) {
    alert("El color se encuentra en la lista");
} else {
    alert("El color no se encuentra en la lista");
};
