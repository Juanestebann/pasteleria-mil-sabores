// Obtiene los elementos principales del formulario de registro.

// Busca el formulario utilizado para registrar nuevos usuarios.
const formularioRegistro = document.getElementById("formulario-registro");

// Busca el campo donde se ingresa el RUN.
const run = document.getElementById("run");
// Busca el campo donde se ingresa el nombre.
const nombre = document.getElementById("nombre");
// Busca el campo donde se ingresan los apellidos.
const apellidos = document.getElementById("apellidos");
// Busca el campo donde se ingresa el correo.
const correo = document.getElementById("correo");
// Busca el campo donde se selecciona la fecha de nacimiento.
const fechaNacimiento = document.getElementById("fechaNacimiento");
// Busca el selector de región.
const region = document.getElementById("region");
// Busca el selector de comuna.
const comuna = document.getElementById("comuna");
// Busca el campo donde se ingresa la dirección.
const direccion = document.getElementById("direccion");
// Busca el campo donde se ingresa la contraseña.
const contrasena = document.getElementById("contrasena");
// Busca el campo donde se confirma la contraseña.
const confirmarContrasena = document.getElementById("confirmarContrasena");
// Busca el elemento donde se mostrará el mensaje del registro.
const mensajeRegistro =
    document.getElementById("mensaje-registro");


// Obtiene los elementos donde se mostrarán los mensajes de error.

// Busca el elemento donde se mostrará el error del RUN.
const errorRun = document.getElementById("error-run");
// Busca el elemento donde se mostrará el error del nombre.
const errorNombre = document.getElementById("error-nombre");
// Busca el elemento donde se mostrará el error de los apellidos.
const errorApellidos = document.getElementById("error-apellidos");
// Busca el elemento donde se mostrará el error del correo.
const errorCorreo = document.getElementById("error-correo");
// Busca el elemento donde se mostrará el error de la fecha.
const errorFecha = document.getElementById("error-fecha");
// Busca el elemento donde se mostrará el error de la región.
const errorRegion = document.getElementById("error-region");
// Busca el elemento donde se mostrará el error de la comuna.
const errorComuna = document.getElementById("error-comuna");
// Busca el elemento donde se mostrará el error de la dirección.
const errorDireccion = document.getElementById("error-direccion");
// Busca el elemento donde se mostrará el error de la contraseña.
const errorContrasena = document.getElementById("error-contrasena");
// Busca el elemento donde se mostrará el error de confirmación de contraseña.
const errorConfirmarContrasena =
    document.getElementById("error-confirmar-contrasena");


// Crea el listado de regiones de Chile y sus respectivas comunas.

// Crea un arreglo con las regiones y comunas disponibles.
const regiones = [

    // Define la Región de Arica y Parinacota con sus comunas.
    {
        nombre: "Región de Arica y Parinacota",

        comunas: [
            "Arica",
            "Camarones",
            "General Lagos",
            "Putre"
        ]
    },


    // Define la Región de Tarapacá con sus comunas.
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


    // Define la Región de Antofagasta con sus comunas.
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


    // Define la Región de Atacama con sus comunas.
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


    // Define la Región de Coquimbo con sus comunas.
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


    // Define la Región de Valparaíso con sus comunas.
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


    // Define la Región Metropolitana de Santiago con sus comunas.
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


    // Define la Región de O'Higgins con sus comunas.
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


    // Define la Región del Maule con sus comunas.
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


    // Define la Región de Ñuble con sus comunas.
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


    // Define la Región del Biobío con sus comunas.
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


    // Define la Región de La Araucanía con sus comunas.
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


    // Define la Región de Los Ríos con sus comunas.
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


    // Define la Región de Los Lagos con sus comunas.
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


    // Define la Región de Aysén con sus comunas.
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


    // Define la Región de Magallanes y de la Antártica Chilena con sus comunas.
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
            "San Gregorio",
            "Timaukel",
            "Torres del Paine"
        ]
    }

];


// Crea una función que carga las regiones disponibles en el selector.
function cargarRegiones() {

    // Limpia las opciones anteriores del selector de región.
    region.innerHTML = "";

    // Crea la opción inicial que solicita seleccionar una región.
    const opcionInicial = document.createElement("option");

    // Deja vacío el valor de la opción inicial.
    opcionInicial.value = "";

    // Muestra el texto inicial del selector.
    opcionInicial.textContent = "Seleccione una región";

    // Agrega la opción inicial al selector de región.
    region.appendChild(opcionInicial);


    // Recorre todas las regiones disponibles.
    regiones.forEach(function(item) {

        // Crea una nueva opción para una región.
        const opcion = document.createElement("option");

        // Usa el nombre de la región como valor.
        opcion.value = item.nombre;

        // Muestra el nombre de la región.
        opcion.textContent = item.nombre;

        // Agrega la región al selector.
        region.appendChild(opcion);
    });
}


// Crea una función que carga las comunas correspondientes a la región seleccionada.
function cargarComunas() {

    // Limpia las comunas mostradas anteriormente.
    comuna.innerHTML = "";

    // Crea la opción inicial del selector de comunas.
    const opcionInicial = document.createElement("option");

    // Deja vacío el valor de la opción inicial.
    opcionInicial.value = "";

    // Muestra el texto inicial del selector.
    opcionInicial.textContent = "Seleccione una comuna";

    // Agrega la opción inicial al selector de comunas.
    comuna.appendChild(opcionInicial);


    // Busca en el arreglo la región que seleccionó el usuario.
    const regionSeleccionada = regiones.find(function(item) {

        // Compara el nombre de cada región con el valor seleccionado.
        return item.nombre === region.value;
    });


    // Verifica que se haya encontrado la región seleccionada.
    if (regionSeleccionada) {

        // Recorre todas las comunas pertenecientes a la región.
        regionSeleccionada.comunas.forEach(function(nombreComuna) {

            // Crea una nueva opción para una comuna.
            const opcion = document.createElement("option");

            // Usa el nombre de la comuna como valor.
            opcion.value = nombreComuna;

            // Muestra el nombre de la comuna.
            opcion.textContent = nombreComuna;

            // Agrega la comuna al selector.
            comuna.appendChild(opcion);
        });
    }
}


// Escucha cuando el usuario cambia la región seleccionada.
region.addEventListener("change", function() {

    // Actualiza las comunas según la nueva región.
    cargarComunas();
});


// Carga las regiones automáticamente al abrir la página.
cargarRegiones();


// Crea una función que valida un RUN chileno utilizando su dígito verificador.
function validarRun(runIngresado) {

    // Verifica que el RUN tenga entre 7 y 9 caracteres.
    if (runIngresado.length < 7 || runIngresado.length > 9) {

        // Devuelve false si el largo del RUN no es válido.
        return false;
    }

    // Verifica que el RUN no contenga puntos ni guion.
    if (runIngresado.includes(".") || runIngresado.includes("-")) {

        // Devuelve false si contiene puntos o guion.
        return false;
    }

    // Obtiene la parte numérica del RUN sin el dígito verificador.
    const cuerpo = runIngresado.slice(0, -1);

    // Obtiene el último carácter correspondiente al dígito verificador.
    const digitoIngresado = runIngresado.slice(-1).toUpperCase();

    // Verifica que el cuerpo del RUN contenga solamente números.
    if (isNaN(cuerpo)) {

        // Devuelve false si el cuerpo no es numérico.
        return false;
    }

    // Crea una variable que acumulará el resultado del cálculo.
    let suma = 0;

    // Inicia el multiplicador en 2.
    let multiplicador = 2;


    // Recorre el cuerpo del RUN desde el último número hacia el primero.
    for (let i = cuerpo.length - 1; i >= 0; i--) {

        // Multiplica cada número por el multiplicador y lo suma al acumulador.
        suma += Number(cuerpo[i]) * multiplicador;

        // Aumenta el multiplicador.
        multiplicador++;

        // Reinicia el multiplicador cuando llega a 8.
        if (multiplicador === 8) {
            multiplicador = 2;
        }
    }


    // Calcula el resto necesario para determinar el dígito verificador.
    const resto = 11 - (suma % 11);

    // Crea una variable para guardar el dígito verificador calculado.
    let digitoCalculado;

    // Si el resultado es 11, el dígito verificador corresponde a cero.
    if (resto === 11) {

        digitoCalculado = "0";

    // Si el resultado es 10, el dígito verificador corresponde a K.
    } else if (resto === 10) {

        digitoCalculado = "K";

    // Para los demás resultados utiliza directamente el número calculado.
    } else {

        digitoCalculado = String(resto);
    }


    // Devuelve true si el dígito calculado coincide con el ingresado.
    return digitoCalculado === digitoIngresado;
}


// Crea una función que limpia todos los mensajes de error anteriores.
function limpiarErrores() {

    // Limpia el error del RUN.
    errorRun.textContent = "";

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
    errorConfirmarContrasena.textContent = "";
}


// Escucha cuando el usuario intenta enviar el formulario de registro.
formularioRegistro.addEventListener("submit", function(evento) {

    // Evita que el formulario recargue automáticamente la página.
    evento.preventDefault();

    // Limpia los errores mostrados anteriormente.
    limpiarErrores();

    // Parte suponiendo que el formulario es válido.
    let formularioValido = true;


    // Obtiene el RUN, elimina espacios y lo convierte a mayúsculas.
    const runIngresado = run.value.trim().toUpperCase();

    // Obtiene el nombre y elimina espacios innecesarios.
    const nombreIngresado = nombre.value.trim();

    // Obtiene los apellidos y elimina espacios innecesarios.
    const apellidosIngresados = apellidos.value.trim();

    // Obtiene el correo, elimina espacios y lo convierte a minúsculas.
    const correoIngresado = correo.value.trim().toLowerCase();

    // Obtiene la dirección y elimina espacios innecesarios.
    const direccionIngresada = direccion.value.trim();

    // Obtiene la contraseña ingresada.
    const contrasenaIngresada = contrasena.value;

    // Obtiene la contraseña escrita en el campo de confirmación.
    const confirmarIngresada = confirmarContrasena.value;


    // Verifica que se haya ingresado un RUN.
    if (runIngresado === "") {

        // Muestra el mensaje de error del RUN.
        errorRun.textContent = "El RUN es obligatorio.";

        // Marca el formulario como inválido.
        formularioValido = false;

    // Verifica que el RUN ingresado sea válido.
    } else if (!validarRun(runIngresado)) {

        errorRun.textContent =
            "Ingrese un RUN válido, sin puntos ni guion.";

        formularioValido = false;
    }


    // Verifica que el nombre no esté vacío.
    if (nombreIngresado === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        formularioValido = false;

    // Verifica que el nombre no supere los 50 caracteres.
    } else if (nombreIngresado.length > 50) {

        errorNombre.textContent =
            "El nombre no puede superar los 50 caracteres.";

        formularioValido = false;
    }


    // Verifica que los apellidos no estén vacíos.
    if (apellidosIngresados === "") {

        errorApellidos.textContent =
            "Los apellidos son obligatorios.";

        formularioValido = false;

    // Verifica que los apellidos no superen los 100 caracteres.
    } else if (apellidosIngresados.length > 100) {

        errorApellidos.textContent =
            "Los apellidos no pueden superar los 100 caracteres.";

        formularioValido = false;
    }


    // Verifica que el correo no esté vacío.
    if (correoIngresado === "") {

        errorCorreo.textContent =
            "El correo es obligatorio.";

        formularioValido = false;

    // Verifica que el correo no supere los 100 caracteres.
    } else if (correoIngresado.length > 100) {

        errorCorreo.textContent =
            "El correo no puede superar los 100 caracteres.";

        formularioValido = false;

    // Verifica que el correo utilice uno de los dominios permitidos.
    } else if (
        !correoIngresado.endsWith("@duoc.cl") &&
        !correoIngresado.endsWith("@profesor.duoc.cl") &&
        !correoIngresado.endsWith("@gmail.com")
    ) {

        errorCorreo.textContent =
            "Ingrese un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        formularioValido = false;
    }


    // Verifica la fecha solamente si el usuario ingresó una.
    if (fechaNacimiento.value !== "") {

        // Convierte el valor ingresado en una fecha.
        const fechaIngresada = new Date(fechaNacimiento.value);

        // Obtiene la fecha actual.
        const fechaActual = new Date();

        // Verifica que la fecha de nacimiento no sea futura.
        if (fechaIngresada > fechaActual) {

            errorFecha.textContent =
                "La fecha de nacimiento no puede ser futura.";

            formularioValido = false;
        }
    }


    // Verifica que se haya seleccionado una región.
    if (region.value === "") {

        errorRegion.textContent =
            "Debe seleccionar una región.";

        formularioValido = false;
    }


    // Verifica que se haya seleccionado una comuna.
    if (comuna.value === "") {

        errorComuna.textContent =
            "Debe seleccionar una comuna.";

        formularioValido = false;
    }


    // Verifica que la dirección no esté vacía.
    if (direccionIngresada === "") {

        errorDireccion.textContent =
            "La dirección es obligatoria.";

        formularioValido = false;

    // Verifica que la dirección no supere los 300 caracteres.
    } else if (direccionIngresada.length > 300) {

        errorDireccion.textContent =
            "La dirección no puede superar los 300 caracteres.";

        formularioValido = false;
    }


    // Verifica que la contraseña no esté vacía.
    if (contrasenaIngresada === "") {

        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        formularioValido = false;

    // Verifica que la contraseña tenga entre 4 y 10 caracteres.
    } else if (
        contrasenaIngresada.length < 4 ||
        contrasenaIngresada.length > 10
    ) {

        errorContrasena.textContent =
            "La contraseña debe tener entre 4 y 10 caracteres.";

        formularioValido = false;
    }


    // Verifica que el usuario haya confirmado la contraseña.
    if (confirmarIngresada === "") {

        errorConfirmarContrasena.textContent =
            "Debe confirmar la contraseña.";

        formularioValido = false;

    // Verifica que ambas contraseñas sean iguales.
    } else if (confirmarIngresada !== contrasenaIngresada) {

        errorConfirmarContrasena.textContent =
            "Las contraseñas no coinciden.";

        formularioValido = false;
    }


    // Verifica si alguna de las validaciones encontró un error.
    if (!formularioValido) {

        // Detiene el registro si existen errores.
        return;
    }


    // Obtiene los usuarios guardados o crea un arreglo vacío si no existen.
    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    // Comprueba si algún usuario ya tiene registrado el mismo correo.
    const correoExiste = usuarios.some(function(usuario) {

        // Compara el correo almacenado con el correo ingresado.
        return usuario.correo === correoIngresado;
    });


    // Verifica si el correo ya se encuentra registrado.
    if (correoExiste) {

        errorCorreo.textContent =
            "Este correo ya se encuentra registrado.";

        return;
    }


    // Comprueba si algún usuario ya tiene registrado el mismo RUN.
    const runExiste = usuarios.some(function(usuario) {

        // Compara el RUN almacenado con el RUN ingresado.
        return usuario.run === runIngresado;
    });


    // Verifica si el RUN ya se encuentra registrado.
    if (runExiste) {

        errorRun.textContent =
            "Este RUN ya se encuentra registrado.";

        return;
    }


    // Crea un objeto con todos los datos del nuevo usuario.
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


    // Agrega el nuevo usuario al arreglo.
    usuarios.push(nuevoUsuario);

    // Guarda el arreglo actualizado de usuarios en localStorage.
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );


    // Muestra el mensaje indicando que el usuario fue registrado correctamente.
mensajeRegistro.textContent =
    "Usuario creado exitosamente.";


// Guarda al nuevo usuario como usuario activo.
localStorage.setItem(
    "usuarioActivo",
    JSON.stringify(nuevoUsuario)
);


// Espera un momento antes de realizar la redirección.
setTimeout(function() {

    // Redirige al usuario hacia la página principal.
    window.location.href = "../index.html";

}, 1500);

});
