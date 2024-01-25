import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    

    return (
        <Card className='container' style={{ maxWidth: '400px', margin: '20px auto', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '10px' }}>
            <Card.Img variant="top" src={item.imagen} alt={item.nombre} style={{ borderRadius: '10px 10px 0 0' }} />
            <Card.Body>
                <Card.Title className='titulo' style={{ fontWeight: 'bold' }}>{item.nombre}</Card.Title>
                <Card.Text className='descripcion'>{item.descripcion}</Card.Text>
                <Card.Text className="categoria" style={{ fontStyle: 'italic', color: 'gray' }}>{item.categoria}</Card.Text>
                <Card.Text className="precio" style={{ fontSize: '1.2em', color: 'green', fontWeight: 'bold' }}>${item.precio}</Card.Text>
            </Card.Body>
            <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito(item, cantidad)}} />
        </Card>
    )
}

export default ItemDetail