// =========================================
// ADMINISTRACIÓN DE USUARIOS
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

// SIN SESIÓN
if (!usuarioActivo) {

    window.location.href =
        "../../pages/login.html";
}


// SOLO ADMINISTRADOR
else if (usuarioActivo.tipoUsuario !== "Administrador") {

    window.location.href =
        "../index.html";
}


// =========================================
// ELEMENTOS DEL HTML
// =========================================

const nombreUsuarioAdmin =
    document.getElementById("nombre-usuario-admin");

const perfilUsuarioAdmin =
    document.getElementById("perfil-usuario-admin");

const cerrarSesionAdmin =
    document.getElementById("cerrar-sesion-admin");

const cuerpoTablaUsuarios =
    document.getElementById("cuerpo-tabla-usuarios");

const cantidadUsuarios =
    document.getElementById("cantidad-usuarios");

const mensajeSinUsuarios =
    document.getElementById("mensaje-sin-usuarios");

const buscarUsuario =
    document.getElementById("buscar-usuario");

const filtroRol =
    document.getElementById("filtro-rol");


// =========================================
// CABECERA ADMINISTRADOR
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
// OBTENER USUARIOS
// =========================================

function obtenerUsuarios() {

    const usuariosGuardados =
        localStorage.getItem("usuarios");


    if (usuariosGuardados) {

        return JSON.parse(usuariosGuardados);

    }


    return [];
}


// =========================================
// CLASE DEL ROL
// =========================================

function obtenerClaseRol(rol) {

    if (rol === "Administrador") {

        return "rol-administrador";

    }


    if (rol === "Vendedor") {

        return "rol-vendedor";

    }


    return "rol-cliente";
}


// =========================================
// MOSTRAR USUARIOS
// =========================================

function mostrarUsuarios(usuarios) {

    cuerpoTablaUsuarios.innerHTML = "";


    cantidadUsuarios.textContent =
        "Mostrando " +
        usuarios.length +
        " usuario(s)";


    // =====================================
    // SIN USUARIOS
    // =====================================

    if (usuarios.length === 0) {

        mensajeSinUsuarios.style.display =
            "block";

        return;
    }


    mensajeSinUsuarios.style.display =
        "none";


    // =====================================
    // RECORRER USUARIOS
    // =====================================

    usuarios.forEach(function(usuario) {


        const fila =
            document.createElement("tr");


        // =================================
        // NOMBRE COMPLETO
        // =================================

        let nombreCompleto =
            usuario.nombre || "";


        if (usuario.apellidos) {

            nombreCompleto +=
                " " + usuario.apellidos;

        }


        // =================================
        // ROL
        // =================================

        const rolUsuario =
            usuario.tipoUsuario || "Cliente";


        const claseRol =
            obtenerClaseRol(rolUsuario);


        // =================================
        // CORREO PARA LAS URL
        // =================================

        const correoUsuario =
            encodeURIComponent(
                usuario.correo || ""
            );


        // =================================
        // CREAR FILA
        // =================================

        fila.innerHTML = `

            <td>
                ${usuario.run || "-"}
            </td>

            <td>
                ${nombreCompleto}
            </td>

            <td>
                ${usuario.correo || "-"}
            </td>

            <td>
                ${usuario.region || "-"}
            </td>

            <td>
                ${usuario.comuna || "-"}
            </td>

            <td>

                <span class="rol ${claseRol}">
                    ${rolUsuario}
                </span>

            </td>

            <td>

                <a
                    class="boton-ver"
                    href="ver-usuario.html?correo=${correoUsuario}"
                >

                    <i class="fa-solid fa-eye"></i>

                    Ver

                </a>


                <a
                    class="boton-editar"
                    href="editar-usuario.html?correo=${correoUsuario}"
                >

                    <i class="fa-solid fa-pen"></i>

                    Editar

                </a>

            </td>

        `;


        cuerpoTablaUsuarios.appendChild(
            fila
        );

    });

}


// =========================================
// BUSCAR Y FILTRAR
// =========================================

function filtrarUsuarios() {

    const usuarios =
        obtenerUsuarios();


    const textoBusqueda =
        buscarUsuario
            .value
            .trim()
            .toLowerCase();


    const rolSeleccionado =
        filtroRol.value;


    const resultado =
        usuarios.filter(
            function(usuario) {


                // =========================
                // DATOS DEL USUARIO
                // =========================

                const nombreCompleto =
                    (
                        (usuario.nombre || "") +
                        " " +
                        (usuario.apellidos || "")
                    )
                    .toLowerCase();


                const correo =
                    (usuario.correo || "")
                    .toLowerCase();


                const run =
                    (usuario.run || "")
                    .toLowerCase();


                // =========================
                // BUSCADOR
                // =========================

                const coincideBusqueda =

                    nombreCompleto.includes(
                        textoBusqueda
                    )

                    ||

                    correo.includes(
                        textoBusqueda
                    )

                    ||

                    run.includes(
                        textoBusqueda
                    );


                // =========================
                // FILTRO POR ROL
                // =========================

                const coincideRol =

                    rolSeleccionado === "Todos"

                    ||

                    usuario.tipoUsuario ===
                    rolSeleccionado;


                return (
                    coincideBusqueda &&
                    coincideRol
                );

            }
        );


    mostrarUsuarios(resultado);
}


// =========================================
// EVENTOS
// =========================================

buscarUsuario.addEventListener(
    "input",
    filtrarUsuarios
);


filtroRol.addEventListener(
    "change",
    filtrarUsuarios
);


// =========================================
// CARGAR USUARIOS AL ENTRAR
// =========================================

mostrarUsuarios(
    obtenerUsuarios()
);