// =========================================
// NUEVO USUARIO
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
    document.getElementById("formulario-nuevo-usuario");

const run =
    document.getElementById("run");

const tipoUsuario =
    document.getElementById("tipoUsuario");

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

const contrasena =
    document.getElementById("contrasena");

const confirmarContrasena =
    document.getElementById("confirmarContrasena");

const mensajeNuevoUsuario =
    document.getElementById("mensaje-nuevo-usuario");


// =========================================
// ERRORES
// =========================================

const errorRun =
    document.getElementById("error-run");

const errorTipo =
    document.getElementById("error-tipo");

const errorNombre =
    document.getElementById("error-nombre");

const errorApellidos =
    document.getElementById("error-apellidos");

const errorCorreo =
    document.getElementById("error-correo");

const errorFecha =
    document.getElementById("error-fecha");

const errorRegion =
    document.getElementById("error-region");

const errorComuna =
    document.getElementById("error-comuna");

const errorDireccion =
    document.getElementById("error-direccion");

const errorContrasena =
    document.getElementById("error-contrasena");

const errorConfirmar =
    document.getElementById("error-confirmar");


// =========================================
// REGIONES / COMUNAS
// =========================================

const regiones = [

    // =========================================
    // ARICA Y PARINACOTA
    // =========================================
    {
        nombre: "Región de Arica y Parinacota",

        comunas: [
            "Arica",
            "Camarones",
            "General Lagos",
            "Putre"
        ]
    },


    // =========================================
    // TARAPACÁ
    // =========================================
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


    // =========================================
    // ANTOFAGASTA
    // =========================================
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


    // =========================================
    // ATACAMA
    // =========================================
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


    // =========================================
    // COQUIMBO
    // =========================================
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


    // =========================================
    // VALPARAÍSO
    // =========================================
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


    // =========================================
    // METROPOLITANA
    // =========================================
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


    // =========================================
    // O'HIGGINS
    // =========================================
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


    // =========================================
    // MAULE
    // =========================================
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


    // =========================================
    // ÑUBLE
    // =========================================
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


    // =========================================
    // BIOBÍO
    // =========================================
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


    // =========================================
    // LA ARAUCANÍA
    // =========================================
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


    // =========================================
    // LOS RÍOS
    // =========================================
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


    // =========================================
    // LOS LAGOS
    // =========================================
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


    // =========================================
    // AYSÉN
    // =========================================
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


    // =========================================
    // MAGALLANES
    // =========================================
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

function cargarComunas(regionSeleccionada) {

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
// LIMPIAR ERRORES
// =========================================

function limpiarErrores() {

    errorRun.textContent = "";

    errorTipo.textContent = "";

    errorNombre.textContent = "";

    errorApellidos.textContent = "";

    errorCorreo.textContent = "";

    errorFecha.textContent = "";

    errorRegion.textContent = "";

    errorComuna.textContent = "";

    errorDireccion.textContent = "";

    errorContrasena.textContent = "";

    errorConfirmar.textContent = "";

    mensajeNuevoUsuario.textContent = "";

}


// =========================================
// VALIDAR FORMULARIO
// =========================================

function validarFormulario() {

    limpiarErrores();


    let valido = true;


    const runIngresado =
        run.value.trim();

    const nombreIngresado =
        nombre.value.trim();

    const apellidosIngresados =
        apellidos.value.trim();

    const correoIngresado =
        correo.value.trim().toLowerCase();

    const direccionIngresada =
        direccion.value.trim();

    const contrasenaIngresada =
        contrasena.value;


    // RUN
    if (runIngresado === "") {

        errorRun.textContent =
            "El RUN es obligatorio.";

        valido = false;

    }


    // ROL
    if (tipoUsuario.value === "") {

        errorTipo.textContent =
            "Seleccione un rol.";

        valido = false;

    }


    // NOMBRE
    if (nombreIngresado === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        valido = false;

    }


    // APELLIDOS
    if (apellidosIngresados === "") {

        errorApellidos.textContent =
            "Los apellidos son obligatorios.";

        valido = false;

    }


    // CORREO
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


    // FECHA
    if (fechaNacimiento.value === "") {

        errorFecha.textContent =
            "Seleccione la fecha de nacimiento.";

        valido = false;

    }


    // REGIÓN
    if (region.value === "") {

        errorRegion.textContent =
            "Seleccione una región.";

        valido = false;

    }


    // COMUNA
    if (comuna.value === "") {

        errorComuna.textContent =
            "Seleccione una comuna.";

        valido = false;

    }


    // DIRECCIÓN
    if (direccionIngresada === "") {

        errorDireccion.textContent =
            "La dirección es obligatoria.";

        valido = false;

    }


    // CONTRASEÑA
    if (contrasenaIngresada === "") {

        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        valido = false;

    }

    else if (contrasenaIngresada.length < 4) {

        errorContrasena.textContent =
            "La contraseña debe tener al menos 4 caracteres.";

        valido = false;

    }


    // CONFIRMAR
    if (confirmarContrasena.value === "") {

        errorConfirmar.textContent =
            "Confirme la contraseña.";

        valido = false;

    }

    else if (
        contrasenaIngresada !==
        confirmarContrasena.value
    ) {

        errorConfirmar.textContent =
            "Las contraseñas no coinciden.";

        valido = false;

    }


    return valido;

}


// =========================================
// CREAR USUARIO
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


        const correoIngresado =
            correo.value
                .trim()
                .toLowerCase();


        const runIngresado =
            run.value
                .trim()
                .toUpperCase();


        // =================================
        // CORREO DUPLICADO
        // =================================

        const correoExiste =
            usuarios.some(
                function(usuario) {

                    return usuario.correo ===
                        correoIngresado;

                }
            );


        if (correoExiste) {

            errorCorreo.textContent =
                "Este correo ya está registrado.";

            return;

        }


        // =================================
        // RUN DUPLICADO
        // =================================

        const runExiste =
            usuarios.some(
                function(usuario) {

                    return (
                        usuario.run &&
                        usuario.run.toUpperCase() ===
                        runIngresado
                    );

                }
            );


        if (runExiste) {

            errorRun.textContent =
                "Este RUN ya está registrado.";

            return;

        }


        // =================================
        // NUEVO USUARIO
        // =================================

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


        // =================================
        // GUARDAR
        // =================================

        usuarios.push(
            nuevoUsuario
        );


        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        // =================================
        // MENSAJE
        // =================================

        mensajeNuevoUsuario.textContent =
            "Usuario creado correctamente.";


        // =================================
        // REDIRECCIONAR
        // =================================

        setTimeout(
            function() {

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


// =========================================
// INICIAR
// =========================================

cargarRegiones();