// =========================================
// ELEMENTOS DEL FORMULARIO
// =========================================

const formularioRegistro = document.getElementById("formulario-registro");

const run = document.getElementById("run");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const region = document.getElementById("region");
const comuna = document.getElementById("comuna");
const direccion = document.getElementById("direccion");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmarContrasena");
const mensajeRegistro =
    document.getElementById("mensaje-registro");


// =========================================
// MENSAJES DE ERROR
// =========================================

const errorRun = document.getElementById("error-run");
const errorNombre = document.getElementById("error-nombre");
const errorApellidos = document.getElementById("error-apellidos");
const errorCorreo = document.getElementById("error-correo");
const errorFecha = document.getElementById("error-fecha");
const errorRegion = document.getElementById("error-region");
const errorComuna = document.getElementById("error-comuna");
const errorDireccion = document.getElementById("error-direccion");
const errorContrasena = document.getElementById("error-contrasena");
const errorConfirmarContrasena =
    document.getElementById("error-confirmar-contrasena");


// =========================================
// REGIONES Y COMUNAS
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
        nombre: "Región de O'Higgins",
        comunas: [
            "Rancagua",
            "Machalí",
            "San Fernando"
        ]
    },

    {
        nombre: "Región del Maule",
        comunas: [
            "Talca",
            "Curicó",
            "Linares"
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
// CARGAR REGIONES AL INICIAR
// =========================================

function cargarRegiones() {

    region.innerHTML = "";

    const opcionInicial = document.createElement("option");

    opcionInicial.value = "";
    opcionInicial.textContent = "Seleccione una región";

    region.appendChild(opcionInicial);


    regiones.forEach(function(item) {

        const opcion = document.createElement("option");

        opcion.value = item.nombre;
        opcion.textContent = item.nombre;

        region.appendChild(opcion);
    });
}


// =========================================
// CARGAR COMUNAS
// =========================================

function cargarComunas() {

    comuna.innerHTML = "";

    const opcionInicial = document.createElement("option");

    opcionInicial.value = "";
    opcionInicial.textContent = "Seleccione una comuna";

    comuna.appendChild(opcionInicial);


    const regionSeleccionada = regiones.find(function(item) {

        return item.nombre === region.value;
    });


    if (regionSeleccionada) {

        regionSeleccionada.comunas.forEach(function(nombreComuna) {

            const opcion = document.createElement("option");

            opcion.value = nombreComuna;
            opcion.textContent = nombreComuna;

            comuna.appendChild(opcion);
        });
    }
}


// =========================================
// EVENTO REGIÓN
// =========================================

region.addEventListener("change", function() {

    cargarComunas();
});


// CARGAR REGIONES AUTOMÁTICAMENTE
cargarRegiones();


// =========================================
// VALIDAR RUN CHILENO
// =========================================

function validarRun(runIngresado) {

    if (runIngresado.length < 7 || runIngresado.length > 9) {
        return false;
    }

    if (runIngresado.includes(".") || runIngresado.includes("-")) {
        return false;
    }

    const cuerpo = runIngresado.slice(0, -1);
    const digitoIngresado = runIngresado.slice(-1).toUpperCase();

    if (isNaN(cuerpo)) {
        return false;
    }

    let suma = 0;
    let multiplicador = 2;


    for (let i = cuerpo.length - 1; i >= 0; i--) {

        suma += Number(cuerpo[i]) * multiplicador;

        multiplicador++;

        if (multiplicador === 8) {
            multiplicador = 2;
        }
    }


    const resto = 11 - (suma % 11);

    let digitoCalculado;

    if (resto === 11) {

        digitoCalculado = "0";

    } else if (resto === 10) {

        digitoCalculado = "K";

    } else {

        digitoCalculado = String(resto);
    }


    return digitoCalculado === digitoIngresado;
}


// =========================================
// LIMPIAR ERRORES
// =========================================

function limpiarErrores() {

    errorRun.textContent = "";
    errorNombre.textContent = "";
    errorApellidos.textContent = "";
    errorCorreo.textContent = "";
    errorFecha.textContent = "";
    errorRegion.textContent = "";
    errorComuna.textContent = "";
    errorDireccion.textContent = "";
    errorContrasena.textContent = "";
    errorConfirmarContrasena.textContent = "";
}


// =========================================
// VALIDAR FORMULARIO
// =========================================

formularioRegistro.addEventListener("submit", function(evento) {

    evento.preventDefault();

    limpiarErrores();

    let formularioValido = true;


    const runIngresado = run.value.trim().toUpperCase();
    const nombreIngresado = nombre.value.trim();
    const apellidosIngresados = apellidos.value.trim();
    const correoIngresado = correo.value.trim().toLowerCase();
    const direccionIngresada = direccion.value.trim();
    const contrasenaIngresada = contrasena.value;
    const confirmarIngresada = confirmarContrasena.value;


    // =====================================
    // RUN
    // =====================================

    if (runIngresado === "") {

        errorRun.textContent = "El RUN es obligatorio.";
        formularioValido = false;

    } else if (!validarRun(runIngresado)) {

        errorRun.textContent =
            "Ingrese un RUN válido, sin puntos ni guion.";

        formularioValido = false;
    }


    // =====================================
    // NOMBRE
    // =====================================

    if (nombreIngresado === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        formularioValido = false;

    } else if (nombreIngresado.length > 50) {

        errorNombre.textContent =
            "El nombre no puede superar los 50 caracteres.";

        formularioValido = false;
    }


    // =====================================
    // APELLIDOS
    // =====================================

    if (apellidosIngresados === "") {

        errorApellidos.textContent =
            "Los apellidos son obligatorios.";

        formularioValido = false;

    } else if (apellidosIngresados.length > 100) {

        errorApellidos.textContent =
            "Los apellidos no pueden superar los 100 caracteres.";

        formularioValido = false;
    }


    // =====================================
    // CORREO
    // =====================================

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


    // =====================================
    // FECHA DE NACIMIENTO
    // OPCIONAL
    // =====================================

    if (fechaNacimiento.value !== "") {

        const fechaIngresada = new Date(fechaNacimiento.value);
        const fechaActual = new Date();

        if (fechaIngresada > fechaActual) {

            errorFecha.textContent =
                "La fecha de nacimiento no puede ser futura.";

            formularioValido = false;
        }
    }


    // =====================================
    // REGIÓN
    // =====================================

    if (region.value === "") {

        errorRegion.textContent =
            "Debe seleccionar una región.";

        formularioValido = false;
    }


    // =====================================
    // COMUNA
    // =====================================

    if (comuna.value === "") {

        errorComuna.textContent =
            "Debe seleccionar una comuna.";

        formularioValido = false;
    }


    // =====================================
    // DIRECCIÓN
    // =====================================

    if (direccionIngresada === "") {

        errorDireccion.textContent =
            "La dirección es obligatoria.";

        formularioValido = false;

    } else if (direccionIngresada.length > 300) {

        errorDireccion.textContent =
            "La dirección no puede superar los 300 caracteres.";

        formularioValido = false;
    }


    // =====================================
    // CONTRASEÑA
    // =====================================

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


    // =====================================
    // CONFIRMAR CONTRASEÑA
    // =====================================

    if (confirmarIngresada === "") {

        errorConfirmarContrasena.textContent =
            "Debe confirmar la contraseña.";

        formularioValido = false;

    } else if (confirmarIngresada !== contrasenaIngresada) {

        errorConfirmarContrasena.textContent =
            "Las contraseñas no coinciden.";

        formularioValido = false;
    }


    // =====================================
    // DETENER SI HAY ERRORES
    // =====================================

    if (!formularioValido) {
        return;
    }


    // =====================================
    // OBTENER USUARIOS GUARDADOS
    // =====================================

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // =====================================
    // VALIDAR CORREO DUPLICADO
    // =====================================

    const correoExiste = usuarios.some(function(usuario) {

        return usuario.correo === correoIngresado;
    });


    if (correoExiste) {

        errorCorreo.textContent =
            "Este correo ya se encuentra registrado.";

        return;
    }


    // =====================================
    // VALIDAR RUN DUPLICADO
    // =====================================

    const runExiste = usuarios.some(function(usuario) {

        return usuario.run === runIngresado;
    });


    if (runExiste) {

        errorRun.textContent =
            "Este RUN ya se encuentra registrado.";

        return;
    }


    // =====================================
    // CREAR USUARIO
    // =====================================

    const nuevoUsuario = {

        run: runIngresado,

        nombre: nombreIngresado,

        apellidos: apellidosIngresados,

        correo: correoIngresado,

        fechaNacimiento: fechaNacimiento.value,

        region: region.value,

        comuna: comuna.value,

        direccion: direccionIngresada,

        contrasena: contrasenaIngresada,

        tipoUsuario: "Cliente"
    };


    // =====================================
    // GUARDAR
    // =====================================

    usuarios.push(nuevoUsuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );


    // =====================================
    // MENSAJE Y REDIRECCIÓN
    // =====================================
mensajeRegistro.textContent =
    "Usuario creado exitosamente.";


// GUARDAR AL USUARIO COMO ACTIVO
localStorage.setItem(
    "usuarioActivo",
    JSON.stringify(nuevoUsuario)
);


// ESPERAR UN MOMENTO Y MANDAR AL INICIO
setTimeout(function() {

    window.location.href = "../index.html";

}, 1500);

});
