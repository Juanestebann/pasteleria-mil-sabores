// Obtiene el usuario activo guardado en localStorage y lo convierte de JSON a objeto JavaScript.
const usuarioActivo =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

// Si no existe un usuario activo, redirige al login.
if (!usuarioActivo) {

    window.location.href =
        "../../pages/login.html";

}

// Si el usuario activo no es Administrador, lo redirige a la página de productos.
if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario !== "Administrador"
) {

    window.location.href =
        "productos.html";

}

// Busca el elemento HTML donde se mostrará el nombre del administrador.
const nombreUsuarioAdmin =
    document.querySelector("#nombre-usuario-admin");

// Busca el elemento HTML donde se mostrará el rol del administrador.
const rolUsuarioAdmin =
    document.querySelector("#rol-usuario-admin");

// Busca el botón que permite cerrar la sesión.
const botonCerrarSesionAdmin =
    document.querySelector("#cerrar-sesion-admin");

// Verifica que exista un usuario activo.
if (usuarioActivo) {

    // Verifica que exista el elemento donde se mostrará el nombre.
    if (nombreUsuarioAdmin) {

        // Muestra el nombre del usuario activo en la página.
        nombreUsuarioAdmin.textContent =
            usuarioActivo.nombre;

    }

    // Verifica que exista el elemento donde se mostrará el rol.
    if (rolUsuarioAdmin) {

        // Muestra el tipo de usuario o rol en la página.
        rolUsuarioAdmin.textContent =
            usuarioActivo.tipoUsuario;

    }

}

// Busca el formulario utilizado para editar el producto.
const formulario =
    document.querySelector("#formulario-editar-producto");

// Busca el campo donde se muestra el código del producto.
const codigo =
    document.querySelector("#codigo");

// Busca el campo donde se ingresa el nombre del producto.
const nombre =
    document.querySelector("#nombre");

// Busca el campo donde se ingresa el precio del producto.
const precio =
    document.querySelector("#precio");

// Busca el campo donde se selecciona la categoría del producto.
const categoria =
    document.querySelector("#categoria");

// Busca el campo donde se ingresa el stock disponible.
const stock =
    document.querySelector("#stock");

// Busca el campo donde se ingresa el stock crítico.
const stockCritico =
    document.querySelector("#stock-critico");

// Busca el campo donde se ingresa la ruta de la imagen.
const imagen =
    document.querySelector("#imagen");

// Busca el campo donde se ingresa la descripción del producto.
const descripcion =
    document.querySelector("#descripcion");

// Busca el elemento donde se mostrarán mensajes relacionados con el producto.
const mensajeProducto =
    document.querySelector("#mensaje-producto");

// Busca el elemento donde se mostrará el error del nombre.
const errorNombre =
    document.querySelector("#error-nombre");

// Busca el elemento donde se mostrará el error del precio.
const errorPrecio =
    document.querySelector("#error-precio");

// Busca el elemento donde se mostrará el error de la categoría.
const errorCategoria =
    document.querySelector("#error-categoria");

// Busca el elemento donde se mostrará el error del stock.
const errorStock =
    document.querySelector("#error-stock");

// Busca el elemento donde se mostrará el error del stock crítico.
const errorStockCritico =
    document.querySelector("#error-stock-critico");

// Busca el elemento donde se mostrará el error de la imagen.
const errorImagen =
    document.querySelector("#error-imagen");

// Busca el elemento donde se mostrará el error de la descripción.
const errorDescripcion =
    document.querySelector("#error-descripcion");

// Obtiene los parámetros que vienen en la URL de la página.
const parametros =
    new URLSearchParams(
        window.location.search
    );

// Obtiene específicamente el valor del parámetro llamado id.
const codigoProducto =
    parametros.get("id");

// Obtiene los productos guardados en localStorage o crea un arreglo vacío si no existen.
let productos =
    JSON.parse(
        localStorage.getItem("productos")
    ) || [];

// Busca dentro del arreglo el producto cuyo código coincide con el id recibido por la URL.
const producto =
    productos.find(
        (productoActual) => {

            // Devuelve verdadero cuando encuentra un producto con el mismo código.
            return (
                productoActual.codigo ===
                codigoProducto
            );

        }
    );

// Verifica si el producto no fue encontrado.
if (!producto) {

    // Muestra un mensaje indicando que el producto no existe.
    mensajeProducto.textContent =
        "Producto no encontrado.";

    // Verifica que el formulario exista antes de intentar ocultarlo.
    if (formulario) {

        // Oculta el formulario porque no existe un producto para editar.
        formulario.style.display =
            "none";

    }

}

// Verifica que el producto haya sido encontrado.
if (producto) {

    // Carga el código actual del producto en el formulario.
    codigo.value =
        producto.codigo;

    // Carga el nombre actual del producto en el formulario.
    nombre.value =
        producto.nombre;

    // Carga el precio actual del producto en el formulario.
    precio.value =
        producto.precio;

    // Carga la categoría actual del producto en el formulario.
    categoria.value =
        producto.categoria;

    // Carga el stock actual del producto en el formulario.
    stock.value =
        producto.stock;

    // Carga el stock crítico actual del producto en el formulario.
    stockCritico.value =
        producto.stockCritico;

    // Carga la ruta de la imagen actual del producto.
    imagen.value =
        producto.imagen;

    // Carga la descripción actual del producto.
    descripcion.value =
        producto.descripcion;

}

// Crea una función que elimina los mensajes de error anteriores.
const limpiarErrores = () => {

    // Limpia el mensaje de error del nombre.
    errorNombre.textContent = "";

    // Limpia el mensaje de error del precio.
    errorPrecio.textContent = "";

    // Limpia el mensaje de error de la categoría.
    errorCategoria.textContent = "";

    // Limpia el mensaje de error del stock.
    errorStock.textContent = "";

    // Limpia el mensaje de error del stock crítico.
    errorStockCritico.textContent = "";

    // Limpia el mensaje de error de la imagen.
    errorImagen.textContent = "";

    // Limpia el mensaje de error de la descripción.
    errorDescripcion.textContent = "";

    // Limpia el mensaje general del producto.
    mensajeProducto.textContent = "";

};

// Crea una función que valida los datos ingresados en el formulario.
const validarFormulario = () => {

    // Parte suponiendo que todos los datos del formulario son válidos.
    let formularioValido =
        true;

    // Verifica que el nombre no esté vacío ni contenga solamente espacios.
    if (
        nombre.value.trim() === ""
    ) {

        // Muestra un mensaje de error para el nombre.
        errorNombre.textContent =
            "Debe ingresar un nombre.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Verifica que el precio no esté vacío y sea mayor a cero.
    if (
        precio.value === "" ||
        Number(precio.value) <= 0
    ) {

        // Muestra un mensaje de error para el precio.
        errorPrecio.textContent =
            "El precio debe ser mayor a 0.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Verifica que el usuario haya seleccionado una categoría.
    if (
        categoria.value === ""
    ) {

        // Muestra un mensaje de error para la categoría.
        errorCategoria.textContent =
            "Debe seleccionar una categoría.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Verifica que el stock no esté vacío y no sea negativo.
    if (
        stock.value === "" ||
        Number(stock.value) < 0
    ) {

        // Muestra un mensaje de error para el stock.
        errorStock.textContent =
            "Debe ingresar un stock válido.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Verifica que el stock crítico no esté vacío y no sea negativo.
    if (
        stockCritico.value === "" ||
        Number(stockCritico.value) < 0
    ) {

        // Muestra un mensaje de error para el stock crítico.
        errorStockCritico.textContent =
            "Debe ingresar un stock crítico válido.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Verifica que la ruta de la imagen no esté vacía.
    if (
        imagen.value.trim() === ""
    ) {

        // Muestra un mensaje de error para la imagen.
        errorImagen.textContent =
            "Debe ingresar la ruta de la imagen.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Verifica que la descripción no esté vacía.
    if (
        descripcion.value.trim() === ""
    ) {

        // Muestra un mensaje de error para la descripción.
        errorDescripcion.textContent =
            "Debe ingresar una descripción.";

        // Indica que el formulario contiene un error.
        formularioValido =
            false;

    }

    // Devuelve true si todo está correcto o false si existe algún error.
    return formularioValido;

};

// Verifica que exista el formulario y que el producto haya sido encontrado.
if (
    formulario &&
    producto
) {

    // Escucha cuando el usuario intenta enviar el formulario.
    formulario.addEventListener(
        "submit",
        (evento) => {

            // Evita que el formulario recargue automáticamente la página.
            evento.preventDefault();

            // Limpia todos los mensajes de error anteriores.
            limpiarErrores();

            // Ejecuta las validaciones y guarda el resultado.
            const formularioValido =
                validarFormulario();

            // Verifica si el formulario contiene algún error.
            if (!formularioValido) {

                // Detiene la ejecución para evitar guardar datos incorrectos.
                return;

            }

            // Actualiza el nombre del producto eliminando espacios innecesarios.
            producto.nombre =
                nombre.value.trim();

            // Actualiza el precio y lo convierte de texto a número.
            producto.precio =
                Number(precio.value);

            // Actualiza la categoría del producto.
            producto.categoria =
                categoria.value;

            // Actualiza el stock y lo convierte de texto a número.
            producto.stock =
                Number(stock.value);

            // Actualiza el stock crítico y lo convierte de texto a número.
            producto.stockCritico =
                Number(stockCritico.value);

            // Actualiza la ruta de la imagen eliminando espacios innecesarios.
            producto.imagen =
                imagen.value.trim();

            // Actualiza la descripción eliminando espacios innecesarios.
            producto.descripcion =
                descripcion.value.trim();

            // Guarda nuevamente el arreglo de productos en localStorage.
            localStorage.setItem(
                "productos",
                JSON.stringify(productos)
            );

            // Muestra un mensaje indicando que el producto fue actualizado.
            mensajeProducto.textContent =
                "Producto actualizado correctamente.";
                
            // Ejecuta una acción después de un segundo.
            setTimeout(
                () => {
                    // Redirige al usuario nuevamente a la página de productos.
                    window.location.href =
                        "productos.html";

                },
                1000
            );

        }
    );
}

// Verifica que exista el botón para cerrar sesión.
if (botonCerrarSesionAdmin) {

    // Escucha cuando el usuario hace clic en el botón de cerrar sesión.
    botonCerrarSesionAdmin.addEventListener(
        "click",
        () => {
            // Elimina del localStorage la información del usuario activo.
            localStorage.removeItem(
                "usuarioActivo"
            );
            // Redirige al usuario hacia la página de login.
            window.location.href =
                "../../pages/login.html";
        }
    );

}