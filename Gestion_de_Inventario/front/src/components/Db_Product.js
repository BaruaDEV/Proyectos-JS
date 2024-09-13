import React, {useState} from "react";
import axios from "axios";
// componentes: tabla y formulario de productos
import FormularioProductos from "./FormularioProductos";
import TablaProductos from "./tablaProductos";

// pagina incial del dashboard con tabla de productos
const DashboardProduct = ({ productos, onProductChange }) => {
    const [productoEditar, setProductoEditar] = useState(null);
  
    const handleEdit = (producto) => {
      setProductoEditar(producto);
    };
  
    const handleDelete = async (id_productos) => {
      console.log("ID del producto a eliminar:", id_productos);
      try {
        await axios.delete(`http://localhost:5000/api/productos/${id_productos}`);
        onProductChange(); // Actualiza la lista de productos en el padre
      }catch (error) {
        console.error('Error al eliminar producto: ', error);
      }
    };
  
    const handleSuccess = () => {
      onProductChange();
      setProductoEditar(null);
    };
  

    return (
      <div>
        <hr />
        <FormularioProductos productoInicial={productoEditar} onSuccess={handleSuccess}/>
        <TablaProductos productos={productos} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>
    );  
  };

  export default DashboardProduct;