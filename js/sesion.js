// Busca el elemento del header donde se muestra la información de sesión.

const sesionHeader = 
    document.getElementById( 
        "sesion-header" 
    ); 


// Obtiene el usuario activo guardado en localStorage y lo convierte desde JSON a objeto JavaScript.

const usuarioActivo = 
    JSON.parse( 
        localStorage.getItem( 
            "usuarioActivo" 
        ) 
    ); 


// Verifica que exista el elemento del header y también un usuario con sesión iniciada.

if ( 
    sesionHeader && 
    usuarioActivo 
) { 

    // Limpia el contenido anterior del header para reemplazar el botón de iniciar sesión.

    sesionHeader.innerHTML = 
        ""; 


    // Crea un elemento span para mostrar el nombre del usuario.

    const nombreUsuario = 
        document.createElement( 
            "span" 
        ); 


    // Agrega una clase CSS al elemento que mostrará el nombre.

    nombreUsuario.classList.add( 
        "nombre-usuario" 
    ); 


    // Muestra el nombre, nombre completo o correo según cuál esté disponible.

    nombreUsuario.textContent = 

        usuarioActivo.nombre || 

        usuarioActivo.nombreCompleto || 

        usuarioActivo.correo; 


    // Agrega el nombre del usuario dentro del header.

    sesionHeader.appendChild( 
        nombreUsuario 
    ); 


    // Obtiene el perfil del usuario buscando distintas propiedades posibles.

    const perfilUsuario = 

        usuarioActivo.tipoUsuario || 

        usuarioActivo.perfil || 

        usuarioActivo.rol || 

        "Cliente"; 


    // Verifica si el usuario es Administrador o Vendedor.

    if ( 
        perfilUsuario === "Administrador" || 
        perfilUsuario === "Vendedor" 
    ) { 

        // Crea un enlace para acceder al área de administración.

        const enlaceAdministracion = 
            document.createElement( 
                "a" 
            ); 


        // Agrega una clase CSS al enlace de administración.

        enlaceAdministracion.classList.add( 
            "boton-IniciarSesion" 
        ); 


        // Coloca el texto Administración dentro del enlace.

        enlaceAdministracion.textContent = 
            "Administración"; 


        // Verifica si la página actual se encuentra dentro de la carpeta pages.

        if ( 
            window.location.pathname.includes( 
                "/pages/" 
            ) 
        ) { 

            // Usa una ruta para volver desde pages hacia la carpeta admin.

            enlaceAdministracion.href = 
                "../admin/index.html"; 

        } else { 

            // Usa la ruta directa hacia admin cuando estamos fuera de pages.

            enlaceAdministracion.href = 
                "admin/index.html"; 

        } 


        // Agrega el enlace de administración dentro del header.

        sesionHeader.appendChild( 
            enlaceAdministracion 
        ); 

    } 


    // Crea el botón utilizado para cerrar la sesión.

    const botonCerrarSesion = 
        document.createElement( 
            "button" 
        ); 


    // Agrega una clase CSS al botón de cerrar sesión.

    botonCerrarSesion.classList.add( 
        "boton-CerrarSesion" 
    ); 


    // Coloca el texto Cerrar Sesión dentro del botón.

    botonCerrarSesion.textContent = 
        "Cerrar Sesión"; 


    // Agrega el botón de cerrar sesión dentro del header.

    sesionHeader.appendChild( 
        botonCerrarSesion 
    ); 


    // Escucha cuando el usuario hace clic en el botón de cerrar sesión.

    botonCerrarSesion.addEventListener( 
        "click", 
        function () { 

            // Elimina del localStorage la información del usuario activo.

            localStorage.removeItem( 
                "usuarioActivo" 
            ); 


            // Recarga la página para actualizar el header después de cerrar sesión.

            location.reload(); 

        } 
    ); 

}