/* USUARIO ACTIVO */
const usuarioActivo =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

/* CONTROL DE ACCEO */

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

/* ELEMENTOS DE CABECERA */
const nombreUsuarioAdmin =
    document.querySelector("#nombre-usuario-admin");

const rolUsuarioAdmin =
    document.querySelector("#rol-usuario-admin");

const botonCerrarSesionAdmin =
    document.querySelector("#cerrar-sesion-admin");

/* INFORMACIÓN DE SESIÓN */

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

/* FORMULARIO */
const formulario =
    document.querySelector("#formulario-nuevo-producto");

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

/* MENSAJES DE ERROR */
const errorCodigo =
    document.querySelector("#error-codigo");

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

const mensajeProducto =
    document.querySelector("#mensaje-producto");

/* LIMPIAR ERRORES */
const limpiarErrores = () => {
    errorCodigo.textContent = "";
    errorNombre.textContent = "";
    errorPrecio.textContent = "";
    errorCategoria.textContent = "";
    errorStock.textContent = "";
    errorStockCritico.textContent = "";
    errorImagen.textContent = "";
    errorDescripcion.textContent = "";
    mensajeProducto.textContent = "";
};

/* VALIDAR FORMULARIO */
const validarFormulario = () => {
    let formularioValido =
        true;

    /* CÓDIGO */
    if (
        codigo.value.trim() === ""
    ) {
        errorCodigo.textContent =
            "Debe ingresar un código.";
        formularioValido =
            false;
    }

    /* NOMBRE */
    if (
        nombre.value.trim() === ""
    ) {
        errorNombre.textContent =
            "Debe ingresar un nombre.";
        formularioValido =
            false;
    }

    /* PRECIO */
    if (
        precio.value === "" ||
        Number(precio.value) <= 0
    ) {
        errorPrecio.textContent =
            "El precio debe ser mayor a 0.";

        formularioValido =
            false;
    }

    /* CATEGORÍA */
    if (
        categoria.value === ""
    ) {
        errorCategoria.textContent =
            "Debe seleccionar una categoría.";
        formularioValido =
            false;
    }

    /* STOCK */
    if (
        stock.value === "" ||
        Number(stock.value) < 0
    ) {
        errorStock.textContent =
            "Debe ingresar un stock válido.";
        formularioValido =
            false;
    }

    /* STOCK CRÍTICO */
    if (
        stockCritico.value === "" ||
        Number(stockCritico.value) < 0
    ) {
        errorStockCritico.textContent =
            "Debe ingresar un stock crítico válido.";
        formularioValido =
            false;
    }

    /* IMAGEN */
    if (
        imagen.value.trim() === ""
    ) {
        errorImagen.textContent =
            "Debe ingresar la ruta de una imagen.";
        formularioValido =
            false;
    }

    /* DESCRIPCIÓN */
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


/* GUARDAR PRODUCTO */
if (formulario) {
    formulario.addEventListener(
        "submit",
        (evento) => {
            evento.preventDefault();
            limpiarErrores();

            /* VALIDAR */
            const formularioValido =
                validarFormulario();

            if (!formularioValido) {
                return;
            }

            /* RECUPERAR PRODUCTOS */
            let productos =
                JSON.parse(
                    localStorage.getItem("productos")
                ) || [];

            /* NORMALIZAR CÓDIGO */
            const codigoIngresado =
                codigo.value
                    .trim()
                    .toUpperCase();

            /* BUSCAR DUPLICADO */
            const productoExistente =
                productos.find(
                    (producto) => {
                        return (
                            producto.codigo ===
                            codigoIngresado
                        );
                    }
                );
            if (productoExistente) {
                errorCodigo.textContent =
                    "Ya existe un producto con ese código.";
                return;
            }

            /* CREAR PRODUCTO */
            const nuevoProducto = {
                codigo:
                    codigoIngresado,
                nombre:
                    nombre.value.trim(),
                precio:
                    Number(precio.value),
                imagen:
                    imagen.value.trim(),
                descripcion:
                    descripcion.value.trim(),
                categoria:
                    categoria.value,
                stock:
                    Number(stock.value),
                stockCritico:
                    Number(stockCritico.value)
            };

            /* AGREGAR AL ARREGLO */
            productos.push(
                nuevoProducto
            );

            /* GUARDAR LOCALSTORAGE */
            localStorage.setItem(
                "productos",
                JSON.stringify(productos)
            );

            /* COMPROBAR QUE SE GUARDÓ */
            const productosGuardados =
                JSON.parse(
                    localStorage.getItem("productos")
                ) || [];
            const productoGuardado =
                productosGuardados.find(
                    (producto) => {
                        return (
                            producto.codigo ===
                            codigoIngresado
                        );
                    }
                );
            if (productoGuardado) {
                mensajeProducto.textContent =
                    "Producto creado correctamente.";
                formulario.reset();
                setTimeout(
                    () => {

                        window.location.href =
                            "productos.html";
                    },
                    1000
                );
            } else {
                mensajeProducto.textContent =
                    "No fue posible guardar el producto.";
            }
        }
    );
}

/* CERRAR SESIÓN */
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