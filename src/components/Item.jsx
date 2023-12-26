import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Link className="btn btn-primary" to={`/item/${producto.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    )
}

export default Item