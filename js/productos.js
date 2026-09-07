/* ========================================= */
/* DATOS DE PRODUCTOS */
/* ========================================= */

const datosProductos = {

    TC001: {
        codigo: "TC001",
        nombre: "Torta Cuadrada de Chocolate",
        precio: 45000,
        imagen: "../img/Torta Cuadrada de Chocolate.png",
        descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales."
    },

    TC002: {
        codigo: "TC002",
        nombre: "Torta Cuadrada de Frutas",
        precio: 50000,
        imagen: "../img/Torta Cuadrada de Frutas.png",
        descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones."
    },

    TT001: {
        codigo: "TT001",
        nombre: "Torta Circular de Vainilla",
        precio: 40000,
        imagen: "../img/Torta Circular de Vainilla.png",
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión."
    },

    TT002: {
        codigo: "TT002",
        nombre: "Torta Circular de Manjar",
        precio: 42000,
        imagen: "../img/Torta Circular de Manjar.png",
        descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos."
    },

    PI001: {
        codigo: "PI001",
        nombre: "Mousse de Chocolate",
        precio: 5000,
        imagen: "../img/Mousse de Chocolate.png",
        descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate."
    },

    PI002: {
        codigo: "PI002",
        nombre: "Tiramisú Clásico",
        precio: 5500,
        imagen: "../img/Tiramisú Clásico.png",
        descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida."
    },

    PSA001: {
        codigo: "PSA001",
        nombre: "Torta Sin Azúcar de Naranja",
        precio: 48000,
        imagen: "../img/Torta Sin Azúcar de Naranja.png",
        descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables."
    },

    PSA002: {
        codigo: "PSA002",
        nombre: "Cheesecake Sin Azúcar",
        precio: 47000,
        imagen: "../img/Cheesecake Sin Azúcar.png",
        descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa."
    },

    PT001: {
        codigo: "PT001",
        nombre: "Empanada de Manzana",
        precio: 3000,
        imagen: "../img/Empanada de Manzana.png",
        descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda."
    },

    PT002: {
        codigo: "PT002",
        nombre: "Tarta de Santiago",
        precio: 6000,
        imagen: "../img/Tarta de Santiago.png",
        descripcion: "Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos."
    },

    PG001: {
        codigo: "PG001",
        nombre: "Brownie Sin Gluten",
        precio: 4000,
        imagen: "../img/Brownie Sin Gluten.png",
        descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor."
    },

    PG002: {
        codigo: "PG002",
        nombre: "Pan Sin Gluten",
        precio: 3500,
        imagen: "../img/Pan Sin Gluten.png",
        descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida."
    },

    PV001: {
        codigo: "PV001",
        nombre: "Torta Vegana de Chocolate",
        precio: 50000,
        imagen: "../img/Torta Vegana de Chocolate.png",
        descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos."
    },

    PV002: {
        codigo: "PV002",
        nombre: "Galletas Veganas de Avena",
        precio: 4500,
        imagen: "../img/Galletas Veganas de Avena.png",
        descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano."
    },

    TE001: {
        codigo: "TE001",
        nombre: "Torta Especial de Cumpleaños",
        precio: 55000,
        imagen: "../img/Torta Especial de Cumpleaños.png",
        descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos."
    },

    TE002: {
        codigo: "TE002",
        nombre: "Torta Especial de Boda",
        precio: 60000,
        imagen: "../img/Torta Especial de Boda.png",
        descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda."
    }

};


/* ========================================= */
/* FILTRO DE CATEGORÍAS */
/* ========================================= */

const botonesCategorias =
    document.querySelectorAll("#categorias a");


const tarjetasProductos =
    document.querySelectorAll(".producto-completo");


if (botonesCategorias.length > 0) {

    botonesCategorias.forEach((botonCategoria) => {

        botonCategoria.addEventListener("click", (evento) => {

            evento.preventDefault();


            const categoriaSeleccionada =
                botonCategoria.getAttribute("data-categoria");


            botonesCategorias.forEach((boton) => {

                boton.classList.remove("categoria-activa");

            });


            botonCategoria.classList.add("categoria-activa");


            tarjetasProductos.forEach((producto) => {

                const categoriaProducto =
                    producto.getAttribute("data-categoria");


                if (categoriaSeleccionada === "todos") {

                    producto.style.display = "block";

                } else {

                    if (categoriaProducto === categoriaSeleccionada) {

                        producto.style.display = "block";

                    } else {

                        producto.style.display = "none";

                    }

                }

            });

        });

    });

}


/* ========================================= */
/* AÑADIR DESDE EL CATÁLOGO */
/* ========================================= */

const botonesAgregar =
    document.querySelectorAll(".boton-agregar");


botonesAgregar.forEach((botonAgregar) => {

    botonAgregar.addEventListener("click", () => {

        const tarjetaProducto =
            botonAgregar.closest(".producto-completo");


        const codigoProducto =
            tarjetaProducto.getAttribute("data-codigo");


        const producto =
            datosProductos[codigoProducto];


        if (!producto) {

            return;

        }


        let carrito =
            JSON.parse(localStorage.getItem("carrito")) || [];


        const productoExistente =
            carrito.find((item) => {

                return item.codigo === producto.codigo;

            });


        if (productoExistente) {

            productoExistente.cantidad =
                productoExistente.cantidad + 1;

        } else {

            const productoCarrito = {

                codigo: producto.codigo,

                nombre: producto.nombre,

                precio: producto.precio,

                imagen: producto.imagen,

                descripcion: producto.descripcion,

                cantidad: 1

            };


            carrito.push(productoCarrito);

        }


        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );


        botonAgregar.textContent =
            "Agregado";


        setTimeout(() => {

            botonAgregar.textContent =
                "Añadir";

        }, 1000);

    });

});


/* ========================================= */
/* DETALLE DEL PRODUCTO */
/* ========================================= */

const nombreProducto =
    document.querySelector("#nombre-producto");


if (nombreProducto) {

    const parametros =
        new URLSearchParams(window.location.search);


    const codigoProducto =
        parametros.get("id");


    const producto =
        datosProductos[codigoProducto];


    const precioProducto =
        document.querySelector("#precio-producto");


    const imagenProducto =
        document.querySelector("#imagen-producto");


    const descripcionProducto =
        document.querySelector("#descripcion-producto");


    const rutaNombre =
        document.querySelector("#ruta-nombre");


    const cantidad =
        document.querySelector("#cantidad");


    const botonAgregarDetalle =
        document.querySelector("#agregar-carrito");


    const mensajeCarrito =
        document.querySelector("#mensaje-carrito");


    /* MOSTRAR PRODUCTO */

    if (producto) {

        nombreProducto.textContent =
            producto.nombre;


        precioProducto.textContent =
            "$" +
            producto.precio.toLocaleString("es-CL") +
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


    /* AÑADIR DESDE DETALLE */

    botonAgregarDetalle.addEventListener("click", () => {

        if (!producto) {

            return;

        }


        const cantidadSeleccionada =
            Number(cantidad.value);


        let carrito =
            JSON.parse(localStorage.getItem("carrito")) || [];


        const productoExistente =
            carrito.find((item) => {

                return item.codigo === producto.codigo;

            });


        if (productoExistente) {

            productoExistente.cantidad =
                productoExistente.cantidad +
                cantidadSeleccionada;

        } else {

            const productoCarrito = {

                codigo: producto.codigo,

                nombre: producto.nombre,

                precio: producto.precio,

                imagen: producto.imagen,

                descripcion: producto.descripcion,

                cantidad: cantidadSeleccionada

            };


            carrito.push(productoCarrito);

        }


        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );


        mensajeCarrito.textContent =
            cantidadSeleccionada +
            " producto(s) agregado(s) al carrito.";

    });

}