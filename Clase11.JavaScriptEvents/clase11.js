// Events
// Acciones o sucesos que ocurren en el navegador y pueden ser detectados para ejecutar un codigo en respuesta:
// Ej: click, presionar una tecla de teclado, scroll, enviar un form, pasar el mouse por arriba de algun elemento
// Permiten una reaccion a la interaccion del usuario con el sitio

// Eventos del mouse 
// click → Cuando el usuario hace clic en un elemento.
// dblclick → Cuando el usuario hace doble clic.
// mouseover → Cuando el mouse pasa sobre un elemento.
// mouseout → Cuando el mouse sale de un elemento.
// mousedown → Cuando se presiona el botón del mouse.
// mouseup → Cuando se suelta el botón del mouse.
// mousemove → Cuando el mouse se mueve dentro de un elemento.

// Eventos del teclado
// keydown → Cuando una tecla es presionada.
// keyup → Cuando una tecla es soltada.
// keypress (obsoleto) → Cuando una tecla es presionada y mantenida.

// Eventos de la ventana
// load → Cuando la página termina de cargar.
// resize → Cuando se cambia el tamaño de la ventana.
// scroll → Cuando el usuario hace scroll en la página.
// unload → Cuando el usuario sale de la página.

// Evento CLICK
document.getElementById("boton").addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

// Evento MOUSEOVER y MOUSEOUT
let caja = document.getElementById("caja");
caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "lightcoral";
    caja.textContent = "¡Entraste!";
});
caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "lightblue";
    caja.textContent = "Pasa el mouse aquí";
});

// Evento KEYDOWN (cuando presionas una tecla)
document.getElementById("campoTexto").addEventListener("keydown", function(event) {
    console.log("Tecla presionada: ", event.key);
});

// Evento SUBMIT (cuando se envía el formulario)
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    alert("Formulario enviado correctamente");
});


