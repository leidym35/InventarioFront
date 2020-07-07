import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login.component';
import Landing from './components/Landing.component';
import Profile from './components/Profile.component';
import Register from './components/Register.component';
import ProductosObtener from './components/ProductosGet.component';
import ProductoAdd from './components/ProductosAdd'

class App extends Component {
    render(){
      return (  
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing}/>
            <div className="container">
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/productos" component={ProductosObtener}/>
            <Route exact path="/addProducto" component={ProductoAdd}/>
  
            </div>
          </div>
        </Router>
      );
    }
}


export default App;
