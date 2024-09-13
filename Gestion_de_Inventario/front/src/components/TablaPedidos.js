import React from "react";

const TablaPedidos = ({pedidos, onComplete, onCancel, }) => {
    if (!Array.isArray(pedidos)){
        return <p>No hay pedidos disponibles o el formato de datos es incorrecto.</p>;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.length > 0 ? pedidos.map((pedido)=> (
                    <tr key={pedido.id_pedido}>
                        <td>{pedido.id_pedido}</td>
                        <td>{new Date(pedido.fecha).toLocaleString()}</td>
                        <td>{Number(pedido.total).toFixed(2)}</td>
                        <td>{pedido.estado}</td>
                        <td>
                            {pedido.estado === 'pendiente' && (
                                <>
                                    <button onClick={()=>  onComplete(pedido.id_pedido) }>Completar</button>
                                    <button onClick={()=>  onCancel(pedido.id_pedido) }>Cancelar</button>
                                </>
                            )}
                        </td>
                    </tr>
                )) : <tr><td colSpan="5"> No Hay pedidos disponibles</td> </tr>}
            </tbody>
        </table>
    );
};

export default TablaPedidos;