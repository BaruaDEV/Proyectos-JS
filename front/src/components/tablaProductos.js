import React from "react";

const TablaProductos = ({productos, onEdit, onDelete})=>{
    // Verifica si `productos` es un array antes de mapearlo
    console.log('Productos en la tabla:', productos);

    if (!Array.isArray(productos) || productos.length === 0) {
        return <div>No hay productos disponibles</div>;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto)=>(
                    <tr key={producto.id_productos} >
                        <td>{producto.id_productos} </td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td>
                            <button onClick={()=> onEdit(producto)}>Editar</button>
                            <button onClick={()=> onDelete(producto.id_productos)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TablaProductos;