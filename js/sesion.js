// =========================================
// OBTENER ELEMENTOS
// =========================================

const sesionHeader = document.getElementById("sesion-header");

const usuarioActivo =
    JSON.parse(localStorage.getItem("usuarioActivo"));


// =========================================
// MOSTRAR USUARIO ACTIVO
// =========================================

if (sesionHeader && usuarioActivo) {

    // Limpiar el botón "Iniciar Sesión"
    sesionHeader.innerHTML = "";


    // Crear nombre del usuario
    const nombreUsuario = document.createElement("span");

    nombreUsuario.classList.add("nombre-usuario");

    nombreUsuario.textContent =
        usuarioActivo.nombre ||
        usuarioActivo.nombreCompleto ||
        usuarioActivo.correo;


    // Crear botón cerrar sesión
    const botonCerrarSesion = document.createElement("button");

    botonCerrarSesion.classList.add("boton-CerrarSesion");

    botonCerrarSesion.textContent = "Cerrar Sesión";


    // Agregar elementos al header
    sesionHeader.appendChild(nombreUsuario);

    sesionHeader.appendChild(botonCerrarSesion);


    // =========================================
    // CERRAR SESIÓN
    // =========================================

    botonCerrarSesion.addEventListener("click", function () {

        localStorage.removeItem("usuarioActivo");

        location.reload();

    });

}