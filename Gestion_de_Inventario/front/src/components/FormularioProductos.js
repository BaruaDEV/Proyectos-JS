import React, { useState, useEffect} from "react";
import axios from "axios";

// Componente para editar los productos (agregar,modificar, eliminar)

const FormularioProductos = ({ productoInicial = {}, onSuccess}) =>{
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        cantidad: '',
        id_productos: '',
        ...productoInicial
    });

    // UseEffect para actualizar el estado cuando se pasa un nuevo productoInicial

    useEffect(()=>{
        if (productoInicial && Object.keys(productoInicial).length > 0) {
            setProducto({
                nombre:productoInicial.nombre || '',
                descripcion:productoInicial.descripcion || '',
                precio: productoInicial.precio || '',
                cantidad: productoInicial.cantidad || '',
                id_productos: productoInicial.id_productos || ''
            });
        } else {
            // si no hay productoInicial resetear el formulario
            resetForm();
        }
        
    }, [productoInicial]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(producto.id_productos) {
                // Editar producto
                await axios.put(`http://localhost:5000/api/productos/${producto.id_productos}`, producto);
            } else {
                // Agregar producto
                await axios.post('http://localhost:5000/api/productos', producto);
            }
            onSuccess(); //Ejecuta esta funcion si tiene éxito lo anterior
            resetForm(); // Limpiar el formulario despues de agregar o editar
        }catch (error){
            console.error('Error al guardar producto: ', error);
        }
    };

    // funcion para resetear el formulario a sus valores iniciales
    const resetForm = () => {
        setProducto({
            nombre:'',
            descripcion:'',
            precio:'',
            cantidad:'',
            id_productos:'' // reseteamos ID para estar en modo agregar
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-group"
                type="text"
                name="nombre"
                value={producto.nombre || ''}
                onChange={handleChange}
                placeholder="nombre del producto"
                required
            />
            <input
                className="form-group"
                type="text"
                name="descripcion"
                value={producto.descripcion || ''}
                onChange={handleChange}
                placeholder="descripción del producto"
                required
            />
            <input
                className="form-group"
                type="number"
                name="precio"
                value={producto.precio || ''}
                onChange={handleChange}
                placeholder="precio del producto"
                required
            />
            <input
                className="form-group"
                type="number"
                name="cantidad"
                value={producto.cantidad || ''}
                onChange={handleChange}
                placeholder="cantidad del producto"
                required
            />
            <button type="submit" className="add-product">
                {producto.id_productos ? 'Editar Producto' : 'Agregar Producto'}
            </button>
            {producto.id_productos && (
                <button type="button" onClick={resetForm} className="reset-form">
                    Limpiar formulario
                </button>
            )}
        </form>
    );
};

export default FormularioProductos;