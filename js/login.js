const formularioLogin = document.getElementById("formulario-login");

const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");

const errorCorreo = document.getElementById("error-correo");
const errorContrasena = document.getElementById("error-contrasena");
const errorLogin = document.getElementById("error-login");


formularioLogin.addEventListener("submit", function(evento) {

    // Evita que el formulario recargue la página
    evento.preventDefault();


    // Limpiar errores anteriores
    errorCorreo.textContent = "";
    errorContrasena.textContent = "";
    errorLogin.textContent = "";


    // Obtener los valores
    const correoIngresado = correo.value.trim().toLowerCase();
    const contrasenaIngresada = contrasena.value;


    let formularioValido = true;


    // =========================================
    // VALIDAR CORREO
    // =========================================

    if (correoIngresado === "") {

        errorCorreo.textContent = "El correo es obligatorio.";

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


    // Si hay errores en los campos,
    // no continúa con el inicio de sesión
    if (!formularioValido) {
        return;
    }


    // =========================================
    // OBTENER USUARIOS REGISTRADOS
    // =========================================

    const usuariosGuardados =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // =========================================
    // BUSCAR USUARIO
    // =========================================

    const usuarioEncontrado = usuariosGuardados.find(function(usuario) {

        return (
            usuario.correo.toLowerCase() === correoIngresado &&
            usuario.contrasena === contrasenaIngresada
        );

    });


    // =========================================
    // VALIDAR LOGIN
    // =========================================

    if (usuarioEncontrado) {

        // Guardar el usuario que inició sesión
        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );


        // Redirigir al inicio
        window.location.href = "../index.html";

    } else {

        errorLogin.textContent =
            "El email o la contraseña no son correctos.";
    }

});