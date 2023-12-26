import data from '../data/data.json';

export const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const getItemId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((element) => element.id === id);

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}