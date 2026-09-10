// Crea un arreglo con los usuarios internos que siempre estarán disponibles en el sistema.
const usuariosInternos = [

    // Define el usuario interno con rol Administrador.
    {
        nombre: "Administrador",
        apellidos: "Mil Sabores",
        correo: "admin@gmail.com",
        contrasena: "admin123",
        tipoUsuario: "Administrador"
    },

    // Define el usuario interno con rol Vendedor.
    {
        nombre: "Vendedor",
        apellidos: "Mil Sabores",
        correo: "vendedor@gmail.com",
        contrasena: "vend123",
        tipoUsuario: "Vendedor"
    }

];


// Obtiene los usuarios guardados en localStorage o crea un arreglo vacío si no existen.
let usuariosIniciales =
    JSON.parse(localStorage.getItem("usuarios")) || [];


// Recorre uno por uno los usuarios internos.
usuariosInternos.forEach(function (usuarioInterno) {

    // Busca la posición de un usuario que tenga el mismo correo que el usuario interno.
    const posicionUsuario =
        usuariosIniciales.findIndex(function (usuario) {

            // Compara ambos correos convirtiéndolos a minúsculas.
            return (
                usuario.correo.toLowerCase() ===
                usuarioInterno.correo.toLowerCase()
            );

        });


    // Verifica si el usuario interno ya existe dentro del arreglo.
    if (posicionUsuario !== -1) {

        // Actualiza los datos del usuario existente con los datos del usuario interno.
        usuariosIniciales[posicionUsuario] =
            usuarioInterno;

    } else {

        // Agrega el usuario interno al arreglo si todavía no existe.
        usuariosIniciales.push(usuarioInterno);

    }

});


// Guarda el arreglo actualizado de usuarios dentro de localStorage.
localStorage.setItem(
    "usuarios",
    JSON.stringify(usuariosIniciales)
);


// Busca el formulario utilizado para iniciar sesión.
const formularioLogin =
    document.getElementById("formulario-login");

// Busca el campo donde se ingresa el correo.
const correo =
    document.getElementById("correo");

// Busca el campo donde se ingresa la contraseña.
const contrasena =
    document.getElementById("contrasena");

// Busca el elemento donde se mostrará el error relacionado con el correo.
const errorCorreo =
    document.getElementById("error-correo");

// Busca el elemento donde se mostrará el error relacionado con la contraseña.
const errorContrasena =
    document.getElementById("error-contrasena");

// Busca el elemento donde se mostrará un error general del inicio de sesión.
const errorLogin =
    document.getElementById("error-login");


// Escucha cuando el usuario intenta enviar el formulario de inicio de sesión.
formularioLogin.addEventListener("submit", function (evento) {

    // Evita que el formulario recargue automáticamente la página.
    evento.preventDefault();


    // Limpia el mensaje de error anterior del correo.
    errorCorreo.textContent = "";

    // Limpia el mensaje de error anterior de la contraseña.
    errorContrasena.textContent = "";

    // Limpia el mensaje de error general del login.
    errorLogin.textContent = "";


    // Obtiene el correo ingresado, elimina espacios y lo convierte a minúsculas.
    const correoIngresado =
        correo.value.trim().toLowerCase();

    // Obtiene la contraseña ingresada.
    const contrasenaIngresada =
        contrasena.value;


    // Parte suponiendo que los datos del formulario son válidos.
    let formularioValido = true;


    // Verifica si el correo está vacío.
    if (correoIngresado === "") {

        // Muestra un mensaje indicando que el correo es obligatorio.
        errorCorreo.textContent =
            "El correo es obligatorio.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si el correo supera los cien caracteres.
    } else if (correoIngresado.length > 100) {

        // Muestra un mensaje indicando el máximo de caracteres permitido.
        errorCorreo.textContent =
            "El correo no puede superar los 100 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica que el correo termine con alguno de los dominios permitidos.
    } else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        // Muestra un mensaje indicando cuáles son los dominios permitidos.
        errorCorreo.textContent =
            "Ingrese un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        // Marca el formulario como inválido.
        formularioValido = false;
    }


    // Verifica si la contraseña está vacía.
    if (contrasenaIngresada === "") {

        // Muestra un mensaje indicando que la contraseña es obligatoria.
        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica si la contraseña tiene menos de cuatro o más de diez caracteres.
    } else if (
        contrasenaIngresada.length < 4 ||
        contrasenaIngresada.length > 10
    ) {

        // Muestra un mensaje indicando la cantidad de caracteres permitida.
        errorContrasena.textContent =
            "La contraseña debe tener entre 4 y 10 caracteres.";

        // Marca el formulario como inválido.
        formularioValido = false;
    }


    // Verifica si se encontró algún error en las validaciones.
    if (!formularioValido) {

        // Detiene la ejecución para evitar intentar iniciar sesión con datos inválidos.
        return;

    }


    // Obtiene todos los usuarios guardados en localStorage o crea un arreglo vacío si no existen.
    const usuariosGuardados =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // Busca un usuario cuyo correo y contraseña coincidan con los datos ingresados.
    const usuarioEncontrado =
        usuariosGuardados.find(function (usuario) {

            // Compara el correo y la contraseña del usuario con los datos ingresados.
            return (
                usuario.correo.toLowerCase() === correoIngresado &&
                usuario.contrasena === contrasenaIngresada
            );

        });


    // Verifica si se encontró un usuario con las credenciales ingresadas.
    if (usuarioEncontrado) {

        // Guarda el usuario encontrado como usuario activo dentro de localStorage.
        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );


        // Obtiene el tipo de usuario o utiliza Cliente si no tiene uno definido.
        const tipoUsuario =
            usuarioEncontrado.tipoUsuario || "Cliente";


        // Verifica si el usuario tiene rol Administrador o Vendedor.
        if (
            tipoUsuario === "Administrador" ||
            tipoUsuario === "Vendedor"
        ) {

            // Redirige a Administradores y Vendedores hacia el área de administración.
            window.location.href =
                "../admin/index.html";

        } else {

            // Redirige a los demás usuarios hacia la página principal.
            window.location.href =
                "../index.html";

        }

    } else {

        // Muestra un mensaje cuando el correo o la contraseña no coinciden con ningún usuario.
        errorLogin.textContent =
            "El email o la contraseña no son correctos.";

    }

});