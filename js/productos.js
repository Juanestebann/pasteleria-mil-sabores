// Crea un arreglo con los productos que tendrá el sistema inicialmente.
const productosIniciales = [

    // Define los datos iniciales de la Torta Cuadrada de Chocolate.
    {
        // Guarda el código único del producto.
        codigo: "TC001",
        // Guarda el nombre del producto.
        nombre: "Torta Cuadrada de Chocolate",
        // Guarda el precio del producto.
        precio: 45000,
        // Guarda la ruta donde se encuentra la imagen.
        imagen: "../img/Torta Cuadrada de Chocolate.png",
        // Guarda la descripción del producto.
        descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
        // Guarda la categoría a la que pertenece el producto.
        categoria: "cuadradas",
        // Guarda la cantidad disponible del producto.
        stock: 10,
        // Guarda la cantidad desde la que se considera stock crítico.
        stockCritico: 3
    },

    // Define los datos iniciales de la Torta Cuadrada de Frutas.
    {
        // Guarda el código único del producto.
        codigo: "TC002",
        // Guarda el nombre del producto.
        nombre: "Torta Cuadrada de Frutas",
        // Guarda el precio del producto.
        precio: 50000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Cuadrada de Frutas.png",
        // Guarda la descripción del producto.
        descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
        // Guarda la categoría del producto.
        categoria: "cuadradas",
        // Guarda la cantidad disponible.
        stock: 2,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 5
    },

    // Define los datos iniciales de la Torta Circular de Vainilla.
    {
        // Guarda el código único del producto.
        codigo: "TT001",
        // Guarda el nombre del producto.
        nombre: "Torta Circular de Vainilla",
        // Guarda el precio del producto.
        precio: 40000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Circular de Vainilla.png",
        // Guarda la descripción del producto.
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
        // Guarda la categoría del producto.
        categoria: "circulares",
        // Guarda la cantidad disponible.
        stock: 12,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 4
    },

    // Define los datos iniciales de la Torta Circular de Manjar.
    {
        // Guarda el código único del producto.
        codigo: "TT002",
        // Guarda el nombre del producto.
        nombre: "Torta Circular de Manjar",
        // Guarda el precio del producto.
        precio: 42000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Circular de Manjar.png",
        // Guarda la descripción del producto.
        descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
        // Guarda la categoría del producto.
        categoria: "circulares",
        // Guarda la cantidad disponible.
        stock: 4,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 4
    },

    // Define los datos iniciales del Mousse de Chocolate.
    {
        // Guarda el código único del producto.
        codigo: "PI001",
        // Guarda el nombre del producto.
        nombre: "Mousse de Chocolate",
        // Guarda el precio del producto.
        precio: 5000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Mousse de Chocolate.png",
        // Guarda la descripción del producto.
        descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
        // Guarda la categoría del producto.
        categoria: "individuales",
        // Guarda la cantidad disponible.
        stock: 20,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 5
    },

    // Define los datos iniciales del Tiramisú Clásico.
    {
        // Guarda el código único del producto.
        codigo: "PI002",
        // Guarda el nombre del producto.
        nombre: "Tiramisú Clásico",
        // Guarda el precio del producto.
        precio: 5500,
        // Guarda la ruta de la imagen.
        imagen: "../img/Tiramisú Clásico.png",
        // Guarda la descripción del producto.
        descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
        // Guarda la categoría del producto.
        categoria: "individuales",
        // Guarda la cantidad disponible.
        stock: 3,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 5
    },

    // Define los datos iniciales de la Torta Sin Azúcar de Naranja.
    {
        // Guarda el código único del producto.
        codigo: "PSA001",
        // Guarda el nombre del producto.
        nombre: "Torta Sin Azúcar de Naranja",
        // Guarda el precio del producto.
        precio: 48000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Sin Azúcar de Naranja.png",
        // Guarda la descripción del producto.
        descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
        // Guarda la categoría del producto.
        categoria: "sin-azucar",
        // Guarda la cantidad disponible.
        stock: 7,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 3
    },

    // Define los datos iniciales del Cheesecake Sin Azúcar.
    {
        // Guarda el código único del producto.
        codigo: "PSA002",
        // Guarda el nombre del producto.
        nombre: "Cheesecake Sin Azúcar",
        // Guarda el precio del producto.
        precio: 47000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Cheesecake Sin Azúcar.png",
        // Guarda la descripción del producto.
        descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
        // Guarda la categoría del producto.
        categoria: "sin-azucar",
        // Guarda la cantidad disponible.
        stock: 2,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 3
    },

    // Define los datos iniciales de la Empanada de Manzana.
    {
        // Guarda el código único del producto.
        codigo: "PT001",
        // Guarda el nombre del producto.
        nombre: "Empanada de Manzana",
        // Guarda el precio del producto.
        precio: 3000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Empanada de Manzana.png",
        // Guarda la descripción del producto.
        descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
        // Guarda la categoría del producto.
        categoria: "tradicional",
        // Guarda la cantidad disponible.
        stock: 25,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 8
    },

    // Define los datos iniciales de la Tarta de Santiago.
    {
        // Guarda el código único del producto.
        codigo: "PT002",
        // Guarda el nombre del producto.
        nombre: "Tarta de Santiago",
        // Guarda el precio del producto.
        precio: 6000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Tarta de Santiago.png",
        // Guarda la descripción del producto.
        descripcion: "Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos.",
        // Guarda la categoría del producto.
        categoria: "tradicional",
        // Guarda la cantidad disponible.
        stock: 8,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 3
    },

    // Define los datos iniciales del Brownie Sin Gluten.
    {
        // Guarda el código único del producto.
        codigo: "PG001",
        // Guarda el nombre del producto.
        nombre: "Brownie Sin Gluten",
        // Guarda el precio del producto.
        precio: 4000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Brownie Sin Gluten.png",
        // Guarda la descripción del producto.
        descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
        // Guarda la categoría del producto.
        categoria: "sin-gluten",
        // Guarda la cantidad disponible.
        stock: 4,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 5
    },

    // Define los datos iniciales del Pan Sin Gluten.
    {
        // Guarda el código único del producto.
        codigo: "PG002",
        // Guarda el nombre del producto.
        nombre: "Pan Sin Gluten",
        // Guarda el precio del producto.
        precio: 3500,
        // Guarda la ruta de la imagen.
        imagen: "../img/Pan Sin Gluten.png",
        // Guarda la descripción del producto.
        descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
        // Guarda la categoría del producto.
        categoria: "sin-gluten",
        // Guarda la cantidad disponible.
        stock: 15,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 5
    },

    // Define los datos iniciales de la Torta Vegana de Chocolate.
    {
        // Guarda el código único del producto.
        codigo: "PV001",
        // Guarda el nombre del producto.
        nombre: "Torta Vegana de Chocolate",
        // Guarda el precio del producto.
        precio: 50000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Vegana de Chocolate.png",
        // Guarda la descripción del producto.
        descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
        // Guarda la categoría del producto.
        categoria: "veganos",
        // Guarda la cantidad disponible.
        stock: 6,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 3
    },

    // Define los datos iniciales de las Galletas Veganas de Avena.
    {
        // Guarda el código único del producto.
        codigo: "PV002",
        // Guarda el nombre del producto.
        nombre: "Galletas Veganas de Avena",
        // Guarda el precio del producto.
        precio: 4500,
        // Guarda la ruta de la imagen.
        imagen: "../img/Galletas Veganas de Avena.png",
        // Guarda la descripción del producto.
        descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
        // Guarda la categoría del producto.
        categoria: "veganos",
        // Guarda la cantidad disponible.
        stock: 18,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 6
    },

    // Define los datos iniciales de la Torta Especial de Cumpleaños.
    {
        // Guarda el código único del producto.
        codigo: "TE001",
        // Guarda el nombre del producto.
        nombre: "Torta Especial de Cumpleaños",
        // Guarda el precio del producto.
        precio: 55000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Especial de Cumpleaños.png",
        // Guarda la descripción del producto.
        descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
        // Guarda la categoría del producto.
        categoria: "especiales",
        // Guarda la cantidad disponible.
        stock: 2,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 2
    },

    // Define los datos iniciales de la Torta Especial de Boda.
    {
        // Guarda el código único del producto.
        codigo: "TE002",
        // Guarda el nombre del producto.
        nombre: "Torta Especial de Boda",
        // Guarda el precio del producto.
        precio: 60000,
        // Guarda la ruta de la imagen.
        imagen: "../img/Torta Especial de Boda.png",
        // Guarda la descripción del producto.
        descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
        // Guarda la categoría del producto.
        categoria: "especiales",
        // Guarda la cantidad disponible.
        stock: 5,
        // Guarda el valor considerado como stock crítico.
        stockCritico: 2
    }

];


// Intenta recuperar desde localStorage los productos que ya existen.
let datosProductos =
    JSON.parse(
        localStorage.getItem("productos")
    );


// Verifica si todavía no existen productos guardados en localStorage.
if (!datosProductos) {

    // Utiliza el arreglo de productos iniciales como datos del sistema.
    datosProductos =
        productosIniciales;


    // Guarda los productos iniciales en localStorage convirtiéndolos a texto JSON.
    localStorage.setItem(
        "productos",
        JSON.stringify(datosProductos)
    );

}


// Crea una función que recibe un código y busca el producto correspondiente.
const buscarProductoPorCodigo = (codigoProducto) => {

    // Usa find para buscar el primer producto cuyo código coincida con el recibido.
    return datosProductos.find((producto) => {

        // Compara el código del producto actual con el código que se está buscando.
        return producto.codigo === codigoProducto;

    });

};


// Busca en el HTML el contenedor donde se mostrarán las tarjetas de productos.
const contenedorProductos =
    document.querySelector("#productos-completos");


// Crea una función que recibe un arreglo de productos y los muestra en pantalla.
const mostrarProductos = (productos) => {

    // Verifica si el contenedor de productos no existe en la página actual.
    if (!contenedorProductos) {

        // Detiene la función si no existe el contenedor.
        return;

    }


    // Limpia todo el contenido anterior del catálogo.
    contenedorProductos.innerHTML = "";


    // Recorre uno por uno todos los productos recibidos.
    productos.forEach((producto) => {


        // Crea dinámicamente un elemento article que representará una tarjeta de producto.
        const tarjeta =
            document.createElement("article");


        // Agrega una clase CSS a la tarjeta del producto.
        tarjeta.classList.add(
            "producto-completo"
        );


        // Agrega a la tarjeta un atributo con la categoría del producto.
        tarjeta.setAttribute(
            "data-categoria",
            producto.categoria
        );


        // Agrega a la tarjeta un atributo con el código del producto.
        tarjeta.setAttribute(
            "data-codigo",
            producto.codigo
        );


        // Crea dinámicamente una etiqueta img para mostrar la imagen del producto.
        const imagen =
            document.createElement("img");


        // Coloca como src la ruta de imagen almacenada en el producto.
        imagen.src =
            producto.imagen;


        // Coloca el nombre del producto como texto alternativo de la imagen.
        imagen.alt =
            producto.nombre;


        // Crea dinámicamente un título h3 para mostrar el nombre.
        const nombre =
            document.createElement("h3");


        // Coloca el nombre del producto dentro del h3.
        nombre.textContent =
            producto.nombre;


        // Crea dinámicamente un párrafo para mostrar el precio.
        const precio =
            document.createElement("p");


        // Muestra el precio usando formato numérico chileno y agregando CLP.
        precio.textContent =
            "$" +
            producto.precio.toLocaleString("es-CL") +
            " CLP";


        // Crea una sección donde estarán las acciones disponibles para el producto.
        const acciones =
            document.createElement("section");


        // Agrega una clase CSS al contenedor de acciones.
        acciones.classList.add(
            "acciones-producto"
        );


        // Crea dinámicamente el botón utilizado para añadir el producto al carrito.
        const botonAgregar =
            document.createElement("button");


        // Agrega una clase CSS al botón Añadir.
        botonAgregar.classList.add(
            "boton-agregar"
        );


        // Define el botón como button para que no funcione como envío de formulario.
        botonAgregar.type =
            "button";


        // Coloca inicialmente el texto Añadir dentro del botón.
        botonAgregar.textContent =
            "Añadir";


        // Escucha cuando el usuario hace clic en el botón Añadir.
        botonAgregar.addEventListener("click", () => {

            // Agrega una unidad del producto seleccionado al carrito.
            agregarProductoAlCarrito(
                producto,
                1
            );


            // Cambia temporalmente el texto del botón para avisar que se agregó.
            botonAgregar.textContent =
                "Agregado";


            // Ejecuta una acción después de un segundo.
            setTimeout(() => {

                // Vuelve a colocar el texto original del botón.
                botonAgregar.textContent =
                    "Añadir";

            }, 1000);

        });


        // Crea dinámicamente un enlace para acceder al detalle del producto.
        const enlaceDetalle =
            document.createElement("a");

        // Crea la URL del detalle enviando el código del producto mediante el parámetro id.
        enlaceDetalle.href =
            "detalle-producto.html?id=" +
            producto.codigo;

        // Coloca el texto visible del enlace.
        enlaceDetalle.textContent =
            "Ver detalle";

        // Agrega el botón Añadir dentro de la sección de acciones.
        acciones.appendChild(
            botonAgregar
        );

        // Agrega el enlace Ver detalle dentro de la sección de acciones.
        acciones.appendChild(
            enlaceDetalle
        );

        // Agrega la imagen dentro de la tarjeta del producto.
        tarjeta.appendChild(
            imagen
        );

        // Agrega el nombre dentro de la tarjeta del producto.
        tarjeta.appendChild(
            nombre
        );

        // Agrega el precio dentro de la tarjeta del producto.
        tarjeta.appendChild(
            precio
        );

        // Agrega las acciones dentro de la tarjeta del producto.
        tarjeta.appendChild(
            acciones
        );

        // Agrega la tarjeta completa dentro del catálogo.
        contenedorProductos.appendChild(
            tarjeta
        );

    });

};


// Crea una función que permite agregar un producto y una cantidad determinada al carrito.
const agregarProductoAlCarrito = (
    producto,
    cantidad
) => {

    // Obtiene el carrito desde localStorage o crea un arreglo vacío si todavía no existe.
    let carrito =
        JSON.parse(
            localStorage.getItem("carrito")
        ) || [];


    // Busca si el producto que se quiere agregar ya se encuentra dentro del carrito.
    const productoExistente =
        carrito.find((item) => {

            // Compara el código del producto del carrito con el código del producto seleccionado.
            return item.codigo === producto.codigo;

        });


    // Verifica si el producto ya existe dentro del carrito.
    if (productoExistente) {

        // Si existe, aumenta su cantidad con la nueva cantidad seleccionada.
        productoExistente.cantidad =
            productoExistente.cantidad +
            cantidad;

    } else {

        // Si no existe, crea un nuevo objeto con la información necesaria para el carrito.
        const productoCarrito = {

            // Guarda el código del producto.
            codigo: producto.codigo,
            // Guarda el nombre del producto.
            nombre: producto.nombre,
            // Guarda el precio del producto.
            precio: producto.precio,
            // Guarda la imagen del producto.
            imagen: producto.imagen,
            // Guarda la descripción del producto.
            descripcion: producto.descripcion,
            // Guarda la cantidad que se está agregando.
            cantidad: cantidad

        };


        // Agrega el nuevo objeto de producto al arreglo del carrito.
        carrito.push(
            productoCarrito
        );

    }


    // Guarda el carrito actualizado en localStorage convirtiéndolo a JSON.
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

};


// Busca todos los enlaces que se encuentran dentro del elemento de categorías.
const botonesCategorias =
    document.querySelectorAll("#categorias a");


// Verifica que exista al menos un botón de categoría.
if (botonesCategorias.length > 0) {

    // Recorre todos los botones de categorías encontrados.
    botonesCategorias.forEach((botonCategoria) => {

        // Escucha cuando el usuario hace clic sobre una categoría.
        botonCategoria.addEventListener(
            "click",
            (evento) => {

                // Evita el comportamiento normal del enlace para manejar el filtro con JavaScript.
                evento.preventDefault();


                // Obtiene la categoría almacenada en el atributo data-categoria del botón.
                const categoriaSeleccionada =
                    botonCategoria.getAttribute(
                        "data-categoria"
                    );


                // Recorre nuevamente todos los botones de categorías.
                botonesCategorias.forEach((boton) => {

                    // Quita la clase activa de todos los botones.
                    boton.classList.remove(
                        "categoria-activa"
                    );

                });


                // Agrega la clase activa solamente al botón que fue seleccionado.
                botonCategoria.classList.add(
                    "categoria-activa"
                );


                // Verifica si el usuario seleccionó la opción para mostrar todos los productos.
                if (
                    categoriaSeleccionada ===
                    "todos"
                ) {

                    // Muestra nuevamente el arreglo completo de productos.
                    mostrarProductos(
                        datosProductos
                    );


                    // Detiene esta parte de la función porque no es necesario aplicar un filtro.
                    return;

                }


                // Crea un nuevo arreglo que contiene solamente los productos de la categoría seleccionada.
                const productosFiltrados =
                    datosProductos.filter(
                        (producto) => {

                            // Conserva únicamente los productos cuya categoría coincida con la seleccionada.
                            return (
                                producto.categoria ===
                                categoriaSeleccionada
                            );

                        }
                    );


                // Muestra en pantalla solamente los productos que pasaron el filtro.
                mostrarProductos(
                    productosFiltrados
                );

            }
        );

    });

}


// Verifica que esta página tenga el contenedor utilizado para mostrar el catálogo.
if (contenedorProductos) {

    // Muestra todos los productos cuando se carga inicialmente el catálogo.
    mostrarProductos(
        datosProductos
    );

}


// Busca el elemento donde se mostrará el nombre en la página de detalle del producto.
const nombreProducto =
    document.querySelector(
        "#nombre-producto"
    );


// Verifica si estamos en una página que contiene el elemento del nombre del producto.
if (nombreProducto) {

    // Obtiene los parámetros existentes en la URL actual.
    const parametros =
        new URLSearchParams(
            window.location.search
        );


    // Obtiene específicamente el valor del parámetro llamado id.
    const codigoProducto =
        parametros.get("id");


    // Busca el producto cuyo código coincide con el id recibido desde la URL.
    const producto =
        buscarProductoPorCodigo(
            codigoProducto
        );


    // Busca el elemento donde se mostrará el precio del producto.
    const precioProducto =
        document.querySelector(
            "#precio-producto"
        );


    // Busca la imagen utilizada para mostrar el producto.
    const imagenProducto =
        document.querySelector(
            "#imagen-producto"
        );


    // Busca el elemento donde se mostrará la descripción.
    const descripcionProducto =
        document.querySelector(
            "#descripcion-producto"
        );


    // Busca el elemento que muestra el nombre dentro de la ruta o navegación.
    const rutaNombre =
        document.querySelector(
            "#ruta-nombre"
        );


    // Busca el campo donde el usuario selecciona cuántos productos desea agregar.
    const cantidad =
        document.querySelector(
            "#cantidad"
        );

    // Busca el botón que permite agregar el producto al carrito desde su detalle.
    const botonAgregarDetalle =
        document.querySelector(
            "#agregar-carrito"
        );

    // Busca el elemento donde se mostrará el mensaje después de agregar al carrito.
    const mensajeCarrito =
        document.querySelector(
            "#mensaje-carrito"
        );

    // Verifica si el producto solicitado fue encontrado.
    if (producto) {

        // Muestra el nombre del producto.
        nombreProducto.textContent =
            producto.nombre;

        // Muestra el precio del producto utilizando formato chileno.
        precioProducto.textContent =
            "$" +
            producto.precio.toLocaleString(
                "es-CL"
            ) +
            " CLP";

        // Coloca la ruta de imagen correspondiente al producto.
        imagenProducto.src =
            producto.imagen;

        // Coloca el nombre como texto alternativo de la imagen.
        imagenProducto.alt =
            producto.nombre;

        // Muestra la descripción del producto.
        descripcionProducto.textContent =
            producto.descripcion;

        // Muestra el nombre del producto dentro de la ruta de navegación.
        rutaNombre.textContent =
            producto.nombre;

    } else {
        // Informa que el producto no fue encontrado.
        nombreProducto.textContent =
            "Producto no encontrado";

        // Deja vacío el precio porque no existe un producto válido.
        precioProducto.textContent =
            "";

        // Muestra un mensaje indicando que no existe información del producto.
        descripcionProducto.textContent =
            "No se encontró información del producto.";

        // Deja vacía la ruta de la imagen.
        imagenProducto.src =
            "";

    }

    // Verifica que exista el botón para agregar el producto desde la página de detalle.
    if (botonAgregarDetalle) {

        // Escucha cuando el usuario hace clic en el botón para agregar al carrito.
        botonAgregarDetalle.addEventListener(
            "click",
            () => {
                // Verifica nuevamente que exista el producto.
                if (!producto) {

                    // Detiene la función si el producto no existe.
                    return;

                }

                // Obtiene la cantidad ingresada y la convierte de texto a número.
                const cantidadSeleccionada =
                    Number(
                        cantidad.value
                    );

                // Verifica que la cantidad seleccionada sea como mínimo uno.
                if (
                    cantidadSeleccionada < 1
                ) {

                    // Detiene la función si la cantidad no es válida.
                    return;
                }

                // Agrega el producto al carrito utilizando la cantidad seleccionada.
                agregarProductoAlCarrito(
                    producto,
                    cantidadSeleccionada
                );

                // Muestra al usuario cuántas unidades fueron agregadas al carrito.
                mensajeCarrito.textContent =
                    cantidadSeleccionada +
                    " producto(s) agregado(s) al carrito.";

            }
        );

    }

}