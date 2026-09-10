// Obtiene el usuario activo guardado en localStorage y lo convierte desde JSON a objeto JavaScript.
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


// Busca la tarjeta donde se mostrarán los datos del usuario.
const tarjetaUsuario = 
    document.getElementById("tarjeta-ver-usuario"); 

// Busca el elemento donde se mostrará el mensaje si el usuario no existe.
const mensajeNoEncontrado = 
    document.getElementById("mensaje-usuario-no-encontrado"); 

// Busca el elemento donde se mostrará el nombre completo del usuario.
const nombreUsuario = 
    document.getElementById("nombre-usuario"); 

// Busca el elemento donde se mostrará el rol del usuario.
const rolUsuario = 
    document.getElementById("rol-usuario"); 

// Busca el elemento donde se mostrará el RUN del usuario.
const datoRun = 
    document.getElementById("dato-run"); 

// Busca el elemento donde se mostrará el correo del usuario.
const datoCorreo = 
    document.getElementById("dato-correo"); 

// Busca el elemento donde se mostrará la fecha de nacimiento del usuario.
const datoFecha = 
    document.getElementById("dato-fecha"); 

// Busca el elemento donde se mostrará el tipo de usuario.
const datoRol = 
    document.getElementById("dato-rol"); 

// Busca el elemento donde se mostrará la región del usuario.
const datoRegion = 
    document.getElementById("dato-region"); 

// Busca el elemento donde se mostrará la comuna del usuario.
const datoComuna = 
    document.getElementById("dato-comuna"); 

// Busca el elemento donde se mostrará la dirección del usuario.
const datoDireccion = 
    document.getElementById("dato-direccion"); 

// Busca el botón que permite editar al usuario.
const botonEditar = 
    document.getElementById("boton-editar-usuario"); 


// Verifica que exista un usuario activo antes de mostrar sus datos.
if (usuarioActivo) { 

    // Muestra el nombre del usuario o Administrador si no tiene un nombre definido.
    nombreUsuarioAdmin.textContent = 
        usuarioActivo.nombre || "Administrador"; 

    // Muestra el tipo de usuario activo.
    perfilUsuarioAdmin.textContent = 
        usuarioActivo.tipoUsuario; 

} 


// Escucha cuando el administrador hace clic en el botón de cerrar sesión.
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


// Obtiene los parámetros enviados en la URL actual.
const parametros = 
    new URLSearchParams( 
        window.location.search 
    ); 


// Obtiene específicamente el valor del parámetro correo.
const correoBuscado = 
    parametros.get("correo"); 


// Crea una función que obtiene todos los usuarios guardados en localStorage.
function obtenerUsuarios() { 

    // Obtiene el contenido almacenado con la clave usuarios.
    const usuariosGuardados = 
        localStorage.getItem("usuarios"); 


    // Verifica si existen usuarios guardados.
    if (usuariosGuardados) { 

        // Convierte el JSON guardado nuevamente en un arreglo de objetos JavaScript.
        return JSON.parse( 
            usuariosGuardados 
        ); 

    } 


    // Devuelve un arreglo vacío si todavía no existen usuarios guardados.
    return []; 
} 


// Crea una función que busca un usuario utilizando su correo.
function buscarUsuarioPorCorreo(correo) { 

    // Obtiene todos los usuarios registrados.
    const usuarios = 
        obtenerUsuarios(); 


    // Busca el primer usuario cuyo correo coincida con el correo recibido.
    return usuarios.find( 
        function(usuario) { 

            // Compara el correo del usuario actual con el correo que se está buscando.
            return usuario.correo === correo; 

        } 
    ); 

} 


// Crea una función que muestra en la página los datos del usuario recibido.
function mostrarUsuario(usuario) { 

    // Obtiene inicialmente el nombre del usuario o deja un texto vacío si no existe.
    let nombreCompleto = 
        usuario.nombre || ""; 


    // Verifica si el usuario tiene apellidos registrados.
    if (usuario.apellidos) { 

        // Agrega los apellidos al nombre para formar el nombre completo.
        nombreCompleto += 
            " " + 
            usuario.apellidos; 

    } 


    // Muestra el nombre completo o Usuario si no existe información.
    nombreUsuario.textContent = 
        nombreCompleto || "Usuario"; 


    // Muestra el tipo de usuario o Cliente si no tiene uno definido.
    rolUsuario.textContent = 
        usuario.tipoUsuario || "Cliente"; 


    // Muestra el RUN del usuario o un guion si no existe.
    datoRun.textContent = 
        usuario.run || "-"; 


    // Muestra el correo del usuario o un guion si no existe.
    datoCorreo.textContent = 
        usuario.correo || "-"; 


    // Muestra la fecha de nacimiento o un guion si no existe.
    datoFecha.textContent = 
        usuario.fechaNacimiento || "-"; 


    // Muestra nuevamente el tipo de usuario o Cliente si no está definido.
    datoRol.textContent = 
        usuario.tipoUsuario || "Cliente"; 


    // Muestra la región del usuario o un guion si no existe.
    datoRegion.textContent = 
        usuario.region || "-"; 


    // Muestra la comuna del usuario o un guion si no existe.
    datoComuna.textContent = 
        usuario.comuna || "-"; 


    // Muestra la dirección del usuario o un guion si no existe.
    datoDireccion.textContent = 
        usuario.direccion || "-"; 


    // Crea la URL para editar al usuario utilizando su correo.
    botonEditar.href = 
        "editar-usuario.html?correo=" + 
        encodeURIComponent( 
            usuario.correo 
        ); 

} 


// Verifica si la URL no contiene un correo para buscar.
if (!correoBuscado) { 

    // Oculta la tarjeta porque no existe un usuario que mostrar.
    tarjetaUsuario.style.display = 
        "none"; 

    // Muestra el mensaje indicando que el usuario no fue encontrado.
    mensajeNoEncontrado.style.display = 
        "block"; 

} 

// Se ejecuta cuando sí existe un correo en la URL.
else { 

    // Busca el usuario cuyo correo coincide con el recibido desde la URL.
    const usuarioEncontrado = 
        buscarUsuarioPorCorreo( 
            correoBuscado 
        ); 


    // Verifica si el usuario fue encontrado.
    if (usuarioEncontrado) { 

        // Hace visible la tarjeta con la información del usuario.
        tarjetaUsuario.style.display = 
            "block"; 

        // Oculta el mensaje de usuario no encontrado.
        mensajeNoEncontrado.style.display = 
            "none"; 

        // Muestra en la página todos los datos del usuario encontrado.
        mostrarUsuario( 
            usuarioEncontrado 
        ); 

    } 

    // Se ejecuta si no existe ningún usuario con el correo buscado.
    else { 

        // Oculta la tarjeta de información del usuario.
        tarjetaUsuario.style.display = 
            "none"; 

        // Muestra el mensaje indicando que el usuario no fue encontrado.
        mensajeNoEncontrado.style.display = 
            "block"; 

    } 

}