// =========================================
// OBTENER ELEMENTOS
// =========================================

const sesionHeader =
    document.getElementById(
        "sesion-header"
    );


const usuarioActivo =
    JSON.parse(
        localStorage.getItem(
            "usuarioActivo"
        )
    );


// =========================================
// MOSTRAR USUARIO ACTIVO
// =========================================

if (
    sesionHeader &&
    usuarioActivo
) {

    // Limpiar botón iniciar sesión

    sesionHeader.innerHTML =
        "";


    // =========================================
    // NOMBRE
    // =========================================

    const nombreUsuario =
        document.createElement(
            "span"
        );


    nombreUsuario.classList.add(
        "nombre-usuario"
    );


    nombreUsuario.textContent =

        usuarioActivo.nombre ||

        usuarioActivo.nombreCompleto ||

        usuarioActivo.correo;


    sesionHeader.appendChild(
        nombreUsuario
    );


    // =========================================
    // PERFIL
    // =========================================

    const perfilUsuario =

        usuarioActivo.tipoUsuario ||

        usuarioActivo.perfil ||

        usuarioActivo.rol ||

        "Cliente";


    // =========================================
    // BOTÓN ADMINISTRACIÓN
    // =========================================

    if (
        perfilUsuario === "Administrador" ||
        perfilUsuario === "Vendedor"
    ) {

        const enlaceAdministracion =
            document.createElement(
                "a"
            );


        enlaceAdministracion.classList.add(
            "boton-IniciarSesion"
        );


        enlaceAdministracion.textContent =
            "Administración";


        // Saber si estamos en index
        // o dentro de /pages

        if (
            window.location.pathname.includes(
                "/pages/"
            )
        ) {

            enlaceAdministracion.href =
                "../admin/index.html";

        } else {

            enlaceAdministracion.href =
                "admin/index.html";

        }


        sesionHeader.appendChild(
            enlaceAdministracion
        );

    }


    // =========================================
    // BOTÓN CERRAR SESIÓN
    // =========================================

    const botonCerrarSesion =
        document.createElement(
            "button"
        );


    botonCerrarSesion.classList.add(
        "boton-CerrarSesion"
    );


    botonCerrarSesion.textContent =
        "Cerrar Sesión";


    sesionHeader.appendChild(
        botonCerrarSesion
    );


    // =========================================
    // CERRAR SESIÓN
    // =========================================

    botonCerrarSesion.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "usuarioActivo"
            );


            location.reload();

        }
    );

}