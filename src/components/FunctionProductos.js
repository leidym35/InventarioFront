import axios from 'axios';


export const registerProductos = newProducto => {
return axios
.post('http://localhost:3000/addProducto', {
    categoria: newProducto.categoria,
    nombreProducto: newProducto.nombreProducto,
    cantidad: newProducto.cantidad,
    precio: newProducto.precio,
     }).then(res => {
        alert("Producto registrado")
    })
}