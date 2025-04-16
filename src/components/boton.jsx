import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(1)   ;
    function handleClick() {
        setCount(count + 1 );
        alert(`Hiciste Click ${count} veces!`);
    }

    return (
        <button onClick={handleClick}>
            Hazme clic
        </button>
    );
}
export default MyButton;

// ¡Nota que onClick={handleClick} no tiene paréntesis al final! No llames a la función controladora de evento:
// solamente necesitas pasarla hacia abajo. React llamará a tu controlador de evento cuando el usuario haga clic en el botón.