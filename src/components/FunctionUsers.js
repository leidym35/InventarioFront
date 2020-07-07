import axios from 'axios';

export const register = newUser => {
    return axios
    .post('http://localhost:3000/signup',{
        admin: newUser.admin,
        nombre: newUser.nombre,
        contraseña: newUser.contraseña
    }).then(res=>{
        alert("registrado")
    })
}

export const login = user =>{
    return axios
    .post('http://localhost:3000/login',{
        nombre: user.nombre,
        contraseña: user.contraseña
    }).then(res=>{
        localStorage.setItem('token',res.data.token)
        console.log("respuesta",res.data.token)
        return res.data.token
    })
    .catch(err=>{
        console.log(err)
    })
}