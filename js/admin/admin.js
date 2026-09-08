// =========================================
// OBTENER USUARIO ACTIVO
// =========================================

const usuarioActivoAdmin =
    JSON.parse(
        localStorage.getItem("usuarioActivo")
    );


// =========================================
// VALIDAR SESIÓN
// =========================================

if (!usuarioActivoAdmin) {

    window.location.href =
        "../pages/login.html";

}


// =========================================
// OBTENER PERFIL
// =========================================

const perfilUsuarioAdmin =
    usuarioActivoAdmin
        ? (
            usuarioActivoAdmin.tipoUsuario ||
            usuarioActivoAdmin.perfil ||
            usuarioActivoAdmin.rol ||
            "Cliente"
        )
        : "";


// =========================================
// VALIDAR ACCESO A ADMINISTRACIÓN
// =========================================

if (
    usuarioActivoAdmin &&
    perfilUsuarioAdmin !== "Administrador" &&
    perfilUsuarioAdmin !== "Vendedor"
) {

    alert(
        "No tienes permisos para acceder al área de administración."
    );


    window.location.href =
        "../index.html";

}


// =========================================
// OBTENER ELEMENTOS
// =========================================

const nombreUsuarioAdmin =
    document.getElementById(
        "nombre-usuario-admin"
    );


const perfilUsuarioTexto =
    document.getElementById(
        "perfil-usuario-admin"
    );


const enlaceUsuarios =
    document.getElementById(
        "enlace-usuarios"
    );


const tarjetaUsuarios =
    document.getElementById(
        "tarjeta-usuarios"
    );


const mensajeBienvenida =
    document.getElementById(
        "mensaje-bienvenida-admin"
    );


const botonCerrarSesionAdmin =
    document.getElementById(
        "cerrar-sesion-admin"
    );


// =========================================
// MOSTRAR INFORMACIÓN
// =========================================

if (usuarioActivoAdmin) {

    nombreUsuarioAdmin.textContent =
        usuarioActivoAdmin.nombre ||
        usuarioActivoAdmin.nombreCompleto ||
        usuarioActivoAdmin.correo;


    perfilUsuarioTexto.textContent =
        perfilUsuarioAdmin;

}


// =========================================
// CONTROL SEGÚN PERFIL
// =========================================

if (perfilUsuarioAdmin === "Vendedor") {

    // El vendedor no puede administrar usuarios

    if (enlaceUsuarios) {

        enlaceUsuarios.style.display =
            "none";

    }


    if (tarjetaUsuarios) {

        tarjetaUsuarios.style.display =
            "none";

    }


    mensajeBienvenida.textContent =
        "Como Vendedor puedes consultar los productos y revisar las alertas de stock crítico.";

}


if (perfilUsuarioAdmin === "Administrador") {

    mensajeBienvenida.textContent =
        "Como Administrador puedes gestionar productos y usuarios desde este panel.";

}


// =========================================
// CERRAR SESIÓN
// =========================================

if (botonCerrarSesionAdmin) {

    botonCerrarSesionAdmin.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "usuarioActivo"
            );


            window.location.href =
                "../pages/login.html";

        }
    );

}