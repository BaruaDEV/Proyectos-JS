import React, { useState, useEffect} from 'react';
import axios from 'axios';
// componentes producto y pedido
import DashboardProduct from '../components/Db_Product';
import DashboardRequest from '../components/Db_Request';

// Pagina principal de Dashboard (padre)
const DashboardPage = () => {
  const [ productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  //fetch de productos en el componente padre

  const fetchProductos = async () => {
    try {
      const respuesta = await axios.get('http://localhost:5000/api/productos');
      console.log('Productos disponibles: ', respuesta.data);
      setProductos(respuesta.data);
    } catch (error){
      console.error('Error al obtener productos:', error);
    }
  };

  // fecth de pedidos en el componente padre

  const fetchPedidos = async () => {
    try {
      const respuesta = await axios.get('http://localhost:5000/api/pedidos');
      console.log('Pedidos recibidos:', respuesta.data);
      setPedidos(respuesta.data); // Actualiza los pedidos en el estado
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
    }
  };

  //efecto para cargar los productos inicialmente
  useEffect(()=>{
    fetchProductos();
    fetchPedidos();
  }, []);


  return (
    <div>
      <h1>Gestión de productos y pedidos</h1>
      <div>
        <h2>Productos</h2>
        <DashboardProduct productos={productos} onProductChange={fetchProductos}/>
      </div>
      <div>
        <hr/>
        <h2>Pedidos</h2>
        <DashboardRequest productos={productos} onPedidosChange={fetchPedidos} />
      </div>
    </div>
  );
};

export default DashboardPage;