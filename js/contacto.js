// =========================================
// OBTENER ELEMENTOS
// =========================================

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("error-nombre");
const errorCorreo = document.getElementById("error-correo");
const errorAsunto = document.getElementById("error-asunto");
const errorMensaje = document.getElementById("error-mensaje");

const mensajeExito = document.getElementById("mensaje-exito");


// =========================================
// ENVIAR FORMULARIO
// =========================================

formulario.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();


    // =========================================
    // LIMPIAR MENSAJES ANTERIORES
    // =========================================

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";

    mensajeExito.textContent = "";


    // =========================================
    // OBTENER VALORES
    // =========================================

    const nombreIngresado = nombre.value.trim();

    const correoIngresado =
        correo.value.trim().toLowerCase();

    const asuntoIngresado = asunto.value.trim();

    const mensajeIngresado = mensaje.value.trim();


    let formularioValido = true;


    // =========================================
    // VALIDAR NOMBRE
    // =========================================

    if (nombreIngresado === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        formularioValido = false;

    } else if (nombreIngresado.length < 3) {

        errorNombre.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        formularioValido = false;

    } else if (nombreIngresado.length > 100) {

        errorNombre.textContent =
            "El nombre no puede superar los 100 caracteres.";

        formularioValido = false;
    }


    // =========================================
    // VALIDAR CORREO
    // =========================================

    if (correoIngresado === "") {

        errorCorreo.textContent =
            "El correo es obligatorio.";

        formularioValido = false;

    } else if (correoIngresado.length > 100) {

        errorCorreo.textContent =
            "El correo no puede superar los 100 caracteres.";

        formularioValido = false;

    } else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        errorCorreo.textContent =
            "Ingrese un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        formularioValido = false;
    }


    // =========================================
    // VALIDAR ASUNTO
    // =========================================

    if (asuntoIngresado.length > 100) {

        errorAsunto.textContent =
            "El asunto no puede superar los 100 caracteres.";

        formularioValido = false;
    }


    // =========================================
    // VALIDAR MENSAJE
    // =========================================

    if (mensajeIngresado === "") {

        errorMensaje.textContent =
            "El mensaje es obligatorio.";

        formularioValido = false;

    } else if (mensajeIngresado.length < 10) {

        errorMensaje.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        formularioValido = false;

    } else if (mensajeIngresado.length > 500) {

        errorMensaje.textContent =
            "El mensaje no puede superar los 500 caracteres.";

        formularioValido = false;
    }


    // =========================================
    // DETENER SI EXISTEN ERRORES
    // =========================================

    if (!formularioValido) {

        return;
    }


    // =========================================
    // MENSAJE EXITOSO
    // =========================================

    mensajeExito.textContent =
        "Mensaje enviado correctamente. Gracias por contactarnos.";


    // Limpiar formulario
    formulario.reset();

});