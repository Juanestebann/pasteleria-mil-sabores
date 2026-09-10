// Obtiene el usuario activo guardado en localStorage y lo convierte de JSON a objeto JavaScript.
const usuarioActivo =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

// Si no existe un usuario activo, redirige al usuario a la página de login.
if (!usuarioActivo) {
    window.location.href =
        "../../pages/login.html";
}

// Si existe un usuario activo pero no es Administrador, lo redirige a productos.
if (
    usuarioActivo &&
    usuarioActivo.tipoUsuario !== "Administrador"
) {

    window.location.href =
        "productos.html";
}

// Busca el elemento donde se mostrará el nombre del administrador.
const nombreUsuarioAdmin =
    document.querySelector("#nombre-usuario-admin");

// Busca el elemento donde se mostrará el rol del administrador.
const rolUsuarioAdmin =
    document.querySelector("#rol-usuario-admin");

// Busca el botón utilizado para cerrar la sesión.
const botonCerrarSesionAdmin =
    document.querySelector("#cerrar-sesion-admin");

// Verifica que exista un usuario activo antes de mostrar sus datos.
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

// Busca el formulario utilizado para crear un nuevo producto.
const formulario =
    document.querySelector("#formulario-nuevo-producto");

// Busca el campo donde se ingresa el código del producto.
const codigo =
    document.querySelector("#codigo");

// Busca el campo donde se ingresa el nombre del producto.
const nombre =
    document.querySelector("#nombre");

// Busca el campo donde se ingresa el precio del producto.
const precio =
    document.querySelector("#precio");

// Busca el campo donde se selecciona la categoría.
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

// Busca el elemento donde se mostrará el error relacionado con el código.
const errorCodigo =
    document.querySelector("#error-codigo");

// Busca el elemento donde se mostrará el error relacionado con el nombre.
const errorNombre =
    document.querySelector("#error-nombre");

// Busca el elemento donde se mostrará el error relacionado con el precio.
const errorPrecio =
    document.querySelector("#error-precio");

// Busca el elemento donde se mostrará el error relacionado con la categoría.
const errorCategoria =
    document.querySelector("#error-categoria");

// Busca el elemento donde se mostrará el error relacionado con el stock.
const errorStock =
    document.querySelector("#error-stock");

// Busca el elemento donde se mostrará el error relacionado con el stock crítico.
const errorStockCritico =
    document.querySelector("#error-stock-critico");

// Busca el elemento donde se mostrará el error relacionado con la imagen.
const errorImagen =
    document.querySelector("#error-imagen");

// Busca el elemento donde se mostrará el error relacionado con la descripción.
const errorDescripcion =
    document.querySelector("#error-descripcion");

// Busca el elemento donde se mostrarán mensajes generales relacionados con el producto.
const mensajeProducto =
    document.querySelector("#mensaje-producto");

// Crea una función que limpia todos los mensajes de error anteriores.
const limpiarErrores = () => {

    // Limpia el mensaje de error del código.
    errorCodigo.textContent = "";

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

// Crea una función encargada de validar los campos del formulario.
const validarFormulario = () => {

    // Parte suponiendo que el formulario es válido.
    let formularioValido =
        true;

    // Verifica que el código no esté vacío ni contenga solamente espacios.
    if (
        codigo.value.trim() === ""
    ) {

        // Muestra un mensaje indicando que se debe ingresar un código.
        errorCodigo.textContent =
            "Debe ingresar un código.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que el nombre no esté vacío ni contenga solamente espacios.
    if (
        nombre.value.trim() === ""
    ) {

        // Muestra un mensaje indicando que se debe ingresar un nombre.
        errorNombre.textContent =
            "Debe ingresar un nombre.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que el precio no esté vacío y sea mayor que cero.
    if (
        precio.value === "" ||
        Number(precio.value) <= 0
    ) {

        // Muestra un mensaje de error si el precio no es válido.
        errorPrecio.textContent =
            "El precio debe ser mayor a 0.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que se haya seleccionado una categoría.
    if (
        categoria.value === ""
    ) {

        // Muestra un mensaje indicando que se debe seleccionar una categoría.
        errorCategoria.textContent =
            "Debe seleccionar una categoría.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que el stock no esté vacío y no sea negativo.
    if (
        stock.value === "" ||
        Number(stock.value) < 0
    ) {

        // Muestra un mensaje de error si el stock no es válido.
        errorStock.textContent =
            "Debe ingresar un stock válido.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que el stock crítico no esté vacío y no sea negativo.
    if (
        stockCritico.value === "" ||
        Number(stockCritico.value) < 0
    ) {

        // Muestra un mensaje de error si el stock crítico no es válido.
        errorStockCritico.textContent =
            "Debe ingresar un stock crítico válido.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que la ruta de la imagen no esté vacía.
    if (
        imagen.value.trim() === ""
    ) {

        // Muestra un mensaje indicando que se debe ingresar una imagen.
        errorImagen.textContent =
            "Debe ingresar la ruta de una imagen.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Verifica que la descripción no esté vacía.
    if (
        descripcion.value.trim() === ""
    ) {

        // Muestra un mensaje indicando que se debe ingresar una descripción.
        errorDescripcion.textContent =
            "Debe ingresar una descripción.";

        // Marca el formulario como inválido.
        formularioValido =
            false;
    }

    // Devuelve true si todos los campos son válidos o false si existe algún error.
    return formularioValido;
};

// Verifica que el formulario exista antes de trabajar con él.
if (formulario) {

    // Escucha el evento submit cuando el usuario intenta enviar el formulario.
    formulario.addEventListener(
        "submit",
        (evento) => {

            // Evita que el formulario recargue automáticamente la página.
            evento.preventDefault();

            // Limpia todos los mensajes de error anteriores.
            limpiarErrores();

            // Ejecuta la validación del formulario y guarda el resultado.
            const formularioValido =
                validarFormulario();

            // Verifica si el formulario contiene algún error.
            if (!formularioValido) {

                // Detiene la ejecución para evitar guardar datos incorrectos.
                return;
            }

            // Obtiene los productos guardados en localStorage o crea un arreglo vacío si no existen.
            let productos =
                JSON.parse(
                    localStorage.getItem("productos")
                ) || [];

            // Obtiene el código ingresado, elimina espacios y lo convierte a mayúsculas.
            const codigoIngresado =
                codigo.value
                    .trim()
                    .toUpperCase();

            // Busca si ya existe un producto que tenga el mismo código.
            const productoExistente =
                productos.find(
                    (producto) => {

                        // Compara el código de cada producto con el código ingresado.
                        return (
                            producto.codigo ===
                            codigoIngresado
                        );
                    }
                );

            // Verifica si se encontró un producto con el mismo código.
            if (productoExistente) {

                // Muestra un mensaje indicando que el código ya está siendo utilizado.
                errorCodigo.textContent =
                    "Ya existe un producto con ese código.";

                // Detiene la ejecución para evitar crear un producto duplicado.
                return;
            }

            // Crea un nuevo objeto con todos los datos ingresados en el formulario.
            const nuevoProducto = {

                // Guarda el código normalizado del nuevo producto.
                codigo:
                    codigoIngresado,

                // Guarda el nombre eliminando espacios innecesarios.
                nombre:
                    nombre.value.trim(),

                // Guarda el precio convirtiéndolo de texto a número.
                precio:
                    Number(precio.value),

                // Guarda la ruta de la imagen eliminando espacios innecesarios.
                imagen:
                    imagen.value.trim(),

                // Guarda la descripción eliminando espacios innecesarios.
                descripcion:
                    descripcion.value.trim(),

                // Guarda la categoría seleccionada.
                categoria:
                    categoria.value,

                // Guarda el stock convirtiéndolo de texto a número.
                stock:
                    Number(stock.value),

                // Guarda el stock crítico convirtiéndolo de texto a número.
                stockCritico:
                    Number(stockCritico.value)
            };

            // Agrega el nuevo producto al final del arreglo de productos.
            productos.push(
                nuevoProducto
            );

            // Guarda nuevamente el arreglo completo de productos en localStorage.
            localStorage.setItem(
                "productos",
                JSON.stringify(productos)
            );

            // Recupera nuevamente los productos desde localStorage para comprobar que se guardaron.
            const productosGuardados =
                JSON.parse(
                    localStorage.getItem("productos")
                ) || [];

            // Busca el producto recién creado dentro de los productos guardados.
            const productoGuardado =
                productosGuardados.find(
                    (producto) => {

                        // Compara el código guardado con el código del nuevo producto.
                        return (
                            producto.codigo ===
                            codigoIngresado
                        );
                    }
                );

            // Verifica si el producto fue encontrado después de guardarlo.
            if (productoGuardado) {

                // Muestra un mensaje indicando que el producto fue creado correctamente.
                mensajeProducto.textContent =
                    "Producto creado correctamente.";

                // Limpia todos los campos del formulario.
                formulario.reset();

                // Ejecuta una acción después de un segundo.
                setTimeout(
                    () => {

                        // Redirige al usuario hacia la página de productos.
                        window.location.href =
                            "productos.html";
                    },
                    1000
                );

            // Se ejecuta si el producto no fue encontrado después de intentar guardarlo.
            } else {

                // Muestra un mensaje indicando que ocurrió un problema al guardar.
                mensajeProducto.textContent =
                    "No fue posible guardar el producto.";
            }
        }
    );
}

// Verifica que exista el botón utilizado para cerrar sesión.
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