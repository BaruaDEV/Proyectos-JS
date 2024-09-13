import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  // Variables para manejar su estado
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [error, setError] = useState('');
  const navegar = useNavigate();

  // manejar login
  const handleLogin = async (e) =>{
    e.preventDefault();

    try {
      const respuesta = await api.post('http://localhost:5000/api/auth/login',{
        email,
        password
      });
      console.log(respuesta.data);
      localStorage.setItem('token', respuesta.data.token); //almacena el token JWT en localStorage
      navegar('/dashboard'); // redirigir a pagina de inicio al loguearse exitosamente
    }catch (error){
      if(error.response){
        console.error('Error en el servidor:', error.response.data);
        setError(error.response.data.error || 'Error en el inicio de sesión');
    } else if (error.request){
      console.error('No se recibió respuesta del servidor:', error.request);
      setError('No se recibió respuesta del servidor. Intenta nuevamente.');
    } else {
      console.error('Error al configurar la petición:', error.message);
      setError('Error al configurar la petición. Intenta nuevamente.');
    }
  }
};

  return (
    <div>
      <h1>Bienvenido, inicia tu sesión aquí</h1>
      {error && <p style={{color:'red'}}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className='form-group'>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>Contraseña:</label>
          <input type='password' value={password} onChange={(e)=> setPasword(e.target.value)}/>
        </div>
        <button type='submit' className='sesion-btn'>Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <Link to='/'>Regístrate aquí</Link></p>
    </div>
  );
};


export default LoginPage;