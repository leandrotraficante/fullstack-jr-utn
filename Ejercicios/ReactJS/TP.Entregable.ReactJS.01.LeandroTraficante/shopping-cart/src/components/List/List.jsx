import React from 'react';
import Card from '../Card/Card';
import './list.css'
import banana from '../../assets/products-images/banana.png'
import lechuga from '../../assets/products-images/lechuga.png'
import zanahoria from '../../assets/products-images/zanahoria.png'
import sandia from '../../assets/products-images/sandia.png'
import palta from '../../assets/products-images/palta.png'


const productos = [
  {
    id: 1,
    nombre: 'Banana',
    descripcion: 'Bananas frescas y dulces, perfectas para snacks y smoothies.',
    precio: 50,
    imagen: banana,
  },
  {
    id: 2,
    nombre: 'Lechuga',
    descripcion: 'Lechuga verde, crujiente y fresca, ideal para ensaladas saludables.',
    precio: 80,
    imagen: lechuga,
  },
  {
    id: 3,
    nombre: 'Zanahoria',
    descripcion: 'Zanahorias naranjas, dulces y nutritivas para cocinar o comer crudas.',
    precio: 75,
    imagen: zanahoria,
  },
  {
    id: 4,
    nombre: 'Sandía',
    descripcion: 'Sandía jugosa, dulce y refrescante, perfecta para el verano.',
    precio: 90,
    imagen: sandia,
  },
  {
    id: 5,
    nombre: 'Palta',
    descripcion: 'Paltas cremosas y listas para comer, perfectas para ensaladas o untar.',
    precio: 80,
    imagen: palta,
  },
];


function List({ addToCart }) {
  return (
    <div className='list'>
      {productos.map((producto) => (
        <Card
          key={producto.id}
          producto={producto}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default List;
