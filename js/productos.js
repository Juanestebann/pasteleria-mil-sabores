// =========================================
// DATOS DE PRODUCTOS
// =========================================

const datosProductos = [

    {
        codigo: "TC001",
        nombre: "Torta Cuadrada de Chocolate",
        precio: 45000,
        imagen: "../img/Torta Cuadrada de Chocolate.png",
        descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
        categoria: "cuadradas"
    },

    {
        codigo: "TC002",
        nombre: "Torta Cuadrada de Frutas",
        precio: 50000,
        imagen: "../img/Torta Cuadrada de Frutas.png",
        descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
        categoria: "cuadradas"
    },

    {
        codigo: "TT001",
        nombre: "Torta Circular de Vainilla",
        precio: 40000,
        imagen: "../img/Torta Circular de Vainilla.png",
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
        categoria: "circulares"
    },

    {
        codigo: "TT002",
        nombre: "Torta Circular de Manjar",
        precio: 42000,
        imagen: "../img/Torta Circular de Manjar.png",
        descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
        categoria: "circulares"
    },

    {
        codigo: "PI001",
        nombre: "Mousse de Chocolate",
        precio: 5000,
        imagen: "../img/Mousse de Chocolate.png",
        descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
        categoria: "individuales"
    },

    {
        codigo: "PI002",
        nombre: "Tiramisú Clásico",
        precio: 5500,
        imagen: "../img/Tiramisú Clásico.png",
        descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
        categoria: "individuales"
    },

    {
        codigo: "PSA001",
        nombre: "Torta Sin Azúcar de Naranja",
        precio: 48000,
        imagen: "../img/Torta Sin Azúcar de Naranja.png",
        descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
        categoria: "sin-azucar"
    },

    {
        codigo: "PSA002",
        nombre: "Cheesecake Sin Azúcar",
        precio: 47000,
        imagen: "../img/Cheesecake Sin Azúcar.png",
        descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
        categoria: "sin-azucar"
    },

    {
        codigo: "PT001",
        nombre: "Empanada de Manzana",
        precio: 3000,
        imagen: "../img/Empanada de Manzana.png",
        descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
        categoria: "tradicional"
    },

    {
        codigo: "PT002",
        nombre: "Tarta de Santiago",
        precio: 6000,
        imagen: "../img/Tarta de Santiago.png",
        descripcion: "Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos.",
        categoria: "tradicional"
    },

    {
        codigo: "PG001",
        nombre: "Brownie Sin Gluten",
        precio: 4000,
        imagen: "../img/Brownie Sin Gluten.png",
        descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
        categoria: "sin-gluten"
    },

    {
        codigo: "PG002",
        nombre: "Pan Sin Gluten",
        precio: 3500,
        imagen: "../img/Pan Sin Gluten.png",
        descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
        categoria: "sin-gluten"
    },

    {
        codigo: "PV001",
        nombre: "Torta Vegana de Chocolate",
        precio: 50000,
        imagen: "../img/Torta Vegana de Chocolate.png",
        descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
        categoria: "veganos"
    },

    {
        codigo: "PV002",
        nombre: "Galletas Veganas de Avena",
        precio: 4500,
        imagen: "../img/Galletas Veganas de Avena.png",
        descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
        categoria: "veganos"
    },

    {
        codigo: "TE001",
        nombre: "Torta Especial de Cumpleaños",
        precio: 55000,
        imagen: "../img/Torta Especial de Cumpleaños.png",
        descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
        categoria: "especiales"
    },

    {
        codigo: "TE002",
        nombre: "Torta Especial de Boda",
        precio: 60000,
        imagen: "../img/Torta Especial de Boda.png",
        descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
        categoria: "especiales"
    }

];


// =========================================
// BUSCAR PRODUCTO POR CÓDIGO
// =========================================

const buscarProductoPorCodigo = (codigoProducto) => {

    return datosProductos.find((producto) => {

        return producto.codigo === codigoProducto;

    });

};


// =========================================
// CONTENEDOR DEL CATÁLOGO
// =========================================

const contenedorProductos =
    document.querySelector("#productos-completos");


// =========================================
// MOSTRAR PRODUCTOS
// =========================================

const mostrarProductos = (productos) => {

    if (!contenedorProductos) {

        return;

    }


    contenedorProductos.innerHTML = "";


    productos.forEach((producto) => {


        // =========================================
        // TARJETA
        // =========================================

        const tarjeta =
            document.createElement("article");


        tarjeta.classList.add(
            "producto-completo"
        );


        tarjeta.setAttribute(
            "data-categoria",
            producto.categoria
        );


        tarjeta.setAttribute(
            "data-codigo",
            producto.codigo
        );


        // =========================================
        // IMAGEN
        // =========================================

        const imagen =
            document.createElement("img");


        imagen.src =
            producto.imagen;


        imagen.alt =
            producto.nombre;


        // =========================================
        // NOMBRE
        // =========================================

        const nombre =
            document.createElement("h3");


        nombre.textContent =
            producto.nombre;


        // =========================================
        // PRECIO
        // =========================================

        const precio =
            document.createElement("p");


        precio.textContent =
            "$" +
            producto.precio.toLocaleString("es-CL") +
            " CLP";


        // =========================================
        // ACCIONES
        // =========================================

        const acciones =
            document.createElement("section");


        acciones.classList.add(
            "acciones-producto"
        );


        // BOTÓN AÑADIR

        const botonAgregar =
            document.createElement("button");


        botonAgregar.classList.add(
            "boton-agregar"
        );


        botonAgregar.type =
            "button";


        botonAgregar.textContent =
            "Añadir";


        botonAgregar.addEventListener("click", () => {

            agregarProductoAlCarrito(
                producto,
                1
            );


            botonAgregar.textContent =
                "Agregado";


            setTimeout(() => {

                botonAgregar.textContent =
                    "Añadir";

            }, 1000);

        });


        // VER DETALLE

        const enlaceDetalle =
            document.createElement("a");


        enlaceDetalle.href =
            "detalle-producto.html?id=" +
            producto.codigo;


        enlaceDetalle.textContent =
            "Ver detalle";


        // =========================================
        // ARMAR TARJETA
        // =========================================

        acciones.appendChild(
            botonAgregar
        );


        acciones.appendChild(
            enlaceDetalle
        );


        tarjeta.appendChild(
            imagen
        );


        tarjeta.appendChild(
            nombre
        );


        tarjeta.appendChild(
            precio
        );


        tarjeta.appendChild(
            acciones
        );


        contenedorProductos.appendChild(
            tarjeta
        );

    });

};


// =========================================
// AGREGAR PRODUCTO AL CARRITO
// =========================================

const agregarProductoAlCarrito = (
    producto,
    cantidad
) => {

    let carrito =
        JSON.parse(
            localStorage.getItem("carrito")
        ) || [];


    const productoExistente =
        carrito.find((item) => {

            return item.codigo === producto.codigo;

        });


    if (productoExistente) {

        productoExistente.cantidad =
            productoExistente.cantidad +
            cantidad;

    } else {

        const productoCarrito = {

            codigo: producto.codigo,

            nombre: producto.nombre,

            precio: producto.precio,

            imagen: producto.imagen,

            descripcion: producto.descripcion,

            cantidad: cantidad

        };


        carrito.push(
            productoCarrito
        );

    }


    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

};


// =========================================
// FILTRO DE CATEGORÍAS
// =========================================

const botonesCategorias =
    document.querySelectorAll("#categorias a");


if (botonesCategorias.length > 0) {

    botonesCategorias.forEach((botonCategoria) => {

        botonCategoria.addEventListener(
            "click",
            (evento) => {

                evento.preventDefault();


                const categoriaSeleccionada =
                    botonCategoria.getAttribute(
                        "data-categoria"
                    );


                // QUITAR CATEGORÍA ACTIVA

                botonesCategorias.forEach((boton) => {

                    boton.classList.remove(
                        "categoria-activa"
                    );

                });


                // MARCAR CATEGORÍA ACTIVA

                botonCategoria.classList.add(
                    "categoria-activa"
                );


                // MOSTRAR TODOS

                if (
                    categoriaSeleccionada ===
                    "todos"
                ) {

                    mostrarProductos(
                        datosProductos
                    );


                    return;

                }


                // FILTRAR PRODUCTOS

                const productosFiltrados =
                    datosProductos.filter(
                        (producto) => {

                            return (
                                producto.categoria ===
                                categoriaSeleccionada
                            );

                        }
                    );


                mostrarProductos(
                    productosFiltrados
                );

            }
        );

    });

}


// =========================================
// MOSTRAR CATÁLOGO AL INICIAR
// =========================================

if (contenedorProductos) {

    mostrarProductos(
        datosProductos
    );

}


// =========================================
// DETALLE DEL PRODUCTO
// =========================================

const nombreProducto =
    document.querySelector(
        "#nombre-producto"
    );


if (nombreProducto) {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const codigoProducto =
        parametros.get("id");


    const producto =
        buscarProductoPorCodigo(
            codigoProducto
        );


    const precioProducto =
        document.querySelector(
            "#precio-producto"
        );


    const imagenProducto =
        document.querySelector(
            "#imagen-producto"
        );


    const descripcionProducto =
        document.querySelector(
            "#descripcion-producto"
        );


    const rutaNombre =
        document.querySelector(
            "#ruta-nombre"
        );


    const cantidad =
        document.querySelector(
            "#cantidad"
        );


    const botonAgregarDetalle =
        document.querySelector(
            "#agregar-carrito"
        );


    const mensajeCarrito =
        document.querySelector(
            "#mensaje-carrito"
        );


    // =========================================
    // MOSTRAR PRODUCTO
    // =========================================

    if (producto) {

        nombreProducto.textContent =
            producto.nombre;


        precioProducto.textContent =
            "$" +
            producto.precio.toLocaleString(
                "es-CL"
            ) +
            " CLP";


        imagenProducto.src =
            producto.imagen;


        imagenProducto.alt =
            producto.nombre;


        descripcionProducto.textContent =
            producto.descripcion;


        rutaNombre.textContent =
            producto.nombre;

    } else {

        nombreProducto.textContent =
            "Producto no encontrado";


        precioProducto.textContent =
            "";


        descripcionProducto.textContent =
            "No se encontró información del producto.";


        imagenProducto.src =
            "";

    }


    // =========================================
    // AÑADIR DESDE DETALLE
    // =========================================

    if (botonAgregarDetalle) {

        botonAgregarDetalle.addEventListener(
            "click",
            () => {

                if (!producto) {

                    return;

                }


                const cantidadSeleccionada =
                    Number(
                        cantidad.value
                    );


                if (
                    cantidadSeleccionada < 1
                ) {

                    return;

                }


                agregarProductoAlCarrito(
                    producto,
                    cantidadSeleccionada
                );


                mensajeCarrito.textContent =
                    cantidadSeleccionada +
                    " producto(s) agregado(s) al carrito.";

            }
        );

    }

}