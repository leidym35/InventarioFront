import React, { Component } from 'react';
import NavbarProfile from './NavbarProfile.component';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Producto extends Component {

    state = {
        productos: []
      }
      componentDidMount() {
        axios.get('http://localhost:3000/productos').then(res => {
            const productos=res.data
            this.setState({productos})
        })
    }

    deleteProducto(id){
        axios.get('http://localhost:3000/productosDelete/'+id).then(res => {
           alert("Producto eliminado")
        })
    }
  

    render() {
        return (
            <div className="container">
            <NavbarProfile/> 
           <center><h4>OBTENER PRODUCTO </h4></center>
            {this.state.productos.map(producto => <div>
                <strong> Categoria: </strong>{producto.categoria}<div></div>
                <strong> Nombre: </strong>{producto.nombreProducto}<div></div>
                <strong> Cantidad: </strong>{producto.cantidad}<div></div>
                <strong> Precio: </strong>{producto.precio}<div></div>
                <a onClick={()=>this.deleteProducto(producto.idProducto)} class="btn btn-danger">Eliminar</a> 
                </div>)}
            </div>       
        )
    }
}

export default Producto;