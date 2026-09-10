// Obtiene el usuario activo guardado en localStorage y lo convierte de JSON a objeto JavaScript.
const usuarioActivo =
    JSON.parse(localStorage.getItem("usuarioActivo"));


// Verifica si no existe un usuario con sesión iniciada.
if (!usuarioActivo) {

    // Si no hay una sesión activa, redirige al usuario hacia el login.
    window.location.href =
        "../../pages/login.html";

}

// Verifica si el usuario activo no tiene el rol Administrador.
else if (usuarioActivo.tipoUsuario !== "Administrador") {

    // Si no es Administrador, lo redirige fuera del área de administración.
    window.location.href =
        "../index.html";

}


// Busca el elemento donde se mostrará el nombre del administrador.
const nombreUsuarioAdmin =
    document.getElementById("nombre-usuario-admin");

// Busca el elemento donde se mostrará el perfil del administrador.
const perfilUsuarioAdmin =
    document.getElementById("perfil-usuario-admin");

// Busca el botón utilizado para cerrar la sesión.
const cerrarSesionAdmin =
    document.getElementById("cerrar-sesion-admin");


// Verifica que exista un usuario activo antes de mostrar sus datos.
if (usuarioActivo) {

    // Muestra el nombre del usuario o Administrador si no tiene nombre definido.
    nombreUsuarioAdmin.textContent =
        usuarioActivo.nombre || "Administrador";

    // Muestra el tipo de usuario activo.
    perfilUsuarioAdmin.textContent =
        usuarioActivo.tipoUsuario;

}


// Escucha cuando el usuario hace clic en el botón de cerrar sesión.
cerrarSesionAdmin.addEventListener(
    "click",
    function() {

        // Elimina del localStorage la información del usuario activo.
        localStorage.removeItem("usuarioActivo");

        // Redirige al usuario hacia la página de login.
        window.location.href =
            "../../pages/login.html";

    }
);


// Busca el formulario utilizado para editar un usuario.
const formulario =
    document.getElementById("formulario-editar-usuario");

// Busca el campo donde se muestra el RUN del usuario.
const run =
    document.getElementById("run");

// Busca el campo donde se ingresa el nombre.
const nombre =
    document.getElementById("nombre");

// Busca el campo donde se ingresan los apellidos.
const apellidos =
    document.getElementById("apellidos");

// Busca el campo donde se ingresa el correo.
const correo =
    document.getElementById("correo");

// Busca el campo donde se ingresa la fecha de nacimiento.
const fechaNacimiento =
    document.getElementById("fechaNacimiento");

// Busca el selector de región.
const region =
    document.getElementById("region");

// Busca el selector de comuna.
const comuna =
    document.getElementById("comuna");

// Busca el campo donde se ingresa la dirección.
const direccion =
    document.getElementById("direccion");

// Busca el selector utilizado para cambiar el tipo de usuario.
const tipoUsuario =
    document.getElementById("tipoUsuario");

// Busca el elemento donde se mostrará el resultado de la edición.
const mensajeEdicion =
    document.getElementById("mensaje-edicion");

// Busca la tarjeta que contiene el formulario de edición.
const tarjetaEditar =
    document.getElementById("tarjeta-editar-usuario");

// Busca el elemento que indica que el usuario no fue encontrado.
const mensajeNoEncontrado =
    document.getElementById("mensaje-usuario-no-encontrado");


// Busca el elemento donde se mostrará el error del nombre.
const errorNombre =
    document.getElementById("error-nombre");

// Busca el elemento donde se mostrará el error de los apellidos.
const errorApellidos =
    document.getElementById("error-apellidos");

// Busca el elemento donde se mostrará el error del correo.
const errorCorreo =
    document.getElementById("error-correo");

// Busca el elemento donde se mostrará el error de la región.
const errorRegion =
    document.getElementById("error-region");

// Busca el elemento donde se mostrará el error de la comuna.
const errorComuna =
    document.getElementById("error-comuna");

// Busca el elemento donde se mostrará el error de la dirección.
const errorDireccion =
    document.getElementById("error-direccion");


// Crea un arreglo con las regiones disponibles y sus respectivas comunas.
const regiones = [

    // Define la Región Metropolitana y sus comunas disponibles.
    {
        nombre: "Región Metropolitana de Santiago",

        comunas: [
            "Santiago",
            "Maipú",
            "Puente Alto"
        ]
    },

    // Define la Región de Valparaíso y sus comunas disponibles.
    {
        nombre: "Región de Valparaíso",

        comunas: [
            "Valparaíso",
            "Viña del Mar",
            "Quilpué"
        ]
    },

    // Define la Región de Ñuble y sus comunas disponibles.
    {
        nombre: "Región de Ñuble",

        comunas: [
            "Chillán",
            "San Carlos",
            "Bulnes"
        ]
    },

    // Define la Región del Biobío y sus comunas disponibles.
    {
        nombre: "Región del Biobío",

        comunas: [
            "Concepción",
            "Talcahuano",
            "San Pedro de la Paz",
            "Los Ángeles"
        ]
    },

    // Define la Región de La Araucanía y sus comunas disponibles.
    {
        nombre: "Región de La Araucanía",

        comunas: [
            "Temuco",
            "Pucón",
            "Villarrica"
        ]
    }

];


// Crea una función que carga las regiones disponibles en el selector.
function cargarRegiones() {

    // Coloca inicialmente una opción que solicita seleccionar una región.
    region.innerHTML =
        '<option value="">Seleccione una región</option>';


    // Recorre cada región almacenada en el arreglo.
    regiones.forEach(
        function(item) {

            // Crea una nueva opción para el selector de regiones.
            const opcion =
                document.createElement("option");


            // Guarda el nombre de la región como valor de la opción.
            opcion.value =
                item.nombre;


            // Muestra el nombre de la región como texto visible.
            opcion.textContent =
                item.nombre;


            // Agrega la opción creada dentro del selector de regiones.
            region.appendChild(opcion);

        }
    );

}


// Crea una función que carga las comunas correspondientes a una región.
function cargarComunas(
    regionSeleccionada,
    comunaSeleccionada = ""
) {

    // Coloca inicialmente una opción que solicita seleccionar una comuna.
    comuna.innerHTML =
        '<option value="">Seleccione una comuna</option>';


    // Busca dentro del arreglo la región que coincida con la región seleccionada.
    const datosRegion =
        regiones.find(
            function(item) {

                // Compara el nombre de cada región con la región seleccionada.
                return item.nombre ===
                    regionSeleccionada;

            }
        );


    // Verifica si no se encontró información para la región seleccionada.
    if (!datosRegion) {

        // Detiene la función si la región no existe.
        return;

    }


    // Recorre todas las comunas pertenecientes a la región encontrada.
    datosRegion.comunas.forEach(
        function(nombreComuna) {

            // Crea una nueva opción para el selector de comunas.
            const opcion =
                document.createElement("option");


            // Guarda el nombre de la comuna como valor de la opción.
            opcion.value =
                nombreComuna;


            // Muestra el nombre de la comuna como texto visible.
            opcion.textContent =
                nombreComuna;


            // Verifica si esta comuna corresponde a la comuna que tenía el usuario.
            if (
                nombreComuna ===
                comunaSeleccionada
            ) {

                // Deja seleccionada automáticamente la comuna correspondiente.
                opcion.selected = true;

            }


            // Agrega la opción creada dentro del selector de comunas.
            comuna.appendChild(opcion);

        }
    );

}


// Escucha cuando el usuario cambia la región seleccionada.
region.addEventListener(
    "change",
    function() {

        // Carga las comunas correspondientes a la nueva región seleccionada.
        cargarComunas(
            region.value
        );

    }
);


// Crea una función que obtiene todos los usuarios guardados en localStorage.
function obtenerUsuarios() {

    // Devuelve el arreglo de usuarios o un arreglo vacío si no existen usuarios.
    return JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

}


// Obtiene los parámetros existentes en la URL actual.
const parametros =
    new URLSearchParams(
        window.location.search
    );


// Obtiene específicamente el correo enviado mediante el parámetro correo.
const correoOriginal =
    parametros.get("correo");


// Crea una función que busca al usuario que se desea editar.
function buscarUsuario() {

    // Obtiene todos los usuarios almacenados.
    const usuarios =
        obtenerUsuarios();


    // Busca el primer usuario cuyo correo coincida con el correo recibido por URL.
    return usuarios.find(
        function(usuario) {

            // Compara el correo de cada usuario con el correo original.
            return usuario.correo ===
                correoOriginal;

        }
    );

}


// Crea una función que carga en el formulario los datos del usuario encontrado.
function cargarUsuario(usuario) {

    // Coloca el RUN del usuario o deja el campo vacío si no existe.
    run.value =
        usuario.run || "";

    // Coloca el nombre del usuario o deja el campo vacío si no existe.
    nombre.value =
        usuario.nombre || "";

    // Coloca los apellidos del usuario o deja el campo vacío si no existen.
    apellidos.value =
        usuario.apellidos || "";

    // Coloca el correo del usuario o deja el campo vacío si no existe.
    correo.value =
        usuario.correo || "";

    // Coloca la fecha de nacimiento o deja el campo vacío si no existe.
    fechaNacimiento.value =
        usuario.fechaNacimiento || "";

    // Coloca la dirección o deja el campo vacío si no existe.
    direccion.value =
        usuario.direccion || "";

    // Coloca el tipo de usuario o Cliente si no tiene uno definido.
    tipoUsuario.value =
        usuario.tipoUsuario || "Cliente";


    // Carga todas las regiones disponibles en el selector.
    cargarRegiones();


    // Selecciona la región que tiene actualmente el usuario.
    region.value =
        usuario.region || "";


    // Carga las comunas de la región y selecciona la comuna actual del usuario.
    cargarComunas(
        usuario.region,
        usuario.comuna
    );

}


// Crea una función encargada de limpiar los mensajes de error.
function limpiarErrores() {

    // Limpia el mensaje de error del nombre.
    errorNombre.textContent = "";

    // Limpia el mensaje de error de los apellidos.
    errorApellidos.textContent = "";

    // Limpia el mensaje de error del correo.
    errorCorreo.textContent = "";

    // Limpia el mensaje de error de la región.
    errorRegion.textContent = "";

    // Limpia el mensaje de error de la comuna.
    errorComuna.textContent = "";

    // Limpia el mensaje de error de la dirección.
    errorDireccion.textContent = "";

    // Limpia el mensaje general de edición.
    mensajeEdicion.textContent = "";

}


// Crea una función encargada de validar los datos ingresados.
function validarFormulario() {

    // Limpia los errores anteriores antes de realizar una nueva validación.
    limpiarErrores();


    // Parte suponiendo que el formulario es válido.
    let valido = true;


    // Obtiene el nombre ingresado eliminando espacios al principio y al final.
    const nombreIngresado =
        nombre.value.trim();

    // Obtiene los apellidos ingresados eliminando espacios innecesarios.
    const apellidosIngresados =
        apellidos.value.trim();

    // Obtiene el correo, elimina espacios y lo convierte a minúsculas.
    const correoIngresado =
        correo.value.trim().toLowerCase();

    // Obtiene la dirección eliminando espacios innecesarios.
    const direccionIngresada =
        direccion.value.trim();


    // Verifica que el nombre no esté vacío.
    if (nombreIngresado === "") {

        // Muestra un mensaje indicando que el nombre es obligatorio.
        errorNombre.textContent =
            "El nombre es obligatorio.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que los apellidos no estén vacíos.
    if (apellidosIngresados === "") {

        // Muestra un mensaje indicando que los apellidos son obligatorios.
        errorApellidos.textContent =
            "Los apellidos son obligatorios.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que el correo no esté vacío.
    if (correoIngresado === "") {

        // Muestra un mensaje indicando que el correo es obligatorio.
        errorCorreo.textContent =
            "El correo es obligatorio.";

        // Marca el formulario como inválido.
        valido = false;

    }

    // Verifica que el correo termine en alguno de los dominios permitidos.
    else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        // Muestra un mensaje indicando que el correo no tiene un formato permitido.
        errorCorreo.textContent =
            "Ingrese un correo válido.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya seleccionado una región.
    if (region.value === "") {

        // Muestra un mensaje indicando que se debe seleccionar una región.
        errorRegion.textContent =
            "Seleccione una región.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya seleccionado una comuna.
    if (comuna.value === "") {

        // Muestra un mensaje indicando que se debe seleccionar una comuna.
        errorComuna.textContent =
            "Seleccione una comuna.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que la dirección no esté vacía.
    if (direccionIngresada === "") {

        // Muestra un mensaje indicando que la dirección es obligatoria.
        errorDireccion.textContent =
            "La dirección es obligatoria.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Devuelve true si todo está correcto o false si existe algún error.
    return valido;

}


// Escucha cuando el usuario intenta enviar el formulario de edición.
formulario.addEventListener(
    "submit",
    function(evento) {

        // Evita que el formulario recargue automáticamente la página.
        evento.preventDefault();


        // Ejecuta la validación y detiene el guardado si existe algún error.
        if (!validarFormulario()) {

            // Detiene la función para evitar guardar datos incorrectos.
            return;

        }


        // Obtiene nuevamente todos los usuarios guardados.
        const usuarios =
            obtenerUsuarios();


        // Busca la posición del usuario que se está editando dentro del arreglo.
        const indice =
            usuarios.findIndex(
                function(usuario) {

                    // Compara el correo de cada usuario con el correo original.
                    return usuario.correo ===
                        correoOriginal;

                }
            );


        // Verifica si el usuario no fue encontrado dentro del arreglo.
        if (indice === -1) {

            // Detiene la función porque no existe un usuario para actualizar.
            return;

        }


        // Obtiene el nuevo correo ingresado, elimina espacios y lo convierte a minúsculas.
        const nuevoCorreo =
            correo.value
                .trim()
                .toLowerCase();


        // Comprueba si otro usuario ya está utilizando el nuevo correo.
        const correoRepetido =
            usuarios.some(
                function(usuario, posicion) {

                    // Ignora al usuario actual y compara el correo con los demás usuarios.
                    return (
                        posicion !== indice &&
                        usuario.correo === nuevoCorreo
                    );

                }
            );


        // Verifica si se encontró otro usuario con el mismo correo.
        if (correoRepetido) {

            // Muestra un mensaje indicando que el correo ya está registrado.
            errorCorreo.textContent =
                "Este correo ya está registrado.";

            // Detiene la actualización para evitar usuarios con correos duplicados.
            return;

        }


        // Actualiza el nombre del usuario con el nuevo valor ingresado.
        usuarios[indice].nombre =
            nombre.value.trim();

        // Actualiza los apellidos del usuario.
        usuarios[indice].apellidos =
            apellidos.value.trim();

        // Actualiza el correo utilizando el valor normalizado.
        usuarios[indice].correo =
            nuevoCorreo;

        // Actualiza la fecha de nacimiento.
        usuarios[indice].fechaNacimiento =
            fechaNacimiento.value;

        // Actualiza la región seleccionada.
        usuarios[indice].region =
            region.value;

        // Actualiza la comuna seleccionada.
        usuarios[indice].comuna =
            comuna.value;

        // Actualiza la dirección.
        usuarios[indice].direccion =
            direccion.value.trim();

        // Actualiza el tipo de usuario.
        usuarios[indice].tipoUsuario =
            tipoUsuario.value;


        // Guarda nuevamente todo el arreglo de usuarios dentro de localStorage.
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        // Verifica si el usuario editado corresponde al usuario que tiene la sesión iniciada.
        if (
            usuarioActivo.correo ===
            correoOriginal
        ) {

            // Actualiza también la información de usuarioActivo en localStorage.
            localStorage.setItem(
                "usuarioActivo",
                JSON.stringify(
                    usuarios[indice]
                )
            );

        }


        // Muestra un mensaje indicando que el usuario fue actualizado correctamente.
        mensajeEdicion.textContent =
            "Usuario actualizado correctamente.";


        // Ejecuta una acción después de 1200 milisegundos.
        setTimeout(
            function() {

                // Redirige hacia el detalle del usuario utilizando el nuevo correo en la URL.
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


// Busca al usuario que corresponde al correo recibido en la URL.
const usuarioEncontrado =
    buscarUsuario();


// Verifica si el usuario fue encontrado.
if (usuarioEncontrado) {

    // Hace visible la tarjeta que contiene el formulario de edición.
    tarjetaEditar.style.display =
        "block";

    // Oculta el mensaje que indica que el usuario no fue encontrado.
    mensajeNoEncontrado.style.display =
        "none";

    // Carga los datos del usuario encontrado dentro del formulario.
    cargarUsuario(
        usuarioEncontrado
    );

}

// Se ejecuta cuando no se encontró ningún usuario con ese correo.
else {

    // Oculta la tarjeta de edición porque no existe un usuario para editar.
    tarjetaEditar.style.display =
        "none";

    // Muestra el mensaje que indica que el usuario no fue encontrado.
    mensajeNoEncontrado.style.display =
        "block";

}