// Obtiene el usuario activo guardado en localStorage y lo convierte de JSON a objeto JavaScript.
const usuarioActivo =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );


// Verifica si no existe un usuario con sesión iniciada.
if (!usuarioActivo) {

    // Si no existe una sesión activa, redirige al usuario hacia el login.
    window.location.href =
        "../../pages/login.html";

}


// Verifica que el usuario sea Administrador o Vendedor para permitirle ingresar a esta página.
if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario !== "Administrador" &&
    usuarioActivo.tipoUsuario !== "Vendedor"
) {

    // Si el usuario no tiene ninguno de los roles permitidos, lo redirige al inicio.
    window.location.href =
        "../../index.html";

}


// Busca el cuerpo de la tabla donde se mostrarán los productos.
const cuerpoTablaAdmin =
    document.querySelector(
        "#cuerpo-tabla-productos"
    );


// Busca el elemento donde se mostrará la cantidad total de productos.
const totalProductosAdmin =
    document.querySelector(
        "#total-productos"
    );


// Busca el elemento donde se mostrará la cantidad de productos con stock crítico.
const totalStockCriticoAdmin =
    document.querySelector(
        "#total-stock-critico"
    );


// Busca el campo utilizado para buscar productos.
const buscadorAdmin =
    document.querySelector(
        "#buscar-producto-admin"
    );


// Busca el selector utilizado para filtrar productos por categoría.
const filtroCategoriaAdmin =
    document.querySelector(
        "#filtro-categoria-admin"
    );


// Busca el botón utilizado para crear un nuevo producto.
const botonNuevoAdmin =
    document.querySelector(
        "#boton-nuevo-producto"
    );


// Busca el enlace que permite acceder a la administración de usuarios.
const enlaceUsuariosAdmin =
    document.querySelector(
        "#enlace-usuarios"
    );


// Busca la columna de acciones de la tabla.
const columnaAccionesAdmin =
    document.querySelector(
        ".columna-acciones"
    );


// Busca el elemento donde se mostrará un mensaje cuando no existan productos.
const mensajeSinProductosAdmin =
    document.querySelector(
        "#mensaje-sin-productos"
    );


// Busca el elemento donde se mostrará el nombre del usuario activo.
const nombreUsuarioAdmin =
    document.querySelector(
        "#nombre-usuario-admin"
    );


// Busca el elemento donde se mostrará el rol del usuario activo.
const rolUsuarioAdmin =
    document.querySelector(
        "#rol-usuario-admin"
    );


// Busca el botón utilizado para cerrar la sesión.
const botonCerrarSesionAdmin =
    document.querySelector(
        "#cerrar-sesion-admin"
    );


// Verifica que exista un usuario activo antes de mostrar su información.
if (usuarioActivo) {

    // Verifica que exista el elemento donde se muestra el nombre.
    if (nombreUsuarioAdmin) {

        // Muestra el nombre del usuario que inició sesión.
        nombreUsuarioAdmin.textContent =
            usuarioActivo.nombre;

    }


    // Verifica que exista el elemento donde se muestra el rol.
    if (rolUsuarioAdmin) {

        // Muestra el tipo de usuario que inició sesión.
        rolUsuarioAdmin.textContent =
            usuarioActivo.tipoUsuario;

    }

}


// Verifica si el usuario que inició sesión tiene el rol Vendedor.
if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario === "Vendedor"
) {

    // Verifica que exista el botón para crear productos.
    if (botonNuevoAdmin) {

        // Oculta el botón de crear nuevos productos para el Vendedor.
        botonNuevoAdmin.style.display =
            "none";

    }


    // Verifica que exista el enlace de administración de usuarios.
    if (enlaceUsuariosAdmin) {

        // Oculta el acceso a la administración de usuarios para el Vendedor.
        enlaceUsuariosAdmin.style.display =
            "none";

    }


    // Verifica que exista la columna de acciones de la tabla.
    if (columnaAccionesAdmin) {

        // Oculta la columna de acciones para el Vendedor.
        columnaAccionesAdmin.style.display =
            "none";

    }

}


// Obtiene desde localStorage el arreglo de productos y lo convierte desde JSON.
let productosAdmin =
    JSON.parse(
        localStorage.getItem("productos")
    );


// Verifica si todavía no existen productos guardados en localStorage.
if (!productosAdmin) {

    // Utiliza los productos iniciales contenidos en datosProductos.
    productosAdmin =
        datosProductos;


    // Guarda los productos iniciales dentro de localStorage.
    localStorage.setItem(
        "productos",
        JSON.stringify(productosAdmin)
    );

}


// Crea un objeto que relaciona los códigos de categorías con nombres más fáciles de mostrar.
const nombresCategoriasAdmin = {

    // Define el nombre visible para la categoría cuadradas.
    cuadradas:
        "Tortas Cuadradas",

    // Define el nombre visible para la categoría circulares.
    circulares:
        "Tortas Circulares",

    // Define el nombre visible para la categoría individuales.
    individuales:
        "Postres Individuales",

    // Define el nombre visible para la categoría sin-azucar.
    "sin-azucar":
        "Sin Azúcar",

    // Define el nombre visible para la categoría tradicional.
    tradicional:
        "Pastelería Tradicional",

    // Define el nombre visible para la categoría sin-gluten.
    "sin-gluten":
        "Sin Gluten",

    // Define el nombre visible para la categoría veganos.
    veganos:
        "Veganos",

    // Define el nombre visible para la categoría especiales.
    especiales:
        "Tortas Especiales"

};


// Crea una función encargada de actualizar el resumen de productos.
const actualizarResumenAdmin = () => {

    // Muestra la cantidad total de elementos existentes en el arreglo de productos.
    totalProductosAdmin.textContent =
        productosAdmin.length;


    // Crea un contador que comenzará en cero para los productos con stock crítico.
    let cantidadCriticos =
        0;


    // Recorre todos los productos almacenados.
    productosAdmin.forEach(
        (producto) => {

            // Verifica que exista stock crítico y que el stock actual sea menor o igual al stock crítico.
            if (
                producto.stockCritico !== null &&
                producto.stockCritico !== undefined &&
                producto.stock <= producto.stockCritico
            ) {

                // Aumenta en uno el contador de productos con stock crítico.
                cantidadCriticos =
                    cantidadCriticos + 1;

            }

        }
    );


    // Muestra en la página la cantidad total de productos con stock crítico.
    totalStockCriticoAdmin.textContent =
        cantidadCriticos;

};


// Crea una función para eliminar un producto utilizando su código y nombre.
const eliminarProductoAdmin = (
    codigoProducto,
    nombreProducto
) => {

    // Muestra una ventana de confirmación antes de eliminar el producto.
    const confirmarEliminacion =
        confirm(
            "¿Deseas eliminar el producto " +
            nombreProducto +
            "?"
        );


    // Verifica si el usuario canceló la eliminación.
    if (!confirmarEliminacion) {

        // Detiene la función para evitar eliminar el producto.
        return;

    }


    // Crea un nuevo arreglo dejando fuera el producto que se desea eliminar.
    productosAdmin =
        productosAdmin.filter(
            (producto) => {

                // Conserva todos los productos cuyo código sea diferente al producto eliminado.
                return (
                    producto.codigo !==
                    codigoProducto
                );

            }
        );


    // Guarda nuevamente el arreglo actualizado de productos en localStorage.
    localStorage.setItem(
        "productos",
        JSON.stringify(productosAdmin)
    );


    // Vuelve a mostrar los productos para actualizar la tabla.
    mostrarProductosAdmin();

};


// Crea una función encargada de mostrar los productos dentro de la tabla.
const mostrarProductosAdmin = () => {

    // Limpia el contenido anterior de la tabla antes de volver a crear las filas.
    cuerpoTablaAdmin.innerHTML =
        "";


    // Obtiene el texto escrito en el buscador, elimina espacios y lo convierte a minúsculas.
    const textoBusqueda =
        buscadorAdmin.value
            .trim()
            .toLowerCase();


    // Obtiene la categoría seleccionada actualmente en el filtro.
    const categoriaSeleccionada =
        filtroCategoriaAdmin.value;


    // Crea un contador para saber cuántos productos se están mostrando.
    let cantidadMostrada =
        0;


    // Recorre todos los productos disponibles.
    productosAdmin.forEach(
        (producto) => {

            // Obtiene el nombre del producto y lo convierte a minúsculas para facilitar la búsqueda.
            const nombreProducto =
                producto.nombre
                    .toLowerCase();


            // Obtiene el código del producto y lo convierte a minúsculas para facilitar la búsqueda.
            const codigoProducto =
                producto.codigo
                    .toLowerCase();


            // Comprueba si el nombre o código del producto contiene el texto buscado.
            const coincideBusqueda =
                nombreProducto.includes(
                    textoBusqueda
                ) ||
                codigoProducto.includes(
                    textoBusqueda
                );


            // Comprueba si está seleccionado "todos" o si la categoría del producto coincide con el filtro.
            const coincideCategoria =
                categoriaSeleccionada ===
                    "todos" ||
                producto.categoria ===
                    categoriaSeleccionada;


            // Verifica que el producto coincida tanto con la búsqueda como con la categoría.
            if (
                coincideBusqueda &&
                coincideCategoria
            ) {

                // Aumenta el contador de productos que se muestran en la tabla.
                cantidadMostrada =
                    cantidadMostrada + 1;


                // Crea una nueva fila de tabla para representar el producto.
                const fila =
                    document.createElement(
                        "tr"
                    );


                // Crea una celda para contener la imagen del producto.
                const celdaImagen =
                    document.createElement(
                        "td"
                    );


                // Crea dinámicamente un elemento HTML de tipo imagen.
                const imagen =
                    document.createElement(
                        "img"
                    );


                // Obtiene la ruta de la imagen y adapta su ubicación para esta página.
                imagen.src =
                    producto.imagen.replace(
                        "../img/",
                        "../../img/"
                    );


                // Coloca el nombre del producto como texto alternativo de la imagen.
                imagen.alt =
                    producto.nombre;


                // Agrega una clase CSS a la imagen para aplicarle estilos.
                imagen.classList.add(
                    "imagen-producto-admin"
                );


                // Agrega la imagen dentro de su celda.
                celdaImagen.appendChild(
                    imagen
                );


                // Crea una celda para mostrar el código del producto.
                const celdaCodigo =
                    document.createElement(
                        "td"
                    );


                // Muestra el código del producto dentro de la celda.
                celdaCodigo.textContent =
                    producto.codigo;


                // Crea una celda para mostrar el nombre del producto.
                const celdaNombre =
                    document.createElement(
                        "td"
                    );


                // Muestra el nombre del producto dentro de la celda.
                celdaNombre.textContent =
                    producto.nombre;


                // Crea una celda para mostrar la categoría del producto.
                const celdaCategoria =
                    document.createElement(
                        "td"
                    );


                // Busca en nombresCategoriasAdmin el nombre visible correspondiente a la categoría.
                celdaCategoria.textContent =
                    nombresCategoriasAdmin[
                        producto.categoria
                    ];


                // Crea una celda para mostrar el precio del producto.
                const celdaPrecio =
                    document.createElement(
                        "td"
                    );


                // Muestra el precio agregando el signo peso y usando formato numérico chileno.
                celdaPrecio.textContent =
                    "$" +
                    producto.precio
                        .toLocaleString(
                            "es-CL"
                        );


                // Crea una celda para mostrar el stock actual.
                const celdaStock =
                    document.createElement(
                        "td"
                    );


                // Muestra la cantidad de stock disponible.
                celdaStock.textContent =
                    producto.stock;


                // Crea una celda para mostrar el stock crítico del producto.
                const celdaStockCritico =
                    document.createElement(
                        "td"
                    );


                // Comprueba si el producto no tiene definido un stock crítico.
                if (
                    producto.stockCritico === null ||
                    producto.stockCritico === undefined
                ) {

                    // Muestra un texto indicando que el stock crítico no está definido.
                    celdaStockCritico.textContent =
                        "Sin definir";

                } else {

                    // Si existe, muestra el valor del stock crítico.
                    celdaStockCritico.textContent =
                        producto.stockCritico;

                }


                // Crea una celda para mostrar el estado del stock.
                const celdaEstado =
                    document.createElement(
                        "td"
                    );


                // Crea un elemento span para mostrar visualmente el estado.
                const estado =
                    document.createElement(
                        "span"
                    );


                // Agrega la clase general utilizada para los estados de stock.
                estado.classList.add(
                    "estado-stock"
                );


                // Verifica si existe un stock crítico y si el stock actual llegó o bajó de ese valor.
                if (
                    producto.stockCritico !== null &&
                    producto.stockCritico !== undefined &&
                    producto.stock <= producto.stockCritico
                ) {

                    // Muestra que el producto se encuentra en stock crítico.
                    estado.textContent =
                        "Stock crítico";


                    // Agrega una clase CSS específica para representar el stock crítico.
                    estado.classList.add(
                        "stock-critico"
                    );

                } else {

                    // Muestra que el producto se encuentra disponible.
                    estado.textContent =
                        "Disponible";


                    // Agrega una clase CSS específica para representar un stock normal.
                    estado.classList.add(
                        "stock-normal"
                    );

                }


                // Agrega el elemento que muestra el estado dentro de su celda.
                celdaEstado.appendChild(
                    estado
                );


                // Crea una celda destinada a contener los botones de acciones.
                const celdaAcciones =
                    document.createElement(
                        "td"
                    );


                // Agrega una clase CSS a la celda de acciones.
                celdaAcciones.classList.add(
                    "celda-acciones"
                );


                // Comprueba que el usuario sea Administrador antes de crear las acciones.
                if (
                    usuarioActivo.tipoUsuario ===
                    "Administrador"
                ) {

                    // Crea un enlace que funcionará como botón para editar el producto.
                    const botonEditar =
                        document.createElement(
                            "a"
                        );

                    // Coloca el texto Editar dentro del enlace.
                    botonEditar.textContent =
                        "Editar";

                    // Crea la dirección hacia editar-producto enviando el código mediante el parámetro id.
                    botonEditar.href =
                        "editar-producto.html?id=" +
                        producto.codigo;

                    // Agrega una clase CSS al botón de editar.
                    botonEditar.classList.add(
                        "boton-editar-producto"
                    );

                    // Crea un botón para eliminar el producto.
                    const botonEliminar =
                        document.createElement(
                            "button"
                        );

                    // Coloca el texto Eliminar dentro del botón.
                    botonEliminar.textContent =
                        "Eliminar";

                    // Define el botón como type button para evitar comportamientos de envío de formulario.
                    botonEliminar.type =
                        "button";

                    // Agrega una clase CSS al botón de eliminar.
                    botonEliminar.classList.add(
                        "boton-eliminar-producto"
                    );

                    // Escucha cuando el administrador hace clic en el botón Eliminar.
                    botonEliminar.addEventListener(
                        "click",
                        () => {

                            // Ejecuta la función de eliminación enviando el código y nombre del producto.
                            eliminarProductoAdmin(
                                producto.codigo,
                                producto.nombre
                            );

                        }
                    );


                    // Agrega el botón Editar dentro de la celda de acciones.
                    celdaAcciones.appendChild(
                        botonEditar
                    );

                    // Agrega el botón Eliminar dentro de la celda de acciones.
                    celdaAcciones.appendChild(
                        botonEliminar
                    );

                } else {

                    // Oculta la celda de acciones cuando el usuario no es Administrador.
                    celdaAcciones.style.display =
                        "none";

                }


                // Agrega la celda de imagen dentro de la fila.
                fila.appendChild(
                    celdaImagen
                );

                // Agrega la celda del código dentro de la fila.
                fila.appendChild(
                    celdaCodigo
                );

                // Agrega la celda del nombre dentro de la fila.
                fila.appendChild(
                    celdaNombre
                );

                // Agrega la celda de categoría dentro de la fila.
                fila.appendChild(
                    celdaCategoria
                );

                // Agrega la celda de precio dentro de la fila.
                fila.appendChild(
                    celdaPrecio
                );

                // Agrega la celda de stock dentro de la fila.
                fila.appendChild(
                    celdaStock
                );

                // Agrega la celda de stock crítico dentro de la fila.
                fila.appendChild(
                    celdaStockCritico
                );

                // Agrega la celda de estado dentro de la fila.
                fila.appendChild(
                    celdaEstado
                );

                // Agrega la celda de acciones dentro de la fila.
                fila.appendChild(
                    celdaAcciones
                );

                // Agrega la fila completa dentro del cuerpo de la tabla.
                cuerpoTablaAdmin.appendChild(
                    fila
                );

            }

        }
    );

    // Comprueba si después de aplicar búsqueda y filtros no se mostró ningún producto.
    if (cantidadMostrada === 0) {

        // Hace visible el elemento utilizado para mostrar el mensaje.
        mensajeSinProductosAdmin.style.display =
            "block";

        // Muestra un mensaje indicando que no existen productos registrados.
        mensajeSinProductosAdmin.textContent =
            "No existen productos registrados.";

    } else {

        // Oculta el mensaje cuando existe al menos un producto para mostrar.
        mensajeSinProductosAdmin.style.display =
            "none";

        // Limpia el contenido del mensaje.
        mensajeSinProductosAdmin.textContent =
            "";
            
    }

    // Actualiza los contadores del resumen después de mostrar los productos.
    actualizarResumenAdmin();

};

// Escucha cada cambio que realiza el usuario al escribir en el buscador.
buscadorAdmin.addEventListener(
    "input",
    mostrarProductosAdmin
);

// Escucha cada cambio realizado en el selector de categorías.
filtroCategoriaAdmin.addEventListener(
    "change",
    mostrarProductosAdmin
);

// Verifica que exista el botón utilizado para cerrar la sesión.
if (botonCerrarSesionAdmin) {

    // Escucha cuando el usuario hace clic en el botón de cerrar sesión.
    botonCerrarSesionAdmin.addEventListener(
        "click",
        () => {

            // Elimina la información del usuario activo guardada en localStorage.
            localStorage.removeItem(
                "usuarioActivo"
            );

            // Redirige al usuario hacia la página de login.
            window.location.href =
                "../../pages/login.html";

        }
    );

}
// Ejecuta la función al cargar el archivo para mostrar inicialmente todos los productos.
mostrarProductosAdmin();