import React, { useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData'
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    console.log(productos);

    useEffect(() => {
        fetchData()
            .then((res) => {
                setProductos(res);
            })
    }, [])


    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer