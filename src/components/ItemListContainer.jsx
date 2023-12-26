import React, { useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    // console.log(productos);

    const categoria = useParams().categoria;
    console.log(categoria);

    useEffect(() => {
        fetchData()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((p) => p.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            })
    }, [categoria])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer