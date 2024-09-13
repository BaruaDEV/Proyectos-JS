import React, {useState, useEffect} from "react";
import axios from "axios";
// componentes: tabla y formulario de pedidos
import TablaPedidos from "./TablaPedidos";
import FormularioPedido from "./FormularioPedido";

// pagina inicial del dashboard con tabla de pedidos
const DashboardRequest = ({ productos, onPedidosChange}) => {
    const [pedidos, setPedidos] = useState([]);
  
    useEffect (() => {
      const fetchPedidos = async () => {
        try {
          const respuesta = await axios.get('http://localhost:5000/api/pedidos');
          setPedidos(respuesta.data);
        } catch (error) {
          console.error('Error al obtener pedidos: ', error);
        }
      };

      fetchPedidos();
    }, [onPedidosChange]); // dependencia en caso de que onPedidosChange cambie


    const handleComplete = async (id_productos) => {
      try {
        await axios.put(`http://localhost:5000/api/pedidos/${id_productos}`, {estado: 'completado'});
        onPedidosChange(); // actualiza productos luego de completar pedido
        // re fecth de pedidos
        const respuesta = await axios.get('http://localhost:5000/api/pedidos');
        setPedidos(respuesta.data);
      }catch (error){
        console.error('Error al completar pedido: ', error);
      }
    };
  
    const handleCancel = async (id_pedido) => {
      console.log(`Cancelar pedido con ID: ${id_pedido}`); // Agregado para depuración;
      
      try {
        await axios.put(`http://localhost:5000/api/pedidos/${id_pedido}`, {estado: 'cancelado'});
        onPedidosChange(); // actualiza productos luego de cancelar pedido
        // re fecth de pedidos
        const respuesta = await axios.get('http://localhost:5000/api/pedidos');
        setPedidos(respuesta.data);
      } catch (error){
        console.error('Error al cancelar pedido: ', error);
      }
    };
  
    return (
      <div>
        <FormularioPedido productosDisponibles={productos} onSuccess={onPedidosChange} />
        <TablaPedidos pedidos={pedidos} onComplete={handleComplete} onCancel={handleCancel} />
      </div>
    );
  };

  
  export default DashboardRequest;