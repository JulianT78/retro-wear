import React, { useEffect, useState } from 'react'
import { getItemId } from '../helpers/fetchData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemId }) => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        getItemId(itemId)
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