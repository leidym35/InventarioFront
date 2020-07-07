import React, { Component } from 'react';
import { login } from './FunctionUsers';
import Navbar from './Navbar.component';

class Login extends Component {
  constructor() {
    super()
    this.state = {
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

    const user = {
      nombre: this.state.nombre,
      contraseña: this.state.contraseña
    }

    login(user).then(res => {
      if (res) {
        console.log(res)
        this.props.history.push('/profile')
      }

    })
  }

  render() {
    return (
      <div className="container">
         <Navbar/> 
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal"> Ingresar</h1>
              <div className="form-group">
                <label htmlFor="nombre">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingresar usuario"
                  value={this.state.nombre}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contraseña">contraseña</label>
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
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;