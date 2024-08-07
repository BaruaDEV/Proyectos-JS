/* funcion asincronica con async y await (Se usa cuando quieres que tu código
   asíncrono se vea y se comporte como si fuera sincrónico.)*/

async function obtenerTodo(){
        try{
            let respuesta = await axios.get('http://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/')
            let tabla = document.getElementById('tablaContenido');
            let salida ='';

            for(let elemento of respuesta.data){
                salida += `<tr>
                                <td>${elemento.id}</td>
                                <td>${elemento.marca}</td>
                                <td>${elemento.modelo}</td>
                                <td>${elemento.color}</td>
                                <td>${elemento.almacenamiento}</td>
                                <td>${elemento.procesador}</td>
                            </tr>`
            }
            tabla.innerHTML = salida;
        }catch(error){
            console.error('error al obtener datos', error)
        };
}

/* funcion asincrona con .then y .catch (Se usa cuando trabajas directamente con promesas.)*/

function consultarId(){
        axios.get('http://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/')
        .then(respuesta => {
            let consulta = document.getElementById('miInput').value;

            for(let item of respuesta.data){
                if(item.id.toString() === consulta){
                    document.getElementById('txtMarca').innerText = item.marca;
                    document.getElementById('txtModelo').innerText = item.modelo;
                    document.getElementById('txtColor').innerText = item.color;
                    document.getElementById('txtAlmacen').innerText = item.almacenamiento;
                    document.getElementById('txtProcesa').innerText = item.procesador;
                }
            }
        } )
        .catch(error => {
            console.error('error al obtener datos', error);
        });
}

/* Funcion para modificar datos (al ser un servidor de ejemplo saldrá un error que no hay permisos preflight) */
async function modificarDatos(identificador,marca,modelo,color,almacenamiento,procesador) {
    try{
        let respuesta = await fetch(`http://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${identificador}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        });
        let data = await respuesta.json();
        alert(`datos modificados con éxito: ${data}` )
    }catch(error){console.error('error al cambiar los datos')}
}

/* Funcion para eliminar datos con DELETE */
async function eliminarDatos(identificador){
    try{
        let respuesta = await fetch(`http://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${identificador}`, {
            method:'DELETE'
        });
        alert('los datos han sido eliminados con éxito')
        document.getElementById('txtMarca').value = ''; 
        document.getElementById('txtModelo').value = '';                         
        document.getElementById('txtColor').value = '';
        document.getElementById('txtAlmacen').value = '';
        document.getElementById('txtProcesa').value = '';

        obtenerTodo();

    }catch(error){alert('error al eliminar los datos', error)}
}

/* Funcion para agregar  datos con PUT */
async function agregarDatos(){
    try{
        let marca = document.getElementById('agregarMarca').value;
        let modelo = document.getElementById('agregarModelo').value;
        let color = document.getElementById('agregarColor').value;
        let almacenamiento = document.getElementById('agregarAlmacen').value;
        let procesador = document.getElementById('agregarProcesa').value;

        let respuesta = await fetch('http://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            obtenerTodo();
            alert(`se ha agregado un nuevo archivo: \nMarca: ${data.marca}\nModelo:${data.modelo}\nColor: ${data.color}\nAlmacenamiento: ${data.almacenamiento}\nProcesador: ${data.procesador}`)
        })
        .catch(error => { throw new Error('Error al agregar datos' + error)})
    }catch(error){
        console.error('error al agregar datos', error)
    }
}