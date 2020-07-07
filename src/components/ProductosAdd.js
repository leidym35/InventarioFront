import React, { Component } from 'react';
import NavbarProfile from './NavbarProfile.component';
import {registerProductos} from './FunctionProductos'

class ProductoAdd extends Component {
    constructor() {
        super()
        this.state = {
            categoria: '',
            nombreProducto: '',
            cantidad: '',
            precio: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        
        const newProducto = {
            categoria: this.state.categoria,
            nombreProducto: this.state.nombreProducto,
            cantidad: this.state.cantidad,
            precio: this.state.precio
        };
   
        registerProductos(newProducto).then(res => {
            this.props.history.push('/productos')
          })
        }

    render() {
     return (
        <div className="container">
                <NavbarProfile />
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Registrar Producto</h1>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria del producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="categoria"
                                    placeholder=""
                                    value={this.state.categoria}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombreProducto">Nombre del producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombreProducto"
                                    placeholder=""
                                    value={this.state.nombreProducto}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cantidad">Cantidad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cantidad"
                                    placeholder=""
                                    value={this.state.cantidad}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="precio"
                                    placeholder=""
                                    value={this.state.precio}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductoAdd;


