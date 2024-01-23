import React, { useState } from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

    return (
        <div>
            <div className="item-count">
                <button className='btn btn-success' onClick={handleSumar}>+</button>
                <p>Cantidad: {cantidad}</p>
                <button className='btn btn-danger' onClick={handleRestar}>-</button>
            </div>
            <button className="btn btn-primary" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount