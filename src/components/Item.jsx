import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = ({ producto }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    Precio: ${producto.precio}<br />
                    Tipo: {producto.tipo}
                </Card.Text>
                <Button variant="primary" href={`/item/${producto.id}`}>Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default Item