import React from 'react'

const Item = ({ producto }) => {
    return (
        <div className='producto'>
            <img src={producto.imagen} alt="" />
            <div>
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Tipo: ${producto.tipo}</p>
                <a className='ver-mas' href={`/item/${producto.id}`}>Ver más</a>
            </div>
        </div>
    )
}

export default Item