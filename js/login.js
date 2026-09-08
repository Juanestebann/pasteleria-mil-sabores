// =========================================
// USUARIOS INTERNOS
// =========================================

const usuariosInternos = [

    {
        nombre: "Administrador",
        apellidos: "Mil Sabores",
        correo: "admin@gmail.com",
        contrasena: "admin123",
        tipoUsuario: "Administrador"
    },

    {
        nombre: "Vendedor",
        apellidos: "Mil Sabores",
        correo: "vendedor@gmail.com",
        contrasena: "vend123",
        tipoUsuario: "Vendedor"
    }

];


// =========================================
// GUARDAR USUARIOS INTERNOS
// =========================================

let usuariosIniciales =
    JSON.parse(localStorage.getItem("usuarios")) || [];


usuariosInternos.forEach(function (usuarioInterno) {

    const posicionUsuario =
        usuariosIniciales.findIndex(function (usuario) {

            return (
                usuario.correo.toLowerCase() ===
                usuarioInterno.correo.toLowerCase()
            );

        });


    // Si ya existe, actualizar sus datos
    if (posicionUsuario !== -1) {

        usuariosIniciales[posicionUsuario] =
            usuarioInterno;

    } else {

        // Si no existe, agregarlo
        usuariosIniciales.push(usuarioInterno);

    }

});


localStorage.setItem(
    "usuarios",
    JSON.stringify(usuariosIniciales)
);


// =========================================
// OBTENER ELEMENTOS
// =========================================

const formularioLogin =
    document.getElementById("formulario-login");

const correo =
    document.getElementById("correo");

const contrasena =
    document.getElementById("contrasena");

const errorCorreo =
    document.getElementById("error-correo");

const errorContrasena =
    document.getElementById("error-contrasena");

const errorLogin =
    document.getElementById("error-login");


// =========================================
// INICIAR SESIÓN
// =========================================

formularioLogin.addEventListener("submit", function (evento) {

    // Evita que el formulario recargue la página
    evento.preventDefault();


    // Limpiar errores anteriores
    errorCorreo.textContent = "";
    errorContrasena.textContent = "";
    errorLogin.textContent = "";


    // Obtener valores
    const correoIngresado =
        correo.value.trim().toLowerCase();

    const contrasenaIngresada =
        contrasena.value;


    let formularioValido = true;


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
    // VALIDAR CONTRASEÑA
    // =========================================

    if (contrasenaIngresada === "") {

        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        formularioValido = false;

    } else if (
        contrasenaIngresada.length < 4 ||
        contrasenaIngresada.length > 10
    ) {

        errorContrasena.textContent =
            "La contraseña debe tener entre 4 y 10 caracteres.";

        formularioValido = false;
    }


    // =========================================
    // DETENER SI HAY ERRORES
    // =========================================

    if (!formularioValido) {

        return;

    }


    // =========================================
    // OBTENER USUARIOS
    // =========================================

    const usuariosGuardados =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // =========================================
    // BUSCAR USUARIO
    // =========================================

    const usuarioEncontrado =
        usuariosGuardados.find(function (usuario) {

            return (
                usuario.correo.toLowerCase() === correoIngresado &&
                usuario.contrasena === contrasenaIngresada
            );

        });


    // =========================================
    // VALIDAR LOGIN
    // =========================================

    if (usuarioEncontrado) {

        // Guardar usuario activo
        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );


        // Obtener tipo de usuario
        const tipoUsuario =
            usuarioEncontrado.tipoUsuario || "Cliente";


        // =========================================
        // REDIRECCIÓN SEGÚN TIPO
        // =========================================

        if (
            tipoUsuario === "Administrador" ||
            tipoUsuario === "Vendedor"
        ) {

            window.location.href =
                "../admin/index.html";

        } else {

            window.location.href =
                "../index.html";

        }

    } else {

        errorLogin.textContent =
            "El email o la contraseña no son correctos.";

    }

});