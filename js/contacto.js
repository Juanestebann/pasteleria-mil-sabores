// Busca el formulario principal de contacto en el HTML.
const formulario = document.getElementById("formulario");

// Busca el campo donde se ingresa el nombre.
const nombre = document.getElementById("nombre");

// Busca el campo donde se ingresa el correo.
const correo = document.getElementById("correo");

// Busca el campo donde se ingresa el asunto.
const asunto = document.getElementById("asunto");

// Busca el campo donde se ingresa el mensaje.
const mensaje = document.getElementById("mensaje");

// Busca el elemento donde se mostrará el error del nombre.
const errorNombre = document.getElementById("error-nombre");

// Busca el elemento donde se mostrará el error del correo.
const errorCorreo = document.getElementById("error-correo");

// Busca el elemento donde se mostrará el error del asunto.
const errorAsunto = document.getElementById("error-asunto");

// Busca el elemento donde se mostrará el error del mensaje.
const errorMensaje = document.getElementById("error-mensaje");

// Busca el elemento donde se mostrará el mensaje de envío exitoso.
const mensajeExito = document.getElementById("mensaje-exito");


// Escucha cuando el usuario intenta enviar el formulario.
formulario.addEventListener("submit", function (evento) {

    // Evita que la página se recargue al enviar el formulario.
    evento.preventDefault();


    // Limpia el mensaje de error anterior del nombre.
    errorNombre.textContent = "";

    // Limpia el mensaje de error anterior del correo.
    errorCorreo.textContent = "";

    // Limpia el mensaje de error anterior del asunto.
    errorAsunto.textContent = "";

    // Limpia el mensaje de error anterior del mensaje.
    errorMensaje.textContent = "";

    // Limpia el mensaje de éxito anterior.
    mensajeExito.textContent = "";


    // Obtiene el nombre ingresado y elimina espacios al inicio y al final.
    const nombreIngresado = nombre.value.trim();

    // Obtiene el correo, elimina espacios y lo convierte a minúsculas.
    const correoIngresado =
        correo.value.trim().toLowerCase();

    // Obtiene el asunto ingresado y elimina espacios innecesarios.
    const asuntoIngresado = asunto.value.trim();

    // Obtiene el mensaje ingresado y elimina espacios innecesarios.
    const mensajeIngresado = mensaje.value.trim();


    // Parte suponiendo que todos los datos del formulario son válidos.
    let formularioValido = true;


    // Verifica si el nombre está vacío.
    if (nombreIngresado === "") {

        // Muestra un mensaje indicando que el nombre es obligatorio.
        errorNombre.textContent =
            "El nombre es obligatorio.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si el nombre tiene menos de tres caracteres.
    } else if (nombreIngresado.length < 3) {

        // Muestra un mensaje indicando el mínimo de caracteres permitido.
        errorNombre.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si el nombre supera los cien caracteres.
    } else if (nombreIngresado.length > 100) {

        // Muestra un mensaje indicando el máximo de caracteres permitido.
        errorNombre.textContent =
            "El nombre no puede superar los 100 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;
    }


    // Verifica si el correo está vacío.
    if (correoIngresado === "") {

        // Muestra un mensaje indicando que el correo es obligatorio.
        errorCorreo.textContent =
            "El correo es obligatorio.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si el correo supera los cien caracteres.
    } else if (correoIngresado.length > 100) {

        // Muestra un mensaje indicando el máximo de caracteres permitido.
        errorCorreo.textContent =
            "El correo no puede superar los 100 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica que el correo termine con alguno de los dominios permitidos.
    } else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        // Muestra un mensaje indicando cuáles son los dominios permitidos.
        errorCorreo.textContent =
            "Ingrese un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        // Marca el formulario como inválido.
        formularioValido = false;
    }


    // Verifica si el asunto supera los cien caracteres.
    if (asuntoIngresado.length > 100) {

        // Muestra un mensaje indicando el máximo de caracteres permitido.
        errorAsunto.textContent =
            "El asunto no puede superar los 100 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;
    }


    // Verifica si el mensaje está vacío.
    if (mensajeIngresado === "") {

        // Muestra un mensaje indicando que el mensaje es obligatorio.
        errorMensaje.textContent =
            "El mensaje es obligatorio.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si el mensaje tiene menos de diez caracteres.
    } else if (mensajeIngresado.length < 10) {

        // Muestra un mensaje indicando el mínimo de caracteres permitido.
        errorMensaje.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si el mensaje supera los quinientos caracteres.
    } else if (mensajeIngresado.length > 500) {

        // Muestra un mensaje indicando el máximo de caracteres permitido.
        errorMensaje.textContent =
            "El mensaje no puede superar los 500 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;
    }


    // Verifica si se encontró algún error en las validaciones.
    if (!formularioValido) {

        // Detiene el envío del formulario cuando existen errores.
        return;
    }


    // Muestra un mensaje indicando que el formulario se envió correctamente.
    mensajeExito.textContent =
        "Mensaje enviado correctamente. Gracias por contactarnos.";


    // Limpia todos los campos del formulario después del envío.
    formulario.reset();

});