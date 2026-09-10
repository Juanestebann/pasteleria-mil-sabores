// Obtiene el usuario activo guardado en localStorage y convierte el JSON a objeto JavaScript.
const usuarioActivo =
    JSON.parse(localStorage.getItem("usuarioActivo"));


// Verifica si no existe un usuario con sesión iniciada.
if (!usuarioActivo) {

    // Redirige al login si no existe una sesión activa.
    window.location.href =
        "../../pages/login.html";
}


// Verifica si el usuario activo no tiene el rol Administrador.
else if (usuarioActivo.tipoUsuario !== "Administrador") {

    // Redirige a la página principal si el usuario no es Administrador.
    window.location.href =
        "../index.html";
}


// Busca el elemento HTML donde se mostrará el nombre del administrador.
const nombreUsuarioAdmin =
    document.getElementById("nombre-usuario-admin");

// Busca el elemento HTML donde se mostrará el perfil del administrador.
const perfilUsuarioAdmin =
    document.getElementById("perfil-usuario-admin");

// Busca el botón utilizado para cerrar la sesión.
const cerrarSesionAdmin =
    document.getElementById("cerrar-sesion-admin");

// Busca el cuerpo de la tabla donde se mostrarán los usuarios.
const cuerpoTablaUsuarios =
    document.getElementById("cuerpo-tabla-usuarios");

// Busca el elemento donde se mostrará la cantidad de usuarios.
const cantidadUsuarios =
    document.getElementById("cantidad-usuarios");

// Busca el elemento donde se mostrará el mensaje cuando no existan usuarios.
const mensajeSinUsuarios =
    document.getElementById("mensaje-sin-usuarios");

// Busca el campo utilizado para buscar usuarios.
const buscarUsuario =
    document.getElementById("buscar-usuario");

// Busca el selector utilizado para filtrar usuarios según su rol.
const filtroRol =
    document.getElementById("filtro-rol");


// Verifica que exista un usuario activo antes de mostrar su información.
if (usuarioActivo) {

    // Muestra el nombre del usuario o Administrador si no tiene nombre definido.
    nombreUsuarioAdmin.textContent =
        usuarioActivo.nombre || "Administrador";

    // Muestra el tipo de usuario activo.
    perfilUsuarioAdmin.textContent =
        usuarioActivo.tipoUsuario;
}


// Escucha cuando el usuario hace clic en el botón para cerrar sesión.
cerrarSesionAdmin.addEventListener(
    "click",
    function() {

        // Elimina el usuario activo guardado en localStorage.
        localStorage.removeItem("usuarioActivo");

        // Redirige hacia la página de login.
        window.location.href =
            "../../pages/login.html";
    }
);


// Crea una función para obtener los usuarios guardados en localStorage.
function obtenerUsuarios() {

    // Obtiene el contenido guardado con la clave usuarios.
    const usuariosGuardados =
        localStorage.getItem("usuarios");


    // Verifica si existen usuarios guardados.
    if (usuariosGuardados) {

        // Convierte el JSON almacenado en un arreglo de objetos JavaScript.
        return JSON.parse(usuariosGuardados);

    }


    // Devuelve un arreglo vacío si todavía no existen usuarios guardados.
    return [];
}


// Crea una función que devuelve una clase CSS dependiendo del rol recibido.
function obtenerClaseRol(rol) {

    // Verifica si el rol corresponde a Administrador.
    if (rol === "Administrador") {

        // Devuelve la clase CSS correspondiente al Administrador.
        return "rol-administrador";

    }


    // Verifica si el rol corresponde a Vendedor.
    if (rol === "Vendedor") {

        // Devuelve la clase CSS correspondiente al Vendedor.
        return "rol-vendedor";

    }


    // Devuelve la clase CSS de Cliente si el rol no es Administrador ni Vendedor.
    return "rol-cliente";
}


// Crea una función que recibe usuarios y los muestra dentro de la tabla.
function mostrarUsuarios(usuarios) {

    // Limpia el contenido anterior del cuerpo de la tabla.
    cuerpoTablaUsuarios.innerHTML = "";


    // Muestra la cantidad de usuarios que se están mostrando.
    cantidadUsuarios.textContent =
        "Mostrando " +
        usuarios.length +
        " usuario(s)";


    // Verifica si el arreglo de usuarios está vacío.
    if (usuarios.length === 0) {

        // Muestra el mensaje indicando que no existen usuarios.
        mensajeSinUsuarios.style.display =
            "block";

        // Detiene la función porque no existen usuarios para mostrar.
        return;
    }


    // Oculta el mensaje de usuarios vacíos cuando sí existen usuarios.
    mensajeSinUsuarios.style.display =
        "none";


    // Recorre uno por uno todos los usuarios recibidos.
    usuarios.forEach(function(usuario) {


        // Crea dinámicamente una nueva fila de tabla.
        const fila =
            document.createElement("tr");


        // Obtiene inicialmente el nombre del usuario o un texto vacío si no existe.
        let nombreCompleto =
            usuario.nombre || "";


        // Verifica si el usuario tiene apellidos registrados.
        if (usuario.apellidos) {

            // Agrega los apellidos al nombre para formar el nombre completo.
            nombreCompleto +=
                " " + usuario.apellidos;

        }


        // Obtiene el tipo de usuario o utiliza Cliente si no tiene uno definido.
        const rolUsuario =
            usuario.tipoUsuario || "Cliente";


        // Obtiene la clase CSS que corresponde al rol del usuario.
        const claseRol =
            obtenerClaseRol(rolUsuario);


        // Codifica el correo para poder utilizarlo correctamente dentro de una URL.
        const correoUsuario =
            encodeURIComponent(
                usuario.correo || ""
            );


        // Crea el contenido HTML completo de la fila del usuario.
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


        // Agrega la fila creada dentro del cuerpo de la tabla.
        cuerpoTablaUsuarios.appendChild(
            fila
        );

    });

}


// Crea una función encargada de buscar y filtrar usuarios.
function filtrarUsuarios() {

    // Obtiene todos los usuarios almacenados.
    const usuarios =
        obtenerUsuarios();


    // Obtiene el texto escrito en el buscador, elimina espacios y lo convierte a minúsculas.
    const textoBusqueda =
        buscarUsuario
            .value
            .trim()
            .toLowerCase();


    // Obtiene el rol seleccionado actualmente en el filtro.
    const rolSeleccionado =
        filtroRol.value;


    // Crea un nuevo arreglo con los usuarios que cumplen las condiciones de búsqueda y rol.
    const resultado =
        usuarios.filter(
            function(usuario) {


                // Une el nombre y los apellidos del usuario y los convierte a minúsculas.
                const nombreCompleto =
                    (
                        (usuario.nombre || "") +
                        " " +
                        (usuario.apellidos || "")
                    )
                    .toLowerCase();


                // Obtiene el correo del usuario y lo convierte a minúsculas.
                const correo =
                    (usuario.correo || "")
                    .toLowerCase();


                // Obtiene el RUN del usuario y lo convierte a minúsculas.
                const run =
                    (usuario.run || "")
                    .toLowerCase();


                // Verifica si el texto buscado aparece en el nombre completo.
                const coincideBusqueda =

                    nombreCompleto.includes(
                        textoBusqueda
                    )

                    ||

                    // Verifica si el texto buscado aparece en el correo.
                    correo.includes(
                        textoBusqueda
                    )

                    ||

                    // Verifica si el texto buscado aparece en el RUN.
                    run.includes(
                        textoBusqueda
                    );


                // Verifica si se deben mostrar todos los roles o solamente el rol seleccionado.
                const coincideRol =

                    rolSeleccionado === "Todos"

                    ||

                    usuario.tipoUsuario ===
                    rolSeleccionado;


                // Devuelve solamente los usuarios que coinciden con la búsqueda y el filtro de rol.
                return (
                    coincideBusqueda &&
                    coincideRol
                );

            }
        );


    // Muestra en la tabla solamente los usuarios que pasaron los filtros.
    mostrarUsuarios(resultado);
}


// Escucha cada cambio realizado mientras el usuario escribe en el buscador.
buscarUsuario.addEventListener(
    "input",
    filtrarUsuarios
);


// Escucha cuando el usuario cambia el filtro de rol.
filtroRol.addEventListener(
    "change",
    filtrarUsuarios
);


// Obtiene todos los usuarios y los muestra cuando se entra inicialmente a la página.
mostrarUsuarios(
    obtenerUsuarios()
);