/* ========================================= */
/* CONTROL DE ACCESO */
/* ========================================= */

const usuarioActivo =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );


if (!usuarioActivo) {

    window.location.href =
        "../../pages/login.html";

}


if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario !== "Administrador" &&
    usuarioActivo.tipoUsuario !== "Vendedor"
) {

    window.location.href =
        "../../index.html";

}


/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const cuerpoTablaAdmin =
    document.querySelector(
        "#cuerpo-tabla-productos"
    );


const totalProductosAdmin =
    document.querySelector(
        "#total-productos"
    );


const totalStockCriticoAdmin =
    document.querySelector(
        "#total-stock-critico"
    );


const buscadorAdmin =
    document.querySelector(
        "#buscar-producto-admin"
    );


const filtroCategoriaAdmin =
    document.querySelector(
        "#filtro-categoria-admin"
    );


const botonNuevoAdmin =
    document.querySelector(
        "#boton-nuevo-producto"
    );


const enlaceUsuariosAdmin =
    document.querySelector(
        "#enlace-usuarios"
    );


const columnaAccionesAdmin =
    document.querySelector(
        ".columna-acciones"
    );


const mensajeSinProductosAdmin =
    document.querySelector(
        "#mensaje-sin-productos"
    );


const nombreUsuarioAdmin =
    document.querySelector(
        "#nombre-usuario-admin"
    );


const rolUsuarioAdmin =
    document.querySelector(
        "#rol-usuario-admin"
    );


const botonCerrarSesionAdmin =
    document.querySelector(
        "#cerrar-sesion-admin"
    );


/* ========================================= */
/* INFORMACIÓN DEL USUARIO */
/* ========================================= */

if (usuarioActivo) {

    if (nombreUsuarioAdmin) {

        nombreUsuarioAdmin.textContent =
            usuarioActivo.nombre;

    }


    if (rolUsuarioAdmin) {

        rolUsuarioAdmin.textContent =
            usuarioActivo.tipoUsuario;

    }

}


/* ========================================= */
/* PERMISOS POR ROL */
/* ========================================= */

if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario === "Vendedor"
) {

    if (botonNuevoAdmin) {

        botonNuevoAdmin.style.display =
            "none";

    }


    if (enlaceUsuariosAdmin) {

        enlaceUsuariosAdmin.style.display =
            "none";

    }


    if (columnaAccionesAdmin) {

        columnaAccionesAdmin.style.display =
            "none";

    }

}


/* ========================================= */
/* OBTENER PRODUCTOS */
/* ========================================= */

let productosAdmin =
    JSON.parse(
        localStorage.getItem("productos")
    );


if (!productosAdmin) {

    productosAdmin =
        datosProductos;


    localStorage.setItem(
        "productos",
        JSON.stringify(productosAdmin)
    );

}


/* ========================================= */
/* NOMBRES DE CATEGORÍAS */
/* ========================================= */

const nombresCategoriasAdmin = {

    cuadradas:
        "Tortas Cuadradas",

    circulares:
        "Tortas Circulares",

    individuales:
        "Postres Individuales",

    "sin-azucar":
        "Sin Azúcar",

    tradicional:
        "Pastelería Tradicional",

    "sin-gluten":
        "Sin Gluten",

    veganos:
        "Veganos",

    especiales:
        "Tortas Especiales"

};


/* ========================================= */
/* ACTUALIZAR RESUMEN */
/* ========================================= */

const actualizarResumenAdmin = () => {

    totalProductosAdmin.textContent =
        productosAdmin.length;


    let cantidadCriticos =
        0;


    productosAdmin.forEach(
        (producto) => {

            if (
                producto.stockCritico !== null &&
                producto.stockCritico !== undefined &&
                producto.stock <= producto.stockCritico
            ) {

                cantidadCriticos =
                    cantidadCriticos + 1;

            }

        }
    );


    totalStockCriticoAdmin.textContent =
        cantidadCriticos;

};


/* ========================================= */
/* ELIMINAR PRODUCTO */
/* ========================================= */

const eliminarProductoAdmin = (
    codigoProducto,
    nombreProducto
) => {

    const confirmarEliminacion =
        confirm(
            "¿Deseas eliminar el producto " +
            nombreProducto +
            "?"
        );


    if (!confirmarEliminacion) {

        return;

    }


    productosAdmin =
        productosAdmin.filter(
            (producto) => {

                return (
                    producto.codigo !==
                    codigoProducto
                );

            }
        );


    localStorage.setItem(
        "productos",
        JSON.stringify(productosAdmin)
    );


    mostrarProductosAdmin();

};


/* ========================================= */
/* MOSTRAR PRODUCTOS */
/* ========================================= */

const mostrarProductosAdmin = () => {

    cuerpoTablaAdmin.innerHTML =
        "";


    const textoBusqueda =
        buscadorAdmin.value
            .trim()
            .toLowerCase();


    const categoriaSeleccionada =
        filtroCategoriaAdmin.value;


    let cantidadMostrada =
        0;


    productosAdmin.forEach(
        (producto) => {

            const nombreProducto =
                producto.nombre
                    .toLowerCase();


            const codigoProducto =
                producto.codigo
                    .toLowerCase();


            const coincideBusqueda =
                nombreProducto.includes(
                    textoBusqueda
                ) ||
                codigoProducto.includes(
                    textoBusqueda
                );


            const coincideCategoria =
                categoriaSeleccionada ===
                    "todos" ||
                producto.categoria ===
                    categoriaSeleccionada;


            if (
                coincideBusqueda &&
                coincideCategoria
            ) {

                cantidadMostrada =
                    cantidadMostrada + 1;


                /* ========================================= */
                /* FILA */
                /* ========================================= */

                const fila =
                    document.createElement(
                        "tr"
                    );


                /* ========================================= */
                /* IMAGEN */
                /* ========================================= */

                const celdaImagen =
                    document.createElement(
                        "td"
                    );


                const imagen =
                    document.createElement(
                        "img"
                    );


                imagen.src =
                    producto.imagen.replace(
                        "../img/",
                        "../../img/"
                    );


                imagen.alt =
                    producto.nombre;


                imagen.classList.add(
                    "imagen-producto-admin"
                );


                celdaImagen.appendChild(
                    imagen
                );


                /* ========================================= */
                /* CÓDIGO */
                /* ========================================= */

                const celdaCodigo =
                    document.createElement(
                        "td"
                    );


                celdaCodigo.textContent =
                    producto.codigo;


                /* ========================================= */
                /* NOMBRE */
                /* ========================================= */

                const celdaNombre =
                    document.createElement(
                        "td"
                    );


                celdaNombre.textContent =
                    producto.nombre;


                /* ========================================= */
                /* CATEGORÍA */
                /* ========================================= */

                const celdaCategoria =
                    document.createElement(
                        "td"
                    );


                celdaCategoria.textContent =
                    nombresCategoriasAdmin[
                        producto.categoria
                    ];


                /* ========================================= */
                /* PRECIO */
                /* ========================================= */

                const celdaPrecio =
                    document.createElement(
                        "td"
                    );


                celdaPrecio.textContent =
                    "$" +
                    producto.precio
                        .toLocaleString(
                            "es-CL"
                        );


                /* ========================================= */
                /* STOCK */
                /* ========================================= */

                const celdaStock =
                    document.createElement(
                        "td"
                    );


                celdaStock.textContent =
                    producto.stock;


                /* ========================================= */
                /* STOCK CRÍTICO */
                /* ========================================= */

                const celdaStockCritico =
                    document.createElement(
                        "td"
                    );


                if (
                    producto.stockCritico === null ||
                    producto.stockCritico === undefined
                ) {

                    celdaStockCritico.textContent =
                        "Sin definir";

                } else {

                    celdaStockCritico.textContent =
                        producto.stockCritico;

                }


                /* ========================================= */
                /* ESTADO */
                /* ========================================= */

                const celdaEstado =
                    document.createElement(
                        "td"
                    );


                const estado =
                    document.createElement(
                        "span"
                    );


                estado.classList.add(
                    "estado-stock"
                );


                if (
                    producto.stockCritico !== null &&
                    producto.stockCritico !== undefined &&
                    producto.stock <= producto.stockCritico
                ) {

                    estado.textContent =
                        "Stock crítico";


                    estado.classList.add(
                        "stock-critico"
                    );

                } else {

                    estado.textContent =
                        "Disponible";


                    estado.classList.add(
                        "stock-normal"
                    );

                }


                celdaEstado.appendChild(
                    estado
                );


                /* ========================================= */
                /* ACCIONES */
                /* ========================================= */

                const celdaAcciones =
                    document.createElement(
                        "td"
                    );


                celdaAcciones.classList.add(
                    "celda-acciones"
                );


                if (
                    usuarioActivo.tipoUsuario ===
                    "Administrador"
                ) {

                    /* ============================== */
                    /* EDITAR */
                    /* ============================== */

                    const botonEditar =
                        document.createElement(
                            "a"
                        );


                    botonEditar.textContent =
                        "Editar";


                    botonEditar.href =
                        "editar-producto.html?id=" +
                        producto.codigo;


                    botonEditar.classList.add(
                        "boton-editar-producto"
                    );


                    /* ============================== */
                    /* ELIMINAR */
                    /* ============================== */

                    const botonEliminar =
                        document.createElement(
                            "button"
                        );


                    botonEliminar.textContent =
                        "Eliminar";


                    botonEliminar.type =
                        "button";


                    botonEliminar.classList.add(
                        "boton-eliminar-producto"
                    );


                    botonEliminar.addEventListener(
                        "click",
                        () => {

                            eliminarProductoAdmin(
                                producto.codigo,
                                producto.nombre
                            );

                        }
                    );


                    /* ============================== */
                    /* AGREGAR BOTONES */
                    /* ============================== */

                    celdaAcciones.appendChild(
                        botonEditar
                    );


                    celdaAcciones.appendChild(
                        botonEliminar
                    );

                } else {

                    celdaAcciones.style.display =
                        "none";

                }


                /* ========================================= */
                /* ARMAR FILA */
                /* ========================================= */

                fila.appendChild(
                    celdaImagen
                );


                fila.appendChild(
                    celdaCodigo
                );


                fila.appendChild(
                    celdaNombre
                );


                fila.appendChild(
                    celdaCategoria
                );


                fila.appendChild(
                    celdaPrecio
                );


                fila.appendChild(
                    celdaStock
                );


                fila.appendChild(
                    celdaStockCritico
                );


                fila.appendChild(
                    celdaEstado
                );


                fila.appendChild(
                    celdaAcciones
                );


                cuerpoTablaAdmin.appendChild(
                    fila
                );

            }

        }
    );


    /* ========================================= */
    /* SIN PRODUCTOS */
    /* ========================================= */

    if (cantidadMostrada === 0) {

        mensajeSinProductosAdmin.style.display =
            "block";


        mensajeSinProductosAdmin.textContent =
            "No existen productos registrados.";

    } else {

        mensajeSinProductosAdmin.style.display =
            "none";


        mensajeSinProductosAdmin.textContent =
            "";

    }


    actualizarResumenAdmin();

};


/* ========================================= */
/* BUSCADOR */
/* ========================================= */

buscadorAdmin.addEventListener(
    "input",
    mostrarProductosAdmin
);


/* ========================================= */
/* FILTRO */
/* ========================================= */

filtroCategoriaAdmin.addEventListener(
    "change",
    mostrarProductosAdmin
);


/* ========================================= */
/* CERRAR SESIÓN */
/* ========================================= */

if (botonCerrarSesionAdmin) {

    botonCerrarSesionAdmin.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "usuarioActivo"
            );


            window.location.href =
                "../../pages/login.html";

        }
    );

}

mostrarProductosAdmin();