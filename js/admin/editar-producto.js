/* ========================================= */
/* USUARIO ACTIVO */
/* ========================================= */

const usuarioActivo =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );


/* ========================================= */
/* CONTROL DE ACCESO */
/* ========================================= */

if (!usuarioActivo) {

    window.location.href =
        "../../pages/login.html";

}


if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario !== "Administrador"
) {

    window.location.href =
        "productos.html";

}


/* ========================================= */
/* ELEMENTOS DE CABECERA */
/* ========================================= */

const nombreUsuarioAdmin =
    document.querySelector("#nombre-usuario-admin");


const rolUsuarioAdmin =
    document.querySelector("#rol-usuario-admin");


const botonCerrarSesionAdmin =
    document.querySelector("#cerrar-sesion-admin");


/* ========================================= */
/* INFORMACIÓN DE SESIÓN */
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
/* ELEMENTOS DEL FORMULARIO */
/* ========================================= */

const formulario =
    document.querySelector("#formulario-editar-producto");


const codigo =
    document.querySelector("#codigo");


const nombre =
    document.querySelector("#nombre");


const precio =
    document.querySelector("#precio");


const categoria =
    document.querySelector("#categoria");


const stock =
    document.querySelector("#stock");


const stockCritico =
    document.querySelector("#stock-critico");


const imagen =
    document.querySelector("#imagen");


const descripcion =
    document.querySelector("#descripcion");


const mensajeProducto =
    document.querySelector("#mensaje-producto");


/* ========================================= */
/* ERRORES */
/* ========================================= */

const errorNombre =
    document.querySelector("#error-nombre");


const errorPrecio =
    document.querySelector("#error-precio");


const errorCategoria =
    document.querySelector("#error-categoria");


const errorStock =
    document.querySelector("#error-stock");


const errorStockCritico =
    document.querySelector("#error-stock-critico");


const errorImagen =
    document.querySelector("#error-imagen");


const errorDescripcion =
    document.querySelector("#error-descripcion");


/* ========================================= */
/* OBTENER CÓDIGO DESDE URL */
/* ========================================= */

const parametros =
    new URLSearchParams(
        window.location.search
    );


const codigoProducto =
    parametros.get("id");


/* ========================================= */
/* OBTENER PRODUCTOS */
/* ========================================= */

let productos =
    JSON.parse(
        localStorage.getItem("productos")
    ) || [];


/* ========================================= */
/* BUSCAR PRODUCTO */
/* ========================================= */

const producto =
    productos.find(
        (productoActual) => {

            return (
                productoActual.codigo ===
                codigoProducto
            );

        }
    );


/* ========================================= */
/* SI NO EXISTE */
/* ========================================= */

if (!producto) {

    mensajeProducto.textContent =
        "Producto no encontrado.";


    if (formulario) {

        formulario.style.display =
            "none";

    }

}


/* ========================================= */
/* CARGAR DATOS */
/* ========================================= */

if (producto) {

    codigo.value =
        producto.codigo;


    nombre.value =
        producto.nombre;


    precio.value =
        producto.precio;


    categoria.value =
        producto.categoria;


    stock.value =
        producto.stock;


    stockCritico.value =
        producto.stockCritico;


    imagen.value =
        producto.imagen;


    descripcion.value =
        producto.descripcion;

}


/* ========================================= */
/* LIMPIAR ERRORES */
/* ========================================= */

const limpiarErrores = () => {

    errorNombre.textContent = "";

    errorPrecio.textContent = "";

    errorCategoria.textContent = "";

    errorStock.textContent = "";

    errorStockCritico.textContent = "";

    errorImagen.textContent = "";

    errorDescripcion.textContent = "";

    mensajeProducto.textContent = "";

};


/* ========================================= */
/* VALIDAR */
/* ========================================= */

const validarFormulario = () => {

    let formularioValido =
        true;


    if (
        nombre.value.trim() === ""
    ) {

        errorNombre.textContent =
            "Debe ingresar un nombre.";

        formularioValido =
            false;

    }


    if (
        precio.value === "" ||
        Number(precio.value) <= 0
    ) {

        errorPrecio.textContent =
            "El precio debe ser mayor a 0.";

        formularioValido =
            false;

    }


    if (
        categoria.value === ""
    ) {

        errorCategoria.textContent =
            "Debe seleccionar una categoría.";

        formularioValido =
            false;

    }


    if (
        stock.value === "" ||
        Number(stock.value) < 0
    ) {

        errorStock.textContent =
            "Debe ingresar un stock válido.";

        formularioValido =
            false;

    }


    if (
        stockCritico.value === "" ||
        Number(stockCritico.value) < 0
    ) {

        errorStockCritico.textContent =
            "Debe ingresar un stock crítico válido.";

        formularioValido =
            false;

    }


    if (
        imagen.value.trim() === ""
    ) {

        errorImagen.textContent =
            "Debe ingresar la ruta de la imagen.";

        formularioValido =
            false;

    }


    if (
        descripcion.value.trim() === ""
    ) {

        errorDescripcion.textContent =
            "Debe ingresar una descripción.";

        formularioValido =
            false;

    }


    return formularioValido;

};


/* ========================================= */
/* GUARDAR CAMBIOS */
/* ========================================= */

if (
    formulario &&
    producto
) {

    formulario.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            limpiarErrores();


            const formularioValido =
                validarFormulario();


            if (!formularioValido) {

                return;

            }


            /* ========================================= */
            /* ACTUALIZAR PRODUCTO */
            /* ========================================= */

            producto.nombre =
                nombre.value.trim();


            producto.precio =
                Number(precio.value);


            producto.categoria =
                categoria.value;


            producto.stock =
                Number(stock.value);


            producto.stockCritico =
                Number(stockCritico.value);


            producto.imagen =
                imagen.value.trim();


            producto.descripcion =
                descripcion.value.trim();


            /* ========================================= */
            /* GUARDAR */
            /* ========================================= */

            localStorage.setItem(
                "productos",
                JSON.stringify(productos)
            );


            mensajeProducto.textContent =
                "Producto actualizado correctamente.";


            setTimeout(
                () => {

                    window.location.href =
                        "productos.html";

                },
                1000
            );

        }
    );

}


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