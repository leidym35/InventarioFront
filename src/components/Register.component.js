import React, { Component } from 'react';
import { register } from './FunctionUsers';
import Navbar from './Navbar.component';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      admin: '',
      nombre: '',
      contraseña: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      admin: this.state.admin,
      nombre: this.state.nombre,
      contraseña: this.state.contraseña
    }

    register(newUser).then(res => {
      this.props.history.push('/login')
    })
  }

  render() {
    return (
      <div className="container">
         <Navbar/> 
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Registrarse</h1>
              <div className="form-group">
                <label htmlFor="admin">nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingresar usuario"
                  value={this.state.nombre}
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="contraseña">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="contraseña"
                  placeholder="contraseña"
                  value={this.state.contraseña}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block">
                Listo
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;