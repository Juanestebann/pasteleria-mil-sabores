// Obtiene el usuario activo guardado en localStorage y lo convierte de JSON a objeto JavaScript.
const usuarioActivoAdmin =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );


// Verifica si no existe un usuario con sesión iniciada.
if (!usuarioActivoAdmin) {

    // Si no hay una sesión activa, redirige al usuario hacia la página de login.
    window.location.href =
        "../pages/login.html";

}


// Obtiene el perfil del usuario activo revisando distintas propiedades posibles.
const perfilUsuarioAdmin =
    usuarioActivoAdmin
        ? (
            usuarioActivoAdmin.tipoUsuario ||
            usuarioActivoAdmin.perfil ||
            usuarioActivoAdmin.rol ||
            "Cliente"
        )
        : "";


// Verifica si el usuario tiene permiso para entrar al área de administración.
if (
    usuarioActivoAdmin &&
    perfilUsuarioAdmin !== "Administrador" &&
    perfilUsuarioAdmin !== "Vendedor"
) {

    // Muestra una alerta indicando que el usuario no tiene permisos suficientes.
    alert(
        "No tienes permisos para acceder al área de administración."
    );


    // Redirige al usuario hacia la página principal.
    window.location.href =
        "../index.html";

}


// Busca el elemento donde se mostrará el nombre del usuario.
const nombreUsuarioAdmin =
    document.getElementById(
        "nombre-usuario-admin"
    );


// Busca el elemento donde se mostrará el perfil del usuario.
const perfilUsuarioTexto =
    document.getElementById(
        "perfil-usuario-admin"
    );


// Busca el enlace que permite acceder a la administración de usuarios.
const enlaceUsuarios =
    document.getElementById(
        "enlace-usuarios"
    );


// Busca la tarjeta relacionada con la administración de usuarios.
const tarjetaUsuarios =
    document.getElementById(
        "tarjeta-usuarios"
    );


// Busca el elemento donde se mostrará el mensaje de bienvenida.
const mensajeBienvenida =
    document.getElementById(
        "mensaje-bienvenida-admin"
    );


// Busca el botón utilizado para cerrar la sesión.
const botonCerrarSesionAdmin =
    document.getElementById(
        "cerrar-sesion-admin"
    );


// Verifica que exista un usuario activo antes de mostrar su información.
if (usuarioActivoAdmin) {

    // Muestra el nombre, nombre completo o correo del usuario según cuál exista.
    nombreUsuarioAdmin.textContent =
        usuarioActivoAdmin.nombre ||
        usuarioActivoAdmin.nombreCompleto ||
        usuarioActivoAdmin.correo;


    // Muestra el perfil obtenido anteriormente.
    perfilUsuarioTexto.textContent =
        perfilUsuarioAdmin;

}


// Verifica si el usuario activo tiene el perfil Vendedor.
if (perfilUsuarioAdmin === "Vendedor") {

    // Indica que el vendedor no puede administrar usuarios.

    // Verifica que exista el enlace de administración de usuarios.
    if (enlaceUsuarios) {

        // Oculta el enlace de administración de usuarios para el Vendedor.
        enlaceUsuarios.style.display =
            "none";

    }


    // Verifica que exista la tarjeta de administración de usuarios.
    if (tarjetaUsuarios) {

        // Oculta la tarjeta de administración de usuarios para el Vendedor.
        tarjetaUsuarios.style.display =
            "none";

    }


    // Muestra un mensaje indicando las funciones disponibles para el Vendedor.
    mensajeBienvenida.textContent =
        "Como Vendedor puedes consultar los productos y revisar las alertas de stock crítico.";

}


// Verifica si el usuario activo tiene el perfil Administrador.
if (perfilUsuarioAdmin === "Administrador") {

    // Muestra un mensaje indicando las funciones disponibles para el Administrador.
    mensajeBienvenida.textContent =
        "Como Administrador puedes gestionar productos y usuarios desde este panel.";

}


// Verifica que exista el botón para cerrar sesión.
if (botonCerrarSesionAdmin) {

    // Escucha cuando el usuario hace clic en el botón de cerrar sesión.
    botonCerrarSesionAdmin.addEventListener(
        "click",
        function () {

            // Elimina del localStorage la información del usuario activo.
            localStorage.removeItem(
                "usuarioActivo"
            );


            // Redirige al usuario hacia la página de login.
            window.location.href =
                "../pages/login.html";

        }
    );

}