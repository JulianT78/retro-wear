import React, { useState } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

    const mostrarMensaje = () => {
        Swal.fire({
            title: 'Producto agregado al carrito',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        });
    };

    return (
        <div>
            <div className="item-count">
                <button className='btn btn-success' onClick={handleSumar}>+</button>
                <p className='mt-2'>Cantidad: {cantidad}</p>
                <button className='btn btn-danger' onClick={handleRestar}>-</button>
            </div>
            <button className="btn btn-primary mt-3 mb-3" onClick={() => { handleAgregar(); mostrarMensaje(); }}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount