import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class NavbarProfile extends Component{

    render(){
        const loginRegLink = (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addProducto" className="nav-link">
                  Agregar producto
                </Link>
              </li>
            </ul>
          )

          const productosLink = (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
            </ul>
          )

          return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample10"
                aria-controls="navbarsExample10"
                aria-expanded="false"
                aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? productosLink : loginRegLink}
        </div>
            </nav>
          )
        }
}

export default withRouter(NavbarProfile);