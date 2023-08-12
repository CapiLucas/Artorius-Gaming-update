import data from "../productos.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => { // Corrected 'Promise' with a capital "P"
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => { // Corrected 'Promise' with a capital "P"
        const item = data.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}