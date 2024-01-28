import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <Row>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        Precio: ${producto.precio}<br />
                        Categoría: {producto.categoria}
                    </Card.Text>
                    <Link className="btn btn-primary" to={`/item/${producto.id}`}>Ver más</Link>
                </Card.Body>
            </Card>
        </Row>

    )
}

export default Item