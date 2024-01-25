import React, { useEffect, useState } from 'react'
import { getItemId } from '../helpers/fetchData';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    // console.log(id);

    useEffect(() => {
        getItemId(Number(id))
            .then((response) => {
                setItem(response);
            })
    }, [])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer