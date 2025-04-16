// cuadrado 1: Cambiar de color cuando el mouse pasa por arriba (cuando sale vuelve al color original)

document.getElementById("square1_change_color").addEventListener("mouseenter", function () {
    this.style.backgroundColor = "yellow";
});

document.getElementById("square1_change_color").addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
});

// cuadrado 2: Click y cambio de color, loop "infinito" entre diferentes colores:

let colorsLoop = ["blue", "black", "red", "green", "yellow"];
let index = 0;

document.getElementById("square2_color_infinite_loop").addEventListener("click", function () {
    this.style.backgroundColor = colorsLoop[index];
    index = (index + 1) % colorsLoop.length;
});

// cuadrado 3: Al hacer doble click, cambiar color del borde y aumentar tamaño del cuadrado:

document.getElementById("square3_border_and_size").addEventListener("dblclick", function () {
    this.style.borderColor = "black";
    this.style.borderWidth = "25px";
    this.style.backgroundColor = "green";
    this.style.width = "200px";
    this.style.height = "200px";
    this.style.borderStyle = "solid"; 
});
