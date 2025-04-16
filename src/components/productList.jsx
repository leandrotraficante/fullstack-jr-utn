const products = [
    { title: 'Banana', isFruit: true, id: 1},
    { title: 'Manzana', isFruit: true, id: 2},
    { title: 'Cebolla', isFruit: false, id: 3},
];

function ShoppingList() {
    const listItems = products.map(product => 
        <li key={product.id}
        style={{
            color: product.isFruit ? 'blue' : 'green'
        }}
        >
            {product.title}
        </li>
    );
    
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default ShoppingList