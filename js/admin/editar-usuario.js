// =========================================
// EDITAR USUARIO
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
// CABECERA
// =========================================

const nombreUsuarioAdmin =
    document.getElementById("nombre-usuario-admin");

const perfilUsuarioAdmin =
    document.getElementById("perfil-usuario-admin");

const cerrarSesionAdmin =
    document.getElementById("cerrar-sesion-admin");


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
// ELEMENTOS FORMULARIO
// =========================================

const formulario =
    document.getElementById("formulario-editar-usuario");

const run =
    document.getElementById("run");

const nombre =
    document.getElementById("nombre");

const apellidos =
    document.getElementById("apellidos");

const correo =
    document.getElementById("correo");

const fechaNacimiento =
    document.getElementById("fechaNacimiento");

const region =
    document.getElementById("region");

const comuna =
    document.getElementById("comuna");

const direccion =
    document.getElementById("direccion");

const tipoUsuario =
    document.getElementById("tipoUsuario");

const mensajeEdicion =
    document.getElementById("mensaje-edicion");

const tarjetaEditar =
    document.getElementById("tarjeta-editar-usuario");

const mensajeNoEncontrado =
    document.getElementById("mensaje-usuario-no-encontrado");


// =========================================
// ERRORES
// =========================================

const errorNombre =
    document.getElementById("error-nombre");

const errorApellidos =
    document.getElementById("error-apellidos");

const errorCorreo =
    document.getElementById("error-correo");

const errorRegion =
    document.getElementById("error-region");

const errorComuna =
    document.getElementById("error-comuna");

const errorDireccion =
    document.getElementById("error-direccion");


// =========================================
// REGIONES / COMUNAS
// =========================================

const regiones = [

    {
        nombre: "Región Metropolitana de Santiago",

        comunas: [
            "Santiago",
            "Maipú",
            "Puente Alto"
        ]
    },

    {
        nombre: "Región de Valparaíso",

        comunas: [
            "Valparaíso",
            "Viña del Mar",
            "Quilpué"
        ]
    },

    {
        nombre: "Región de Ñuble",

        comunas: [
            "Chillán",
            "San Carlos",
            "Bulnes"
        ]
    },

    {
        nombre: "Región del Biobío",

        comunas: [
            "Concepción",
            "Talcahuano",
            "San Pedro de la Paz",
            "Los Ángeles"
        ]
    },

    {
        nombre: "Región de La Araucanía",

        comunas: [
            "Temuco",
            "Pucón",
            "Villarrica"
        ]
    }

];


// =========================================
// CARGAR REGIONES
// =========================================

function cargarRegiones() {

    region.innerHTML =
        '<option value="">Seleccione una región</option>';


    regiones.forEach(
        function(item) {

            const opcion =
                document.createElement("option");


            opcion.value =
                item.nombre;


            opcion.textContent =
                item.nombre;


            region.appendChild(opcion);

        }
    );

}


// =========================================
// CARGAR COMUNAS
// =========================================

function cargarComunas(
    regionSeleccionada,
    comunaSeleccionada = ""
) {

    comuna.innerHTML =
        '<option value="">Seleccione una comuna</option>';


    const datosRegion =
        regiones.find(
            function(item) {

                return item.nombre ===
                    regionSeleccionada;

            }
        );


    if (!datosRegion) {

        return;

    }


    datosRegion.comunas.forEach(
        function(nombreComuna) {

            const opcion =
                document.createElement("option");


            opcion.value =
                nombreComuna;


            opcion.textContent =
                nombreComuna;


            if (
                nombreComuna ===
                comunaSeleccionada
            ) {

                opcion.selected = true;

            }


            comuna.appendChild(opcion);

        }
    );

}


// =========================================
// EVENTO REGIÓN
// =========================================

region.addEventListener(
    "change",
    function() {

        cargarComunas(
            region.value
        );

    }
);


// =========================================
// OBTENER USUARIOS
// =========================================

function obtenerUsuarios() {

    return JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

}


// =========================================
// CORREO DESDE URL
// =========================================

const parametros =
    new URLSearchParams(
        window.location.search
    );


const correoOriginal =
    parametros.get("correo");


// =========================================
// BUSCAR USUARIO
// =========================================

function buscarUsuario() {

    const usuarios =
        obtenerUsuarios();


    return usuarios.find(
        function(usuario) {

            return usuario.correo ===
                correoOriginal;

        }
    );

}


// =========================================
// CARGAR DATOS
// =========================================

function cargarUsuario(usuario) {

    run.value =
        usuario.run || "";

    nombre.value =
        usuario.nombre || "";

    apellidos.value =
        usuario.apellidos || "";

    correo.value =
        usuario.correo || "";

    fechaNacimiento.value =
        usuario.fechaNacimiento || "";

    direccion.value =
        usuario.direccion || "";

    tipoUsuario.value =
        usuario.tipoUsuario || "Cliente";


    cargarRegiones();


    region.value =
        usuario.region || "";


    cargarComunas(
        usuario.region,
        usuario.comuna
    );

}


// =========================================
// LIMPIAR ERRORES
// =========================================

function limpiarErrores() {

    errorNombre.textContent = "";

    errorApellidos.textContent = "";

    errorCorreo.textContent = "";

    errorRegion.textContent = "";

    errorComuna.textContent = "";

    errorDireccion.textContent = "";

    mensajeEdicion.textContent = "";

}


// =========================================
// VALIDAR
// =========================================

function validarFormulario() {

    limpiarErrores();


    let valido = true;


    const nombreIngresado =
        nombre.value.trim();

    const apellidosIngresados =
        apellidos.value.trim();

    const correoIngresado =
        correo.value.trim().toLowerCase();

    const direccionIngresada =
        direccion.value.trim();


    if (nombreIngresado === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        valido = false;

    }


    if (apellidosIngresados === "") {

        errorApellidos.textContent =
            "Los apellidos son obligatorios.";

        valido = false;

    }


    if (correoIngresado === "") {

        errorCorreo.textContent =
            "El correo es obligatorio.";

        valido = false;

    }

    else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        errorCorreo.textContent =
            "Ingrese un correo válido.";

        valido = false;

    }


    if (region.value === "") {

        errorRegion.textContent =
            "Seleccione una región.";

        valido = false;

    }


    if (comuna.value === "") {

        errorComuna.textContent =
            "Seleccione una comuna.";

        valido = false;

    }


    if (direccionIngresada === "") {

        errorDireccion.textContent =
            "La dirección es obligatoria.";

        valido = false;

    }


    return valido;

}


// =========================================
// GUARDAR CAMBIOS
// =========================================

formulario.addEventListener(
    "submit",
    function(evento) {

        evento.preventDefault();


        if (!validarFormulario()) {

            return;

        }


        const usuarios =
            obtenerUsuarios();


        const indice =
            usuarios.findIndex(
                function(usuario) {

                    return usuario.correo ===
                        correoOriginal;

                }
            );


        if (indice === -1) {

            return;

        }


        // VALIDAR CORREO DUPLICADO
        const nuevoCorreo =
            correo.value
                .trim()
                .toLowerCase();


        const correoRepetido =
            usuarios.some(
                function(usuario, posicion) {

                    return (
                        posicion !== indice &&
                        usuario.correo === nuevoCorreo
                    );

                }
            );


        if (correoRepetido) {

            errorCorreo.textContent =
                "Este correo ya está registrado.";

            return;

        }


        // ACTUALIZAR
        usuarios[indice].nombre =
            nombre.value.trim();

        usuarios[indice].apellidos =
            apellidos.value.trim();

        usuarios[indice].correo =
            nuevoCorreo;

        usuarios[indice].fechaNacimiento =
            fechaNacimiento.value;

        usuarios[indice].region =
            region.value;

        usuarios[indice].comuna =
            comuna.value;

        usuarios[indice].direccion =
            direccion.value.trim();

        usuarios[indice].tipoUsuario =
            tipoUsuario.value;


        // GUARDAR
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        // SI EDITASTE AL USUARIO ACTIVO
        if (
            usuarioActivo.correo ===
            correoOriginal
        ) {

            localStorage.setItem(
                "usuarioActivo",
                JSON.stringify(
                    usuarios[indice]
                )
            );

        }


        mensajeEdicion.textContent =
            "Usuario actualizado correctamente.";


        // REDIRECCIONAR
        setTimeout(
            function() {

                window.location.href =
                    "ver-usuario.html?correo=" +
                    encodeURIComponent(
                        nuevoCorreo
                    );

            },
            1200
        );

    }
);


// =========================================
// INICIAR
// =========================================

const usuarioEncontrado =
    buscarUsuario();


if (usuarioEncontrado) {

    tarjetaEditar.style.display =
        "block";

    mensajeNoEncontrado.style.display =
        "none";

    cargarUsuario(
        usuarioEncontrado
    );

}

else {

    tarjetaEditar.style.display =
        "none";

    mensajeNoEncontrado.style.display =
        "block";

}