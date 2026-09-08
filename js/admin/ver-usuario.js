// =========================================
// VER USUARIO
// PASTELERÍA MIL SABORES
// =========================================


// =========================================
// USUARIO ACTIVO
// =========================================

const usuarioActivo =
    JSON.parse(localStorage.getItem("usuarioActivo"));


// =========================================
// CONTROL DE ACCESO
// =========================================

if (!usuarioActivo) {

    window.location.href =
        "../../pages/login.html";

}

else if (usuarioActivo.tipoUsuario !== "Administrador") {

    window.location.href =
        "../index.html";

}


// =========================================
// ELEMENTOS CABECERA
// =========================================

const nombreUsuarioAdmin =
    document.getElementById("nombre-usuario-admin");

const perfilUsuarioAdmin =
    document.getElementById("perfil-usuario-admin");

const cerrarSesionAdmin =
    document.getElementById("cerrar-sesion-admin");


// =========================================
// ELEMENTOS DEL USUARIO
// =========================================

const tarjetaUsuario =
    document.getElementById("tarjeta-ver-usuario");

const mensajeNoEncontrado =
    document.getElementById("mensaje-usuario-no-encontrado");

const nombreUsuario =
    document.getElementById("nombre-usuario");

const rolUsuario =
    document.getElementById("rol-usuario");

const datoRun =
    document.getElementById("dato-run");

const datoCorreo =
    document.getElementById("dato-correo");

const datoFecha =
    document.getElementById("dato-fecha");

const datoRol =
    document.getElementById("dato-rol");

const datoRegion =
    document.getElementById("dato-region");

const datoComuna =
    document.getElementById("dato-comuna");

const datoDireccion =
    document.getElementById("dato-direccion");

const botonEditar =
    document.getElementById("boton-editar-usuario");


// =========================================
// CABECERA
// =========================================

if (usuarioActivo) {

    nombreUsuarioAdmin.textContent =
        usuarioActivo.nombre || "Administrador";

    perfilUsuarioAdmin.textContent =
        usuarioActivo.tipoUsuario;

}


// =========================================
// CERRAR SESIÓN
// =========================================

cerrarSesionAdmin.addEventListener(
    "click",
    function() {

        localStorage.removeItem("usuarioActivo");

        window.location.href =
            "../../pages/login.html";

    }
);


// =========================================
// OBTENER CORREO DE LA URL
// =========================================

const parametros =
    new URLSearchParams(
        window.location.search
    );


const correoBuscado =
    parametros.get("correo");


// =========================================
// OBTENER USUARIOS
// =========================================

function obtenerUsuarios() {

    const usuariosGuardados =
        localStorage.getItem("usuarios");


    if (usuariosGuardados) {

        return JSON.parse(
            usuariosGuardados
        );

    }


    return [];
}


// =========================================
// BUSCAR USUARIO
// =========================================

function buscarUsuarioPorCorreo(correo) {

    const usuarios =
        obtenerUsuarios();


    return usuarios.find(
        function(usuario) {

            return usuario.correo === correo;

        }
    );

}


// =========================================
// MOSTRAR DATOS
// =========================================

function mostrarUsuario(usuario) {

    let nombreCompleto =
        usuario.nombre || "";


    if (usuario.apellidos) {

        nombreCompleto +=
            " " +
            usuario.apellidos;

    }


    nombreUsuario.textContent =
        nombreCompleto || "Usuario";


    rolUsuario.textContent =
        usuario.tipoUsuario || "Cliente";


    datoRun.textContent =
        usuario.run || "-";


    datoCorreo.textContent =
        usuario.correo || "-";


    datoFecha.textContent =
        usuario.fechaNacimiento || "-";


    datoRol.textContent =
        usuario.tipoUsuario || "Cliente";


    datoRegion.textContent =
        usuario.region || "-";


    datoComuna.textContent =
        usuario.comuna || "-";


    datoDireccion.textContent =
        usuario.direccion || "-";


    botonEditar.href =
        "editar-usuario.html?correo=" +
        encodeURIComponent(
            usuario.correo
        );

}


// =========================================
// CARGAR USUARIO
// =========================================

if (!correoBuscado) {

    tarjetaUsuario.style.display =
        "none";

    mensajeNoEncontrado.style.display =
        "block";

}

else {

    const usuarioEncontrado =
        buscarUsuarioPorCorreo(
            correoBuscado
        );


    if (usuarioEncontrado) {

        tarjetaUsuario.style.display =
            "block";

        mensajeNoEncontrado.style.display =
            "none";

        mostrarUsuario(
            usuarioEncontrado
        );

    }

    else {

        tarjetaUsuario.style.display =
            "none";

        mensajeNoEncontrado.style.display =
            "block";

    }

}