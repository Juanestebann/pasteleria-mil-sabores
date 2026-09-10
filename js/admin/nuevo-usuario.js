// Este archivo controla la creación de nuevos usuarios desde el área de administración.

// Obtiene el usuario activo guardado en localStorage y lo convierte desde JSON a objeto JavaScript.
const usuarioActivo =
    JSON.parse(localStorage.getItem("usuarioActivo"));


// Verifica si no existe un usuario con sesión iniciada.
if (!usuarioActivo) {

    // Redirige al usuario hacia la página de login.
    window.location.href =
        "../../pages/login.html";

}

// Verifica si el usuario activo no tiene el rol Administrador.
else if (usuarioActivo.tipoUsuario !== "Administrador") {

    // Redirige al usuario fuera del área de administración.
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

    // Muestra el nombre del administrador en la cabecera.
    nombreUsuarioAdmin.textContent =
        usuarioActivo.nombre || "Administrador";

    // Muestra el tipo de usuario en la cabecera.
    perfilUsuarioAdmin.textContent =
        usuarioActivo.tipoUsuario;

}


// Escucha cuando el administrador hace clic en el botón para cerrar sesión.
cerrarSesionAdmin.addEventListener(
    "click",
    function() {

        // Elimina de localStorage la información del usuario activo.
        localStorage.removeItem("usuarioActivo");

        // Redirige al usuario hacia la página de login.
        window.location.href =
            "../../pages/login.html";

    }
);


// Busca el formulario utilizado para crear un nuevo usuario.
const formulario =
    document.getElementById("formulario-nuevo-usuario");

// Busca el campo donde se ingresa el RUN.
const run =
    document.getElementById("run");

// Busca el selector donde se elige el tipo de usuario.
const tipoUsuario =
    document.getElementById("tipoUsuario");

// Busca el campo donde se ingresa el nombre.
const nombre =
    document.getElementById("nombre");

// Busca el campo donde se ingresan los apellidos.
const apellidos =
    document.getElementById("apellidos");

// Busca el campo donde se ingresa el correo.
const correo =
    document.getElementById("correo");

// Busca el campo donde se selecciona la fecha de nacimiento.
const fechaNacimiento =
    document.getElementById("fechaNacimiento");

// Busca el selector donde se elige la región.
const region =
    document.getElementById("region");

// Busca el selector donde se elige la comuna.
const comuna =
    document.getElementById("comuna");

// Busca el campo donde se ingresa la dirección.
const direccion =
    document.getElementById("direccion");

// Busca el campo donde se ingresa la contraseña.
const contrasena =
    document.getElementById("contrasena");

// Busca el campo donde se confirma la contraseña.
const confirmarContrasena =
    document.getElementById("confirmarContrasena");

// Busca el elemento donde se mostrará el mensaje de creación del usuario.
const mensajeNuevoUsuario =
    document.getElementById("mensaje-nuevo-usuario");


// Busca el elemento donde se mostrará el error del RUN.
const errorRun =
    document.getElementById("error-run");

// Busca el elemento donde se mostrará el error del tipo de usuario.
const errorTipo =
    document.getElementById("error-tipo");

// Busca el elemento donde se mostrará el error del nombre.
const errorNombre =
    document.getElementById("error-nombre");

// Busca el elemento donde se mostrará el error de los apellidos.
const errorApellidos =
    document.getElementById("error-apellidos");

// Busca el elemento donde se mostrará el error del correo.
const errorCorreo =
    document.getElementById("error-correo");

// Busca el elemento donde se mostrará el error de la fecha.
const errorFecha =
    document.getElementById("error-fecha");

// Busca el elemento donde se mostrará el error de la región.
const errorRegion =
    document.getElementById("error-region");

// Busca el elemento donde se mostrará el error de la comuna.
const errorComuna =
    document.getElementById("error-comuna");

// Busca el elemento donde se mostrará el error de la dirección.
const errorDireccion =
    document.getElementById("error-direccion");

// Busca el elemento donde se mostrará el error de la contraseña.
const errorContrasena =
    document.getElementById("error-contrasena");

// Busca el elemento donde se mostrará el error de confirmación de contraseña.
const errorConfirmar =
    document.getElementById("error-confirmar");


// Crea un arreglo que contiene las regiones de Chile y sus comunas.
const regiones = [

    // Define la Región de Arica y Parinacota y sus comunas.
    {
        nombre: "Región de Arica y Parinacota",

        comunas: [
            "Arica",
            "Camarones",
            "General Lagos",
            "Putre"
        ]
    },


    // Define la Región de Tarapacá y sus comunas.
    {
        nombre: "Región de Tarapacá",

        comunas: [
            "Alto Hospicio",
            "Camiña",
            "Colchane",
            "Huara",
            "Iquique",
            "Pica",
            "Pozo Almonte"
        ]
    },


    // Define la Región de Antofagasta y sus comunas.
    {
        nombre: "Región de Antofagasta",

        comunas: [
            "Antofagasta",
            "Calama",
            "María Elena",
            "Mejillones",
            "Ollagüe",
            "San Pedro de Atacama",
            "Sierra Gorda",
            "Taltal",
            "Tocopilla"
        ]
    },


    // Define la Región de Atacama y sus comunas.
    {
        nombre: "Región de Atacama",

        comunas: [
            "Alto del Carmen",
            "Caldera",
            "Chañaral",
            "Copiapó",
            "Diego de Almagro",
            "Freirina",
            "Huasco",
            "Tierra Amarilla",
            "Vallenar"
        ]
    },


    // Define la Región de Coquimbo y sus comunas.
    {
        nombre: "Región de Coquimbo",

        comunas: [
            "Andacollo",
            "Canela",
            "Combarbalá",
            "Coquimbo",
            "Illapel",
            "La Higuera",
            "La Serena",
            "Los Vilos",
            "Monte Patria",
            "Ovalle",
            "Paihuano",
            "Punitaqui",
            "Río Hurtado",
            "Salamanca",
            "Vicuña"
        ]
    },


    // Define la Región de Valparaíso y sus comunas.
    {
        nombre: "Región de Valparaíso",

        comunas: [
            "Algarrobo",
            "Cabildo",
            "Calle Larga",
            "Cartagena",
            "Casablanca",
            "Catemu",
            "Concón",
            "El Quisco",
            "El Tabo",
            "Hijuelas",
            "Isla de Pascua",
            "Juan Fernández",
            "La Calera",
            "La Cruz",
            "La Ligua",
            "Limache",
            "Llaillay",
            "Los Andes",
            "Nogales",
            "Olmué",
            "Panquehue",
            "Papudo",
            "Petorca",
            "Puchuncaví",
            "Putaendo",
            "Quillota",
            "Quilpué",
            "Quintero",
            "Rinconada",
            "San Antonio",
            "San Esteban",
            "San Felipe",
            "Santa María",
            "Santo Domingo",
            "Valparaíso",
            "Villa Alemana",
            "Viña del Mar",
            "Zapallar"
        ]
    },


    // Define la Región Metropolitana de Santiago y sus comunas.
    {
        nombre: "Región Metropolitana de Santiago",

        comunas: [
            "Alhué",
            "Buin",
            "Calera de Tango",
            "Cerrillos",
            "Cerro Navia",
            "Colina",
            "Conchalí",
            "Curacaví",
            "El Bosque",
            "El Monte",
            "Estación Central",
            "Huechuraba",
            "Independencia",
            "Isla de Maipo",
            "La Cisterna",
            "La Florida",
            "La Granja",
            "La Pintana",
            "La Reina",
            "Lampa",
            "Las Condes",
            "Lo Barnechea",
            "Lo Espejo",
            "Lo Prado",
            "Macul",
            "Maipú",
            "María Pinto",
            "Melipilla",
            "Ñuñoa",
            "Padre Hurtado",
            "Paine",
            "Pedro Aguirre Cerda",
            "Peñaflor",
            "Peñalolén",
            "Pirque",
            "Providencia",
            "Pudahuel",
            "Puente Alto",
            "Quilicura",
            "Quinta Normal",
            "Recoleta",
            "Renca",
            "San Bernardo",
            "San Joaquín",
            "San José de Maipo",
            "San Miguel",
            "San Pedro",
            "San Ramón",
            "Santiago",
            "Talagante",
            "Tiltil",
            "Vitacura"
        ]
    },


    // Define la Región de O'Higgins y sus comunas.
    {
        nombre: "Región del Libertador General Bernardo O'Higgins",

        comunas: [
            "Chépica",
            "Chimbarongo",
            "Codegua",
            "Coinco",
            "Coltauco",
            "Doñihue",
            "Graneros",
            "La Estrella",
            "Las Cabras",
            "Litueche",
            "Lolol",
            "Machalí",
            "Malloa",
            "Marchigüe",
            "Mostazal",
            "Nancagua",
            "Navidad",
            "Olivar",
            "Palmilla",
            "Paredones",
            "Peralillo",
            "Peumo",
            "Pichidegua",
            "Pichilemu",
            "Placilla",
            "Pumanque",
            "Quinta de Tilcoco",
            "Rancagua",
            "Rengo",
            "Requínoa",
            "San Fernando",
            "San Vicente",
            "Santa Cruz"
        ]
    },


    // Define la Región del Maule y sus comunas.
    {
        nombre: "Región del Maule",

        comunas: [
            "Cauquenes",
            "Chanco",
            "Colbún",
            "Constitución",
            "Curepto",
            "Curicó",
            "Empedrado",
            "Hualañé",
            "Licantén",
            "Linares",
            "Longaví",
            "Maule",
            "Molina",
            "Parral",
            "Pelarco",
            "Pelluhue",
            "Pencahue",
            "Rauco",
            "Retiro",
            "Río Claro",
            "Romeral",
            "Sagrada Familia",
            "San Clemente",
            "San Javier",
            "San Rafael",
            "Talca",
            "Teno",
            "Vichuquén",
            "Villa Alegre",
            "Yerbas Buenas"
        ]
    },


    // Define la Región de Ñuble y sus comunas.
    {
        nombre: "Región de Ñuble",

        comunas: [
            "Bulnes",
            "Chillán",
            "Chillán Viejo",
            "Cobquecura",
            "Coelemu",
            "Coihueco",
            "El Carmen",
            "Ninhue",
            "Ñiquén",
            "Pemuco",
            "Pinto",
            "Portezuelo",
            "Quillón",
            "Quirihue",
            "Ránquil",
            "San Carlos",
            "San Fabián",
            "San Ignacio",
            "San Nicolás",
            "Treguaco",
            "Yungay"
        ]
    },


    // Define la Región del Biobío y sus comunas.
    {
        nombre: "Región del Biobío",

        comunas: [
            "Alto Biobío",
            "Antuco",
            "Arauco",
            "Cabrero",
            "Cañete",
            "Chiguayante",
            "Concepción",
            "Contulmo",
            "Coronel",
            "Curanilahue",
            "Florida",
            "Hualpén",
            "Hualqui",
            "Laja",
            "Lebu",
            "Los Álamos",
            "Los Ángeles",
            "Lota",
            "Mulchén",
            "Nacimiento",
            "Negrete",
            "Penco",
            "Quilaco",
            "Quilleco",
            "San Pedro de la Paz",
            "San Rosendo",
            "Santa Bárbara",
            "Santa Juana",
            "Talcahuano",
            "Tirúa",
            "Tomé",
            "Tucapel",
            "Yumbel"
        ]
    },


    // Define la Región de La Araucanía y sus comunas.
    {
        nombre: "Región de La Araucanía",

        comunas: [
            "Angol",
            "Carahue",
            "Cholchol",
            "Collipulli",
            "Cunco",
            "Curacautín",
            "Curarrehue",
            "Ercilla",
            "Freire",
            "Galvarino",
            "Gorbea",
            "Lautaro",
            "Loncoche",
            "Lonquimay",
            "Los Sauces",
            "Lumaco",
            "Melipeuco",
            "Nueva Imperial",
            "Padre Las Casas",
            "Perquenco",
            "Pitrufquén",
            "Pucón",
            "Purén",
            "Renaico",
            "Saavedra",
            "Temuco",
            "Teodoro Schmidt",
            "Toltén",
            "Traiguén",
            "Victoria",
            "Vilcún",
            "Villarrica"
        ]
    },


    // Define la Región de Los Ríos y sus comunas.
    {
        nombre: "Región de Los Ríos",

        comunas: [
            "Corral",
            "Futrono",
            "La Unión",
            "Lago Ranco",
            "Lanco",
            "Los Lagos",
            "Máfil",
            "Mariquina",
            "Paillaco",
            "Panguipulli",
            "Río Bueno",
            "Valdivia"
        ]
    },


    // Define la Región de Los Lagos y sus comunas.
    {
        nombre: "Región de Los Lagos",

        comunas: [
            "Ancud",
            "Calbuco",
            "Castro",
            "Chaitén",
            "Chonchi",
            "Cochamó",
            "Curaco de Vélez",
            "Dalcahue",
            "Fresia",
            "Frutillar",
            "Futaleufú",
            "Hualaihué",
            "Llanquihue",
            "Los Muermos",
            "Maullín",
            "Osorno",
            "Palena",
            "Puerto Montt",
            "Puerto Octay",
            "Puerto Varas",
            "Puqueldón",
            "Purranque",
            "Puyehue",
            "Queilén",
            "Quellón",
            "Quemchi",
            "Quinchao",
            "Río Negro",
            "San Juan de la Costa",
            "San Pablo"
        ]
    },


    // Define la Región de Aysén y sus comunas.
    {
        nombre: "Región de Aysén del General Carlos Ibáñez del Campo",

        comunas: [
            "Aysén",
            "Chile Chico",
            "Cisnes",
            "Cochrane",
            "Coyhaique",
            "Guaitecas",
            "Lago Verde",
            "O'Higgins",
            "Río Ibáñez",
            "Tortel"
        ]
    },


    // Define la Región de Magallanes y de la Antártica Chilena y sus comunas.
    {
        nombre: "Región de Magallanes y de la Antártica Chilena",

        comunas: [
            "Antártica",
            "Cabo de Hornos",
            "Laguna Blanca",
            "Natales",
            "Porvenir",
            "Primavera",
            "Punta Arenas",
            "Río Verde",
            "San Gregorio", "Timaukel","Torres del Paine"
        ]
    }

];
// Crea una función que carga todas las regiones en el selector.
function cargarRegiones() {

    // Reinicia el selector de regiones con su opción inicial.
    region.innerHTML =
        '<option value="">Seleccione una región</option>';


    // Recorre todas las regiones disponibles.
    regiones.forEach(
        function(item) {

            // Crea dinámicamente una opción para agregarla al selector.
            const opcion =
                document.createElement("option");


            // Asigna el nombre de la región como valor de la opción.
            opcion.value =
                item.nombre;


            // Define el nombre de la región como texto visible.
            opcion.textContent =
                item.nombre;


            // Agrega la opción creada dentro del selector de regiones.
            region.appendChild(opcion);

        }
    );

}


// Crea una función que recibe una región y carga sus comunas.
function cargarComunas(regionSeleccionada) {

    // Reinicia el selector de comunas con su opción inicial.
    comuna.innerHTML =
        '<option value="">Seleccione una comuna</option>';


    // Busca los datos de la región seleccionada dentro del arreglo.
    const datosRegion =
        regiones.find(
            function(item) {

                // Compara el nombre de cada región con la región seleccionada.
                return item.nombre ===
                    regionSeleccionada;

            }
        );


    // Verifica si la región seleccionada no fue encontrada.
    if (!datosRegion) {

        // Detiene la ejecución si no existe información de la región.
        return;

    }


    // Recorre todas las comunas pertenecientes a la región encontrada.
    datosRegion.comunas.forEach(
        function(nombreComuna) {

            // Crea dinámicamente una nueva opción para la comuna.
            const opcion =
                document.createElement("option");


            // Asigna el nombre de la comuna como valor.
            opcion.value =
                nombreComuna;


            // Define el nombre de la comuna como texto visible.
            opcion.textContent =
                nombreComuna;


            // Agrega la opción creada dentro del selector de comunas.
            comuna.appendChild(opcion);

        }
    );

}


// Escucha cuando el usuario cambia la región seleccionada.
region.addEventListener(
    "change",
    function() {

        // Carga las comunas correspondientes a la región seleccionada.
        cargarComunas(
            region.value
        );

    }
);


// Crea una función que devuelve los usuarios guardados en localStorage.
function obtenerUsuarios() {

    // Obtiene los usuarios y convierte el JSON en un arreglo de objetos.
    return JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

}


// Crea una función que limpia todos los mensajes de error anteriores.
function limpiarErrores() {

    // Limpia el error del RUN.
    errorRun.textContent = "";

    // Limpia el error del tipo de usuario.
    errorTipo.textContent = "";

    // Limpia el error del nombre.
    errorNombre.textContent = "";

    // Limpia el error de los apellidos.
    errorApellidos.textContent = "";

    // Limpia el error del correo.
    errorCorreo.textContent = "";

    // Limpia el error de la fecha.
    errorFecha.textContent = "";

    // Limpia el error de la región.
    errorRegion.textContent = "";

    // Limpia el error de la comuna.
    errorComuna.textContent = "";

    // Limpia el error de la dirección.
    errorDireccion.textContent = "";

    // Limpia el error de la contraseña.
    errorContrasena.textContent = "";

    // Limpia el error de confirmación de contraseña.
    errorConfirmar.textContent = "";

    // Limpia el mensaje general de creación del usuario.
    mensajeNuevoUsuario.textContent = "";

}


// Crea una función que valida todos los campos del formulario.
function validarFormulario() {

    // Limpia todos los mensajes de error antes de validar nuevamente.
    limpiarErrores();


    // Parte suponiendo que el formulario es válido.
    let valido = true;


    // Obtiene el RUN ingresado y elimina espacios innecesarios.
    const runIngresado =
        run.value.trim();

    // Obtiene el nombre ingresado y elimina espacios innecesarios.
    const nombreIngresado =
        nombre.value.trim();

    // Obtiene los apellidos ingresados y elimina espacios innecesarios.
    const apellidosIngresados =
        apellidos.value.trim();

    // Obtiene el correo, elimina espacios y lo convierte a minúsculas.
    const correoIngresado =
        correo.value.trim().toLowerCase();

    // Obtiene la dirección ingresada y elimina espacios innecesarios.
    const direccionIngresada =
        direccion.value.trim();

    // Obtiene la contraseña ingresada.
    const contrasenaIngresada =
        contrasena.value;


    // Verifica que el RUN no esté vacío.
    if (runIngresado === "") {

        // Muestra el mensaje de error correspondiente al RUN.
        errorRun.textContent =
            "El RUN es obligatorio.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya seleccionado un tipo de usuario.
    if (tipoUsuario.value === "") {

        // Muestra el mensaje de error correspondiente al rol.
        errorTipo.textContent =
            "Seleccione un rol.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que el nombre no esté vacío.
    if (nombreIngresado === "") {

        // Muestra el mensaje de error correspondiente al nombre.
        errorNombre.textContent =
            "El nombre es obligatorio.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que los apellidos no estén vacíos.
    if (apellidosIngresados === "") {

        // Muestra el mensaje de error correspondiente a los apellidos.
        errorApellidos.textContent =
            "Los apellidos son obligatorios.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que el correo no esté vacío.
    if (correoIngresado === "") {

        // Muestra el mensaje de error correspondiente al correo.
        errorCorreo.textContent =
            "El correo es obligatorio.";

        // Marca el formulario como inválido.
        valido = false;

    }

    // Verifica que el correo termine con uno de los dominios permitidos.
    else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        // Muestra un mensaje cuando el correo no utiliza un dominio permitido.
        errorCorreo.textContent =
            "Ingrese un correo válido.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya seleccionado una fecha de nacimiento.
    if (fechaNacimiento.value === "") {

        // Muestra el mensaje de error correspondiente a la fecha.
        errorFecha.textContent =
            "Seleccione la fecha de nacimiento.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya seleccionado una región.
    if (region.value === "") {

        // Muestra el mensaje de error correspondiente a la región.
        errorRegion.textContent =
            "Seleccione una región.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya seleccionado una comuna.
    if (comuna.value === "") {

        // Muestra el mensaje de error correspondiente a la comuna.
        errorComuna.textContent =
            "Seleccione una comuna.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que la dirección no esté vacía.
    if (direccionIngresada === "") {

        // Muestra el mensaje de error correspondiente a la dirección.
        errorDireccion.textContent =
            "La dirección es obligatoria.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que la contraseña no esté vacía.
    if (contrasenaIngresada === "") {

        // Muestra el mensaje de error correspondiente a la contraseña.
        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        // Marca el formulario como inválido.
        valido = false;

    }

    // Verifica que la contraseña tenga al menos cuatro caracteres.
    else if (contrasenaIngresada.length < 4) {

        // Muestra el mensaje de longitud mínima de la contraseña.
        errorContrasena.textContent =
            "La contraseña debe tener al menos 4 caracteres.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Verifica que se haya confirmado la contraseña.
    if (confirmarContrasena.value === "") {

        // Muestra el mensaje de error de confirmación.
        errorConfirmar.textContent =
            "Confirme la contraseña.";

        // Marca el formulario como inválido.
        valido = false;

    }

    // Verifica que la contraseña y su confirmación sean iguales.
    else if (
        contrasenaIngresada !==
        confirmarContrasena.value
    ) {

        // Muestra un mensaje cuando las contraseñas no coinciden.
        errorConfirmar.textContent =
            "Las contraseñas no coinciden.";

        // Marca el formulario como inválido.
        valido = false;

    }


    // Devuelve true si todos los datos son válidos o false si existe algún error.
    return valido;

}


// Escucha cuando el administrador intenta enviar el formulario.
formulario.addEventListener(
    "submit",
    function(evento) {

        // Evita que el formulario recargue automáticamente la página.
        evento.preventDefault();


        // Ejecuta la validación y comprueba si existen errores.
        if (!validarFormulario()) {

            // Detiene la ejecución si el formulario no es válido.
            return;

        }


        // Obtiene el arreglo actual de usuarios registrados.
        const usuarios =
            obtenerUsuarios();


        // Obtiene el correo, elimina espacios y lo convierte a minúsculas.
        const correoIngresado =
            correo.value
                .trim()
                .toLowerCase();


        // Obtiene el RUN, elimina espacios y lo convierte a mayúsculas.
        const runIngresado =
            run.value
                .trim()
                .toUpperCase();


        // Comprueba si algún usuario ya tiene registrado el correo ingresado.
        const correoExiste =
            usuarios.some(
                function(usuario) {

                    // Compara el correo almacenado con el correo ingresado.
                    return usuario.correo ===
                        correoIngresado;

                }
            );


        // Verifica si el correo ya se encuentra registrado.
        if (correoExiste) {

            // Muestra un mensaje de correo duplicado.
            errorCorreo.textContent =
                "Este correo ya está registrado.";

            // Detiene la creación del usuario.
            return;

        }


        // Comprueba si algún usuario ya tiene registrado el RUN ingresado.
        const runExiste =
            usuarios.some(
                function(usuario) {

                    // Verifica que exista el RUN y lo compara usando mayúsculas.
                    return (
                        usuario.run &&
                        usuario.run.toUpperCase() ===
                        runIngresado
                    );

                }
            );


        // Verifica si el RUN ya se encuentra registrado.
        if (runExiste) {

            // Muestra un mensaje de RUN duplicado.
            errorRun.textContent =
                "Este RUN ya está registrado.";

            // Detiene la creación del usuario.
            return;

        }


        // Crea un objeto con todos los datos del nuevo usuario.
        const nuevoUsuario = {

            run: runIngresado,

            nombre:
                nombre.value.trim(),

            apellidos:
                apellidos.value.trim(),

            correo:
                correoIngresado,

            fechaNacimiento:
                fechaNacimiento.value,

            region:
                region.value,

            comuna:
                comuna.value,

            direccion:
                direccion.value.trim(),

            contrasena:
                contrasena.value,

            tipoUsuario:
                tipoUsuario.value

        };


        // Agrega el nuevo usuario al arreglo de usuarios.
        usuarios.push(
            nuevoUsuario
        );


        // Guarda el arreglo actualizado de usuarios en localStorage.
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        // Muestra un mensaje indicando que el usuario fue creado correctamente.
        mensajeNuevoUsuario.textContent =
            "Usuario creado correctamente.";


        // Espera 1200 milisegundos antes de redirigir al usuario.
        setTimeout(
            function() {

                // Redirige al detalle del usuario y envía su correo mediante la URL.
                window.location.href =
                    "ver-usuario.html?correo=" +
                    encodeURIComponent(
                        nuevoUsuario.correo
                    );

            },
            1200
        );

    }
);


// Carga las regiones cuando se abre la página.
cargarRegiones();