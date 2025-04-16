import Colors from "../components/colors"; // importamos el componente reutilizable
import MyButton from "../components/boton";
import ShoppingList from "../components/productList";
import Profile from "../components/profile";

function PagesColors() {
    return (
        <>
            <Colors color='red' />
            <Colors color='blue' />
            <Colors color='#333' />

            <h3>Lista de Productos:</h3>
            <ShoppingList></ShoppingList>

            <h3>Boton:</h3>
            <MyButton></MyButton>

            <h3>Perfil:</h3>
            <Profile></Profile>
        </>
    )
};

export default PagesColors;