import React, {useState} from "react";
import axios from "axios";

const FormularioPedido = ({ productosDisponibles, onSuccess, }) => {
    const [productos, setProductos] = useState([]);

    // comprobar si hay productos disponibles(si hay arrays disponibles)
    if (!Array.isArray(productosDisponibles)) {
        console.error('productosDisponibles no es un array:', productosDisponibles);
        return <div>No hay productos disponibles</div>;
      }

    const agregarProducto = (id_productos,cantidad) => {
        const productoExistente = productos.find((p) => p.id_productos === id_productos);

        if (productoExistente) {
            // Si el producto ya está en el pedido, actualizamos la cantidad
            setProductos(
                productos.map((p) =>
                    p.id_productos === id_productos ? { ...p, cantidad} : p
                )
            );
        } else {
            // Si el producto no está en el pedido, lo añadimos
            setProductos([...productos, {id_productos, cantidad}]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/pedidos', {productos}); // envia los productos al backend
            onSuccess(); // Recargar lista de pedidos si se crea correctamente
        } catch (error) {
            console.error('Error al crear pedido: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Agregar cantidad al producto</h3>
            {productosDisponibles.map((producto) => (
                <div key={producto.id_productos} className="req-group">
                    <span>{producto.id_productos} {producto.nombre} : </span>
                    <input
                        type="number"
                        placeholder="Cantidad"
                        onChange={(e) => agregarProducto(producto.id_productos, parseInt(e.target.value, 10))}
                    />
                </div>
            ))}
            <button type="submit" className="create-req">Crear Pedido</button>
        </form>
    );
};

export default FormularioPedido;