import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import NavbarProfile from './NavbarProfile.component'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      nombre: '',
      contraseña: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.token
    const decoded = jwt_decode(token)
    this.setState({
      nombre: decoded.nombre,
      contraseña: decoded.contraseña
    })
  }

  render() {
    return (
      <div className="container">
        <NavbarProfile/> 
        <center >
          <h3>Inventario de Productos</h3>
        </center>
        
       </div>
    )
  }
}

export default Profile;