import React, { useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    // console.log(productos);

    const categoria = useParams().categoria;
    console.log(categoria);

    useEffect(() => {
        fetchData()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((p) => p.categoria === categoria));
                } else {
                    setProductos(res);
                }
                
            })
    }, [])


    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer