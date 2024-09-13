import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function HomePage() {
  // variables para manejar su estado
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [rol, setRol] = useState('');
  const [error, setError] = useState('');
  const navegar = useNavigate();

  //Manejar registro
  const handleHomePage = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await api.post('http://localhost:5000/api/auth/register', {
        nombre,
        email,
        password,
        rol
      });
      console.log(respuesta.data);
      navegar('/login'); // Redirigir al login una vez te hayas registrado
    }catch (error){
      setError(error.response.data.error || 'Error en el registro');
    }
  };

  return (
  <div>
    <h1>Bienvenido al Sistema de Gestión de Inventario</h1>
    <hr/>
    {error && <p style={{color: 'red'}}>{error}</p>}
    <form onSubmit={handleHomePage}>
      <div className='form-group'>
        <label>Nombre:</label>
        <input type='text' value={nombre} onChange={(e)=> setNombre(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>E-mail:</label>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>Contraseña:</label>
        <input type='password' value={password} onChange={(e)=> setPasword(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>Rol:</label>
        <input type='text' value={rol} onChange={(e)=> setRol(e.target.value)} />
      </div>
      <button type='submit' className='register-btn'>Register</button>
    </form>
    <p>¿Ya tienes cuenta?<Link to='/login'>Inicia sesión aquí</Link></p>
  </div>
  );
};

export default HomePage;