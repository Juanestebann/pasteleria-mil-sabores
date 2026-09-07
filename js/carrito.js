/* ========================================= */
/* OBTENER CARRITO */
/* ========================================= */

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];


/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const listaCarrito =
    document.querySelector("#lista-carrito");


const precioTotal =
    document.querySelector("#precio-total");


const carritoVacio =
    document.querySelector("#carrito-vacio");


const botonCupon =
    document.querySelector("#aplicar-cupon");


const codigoCupon =
    document.querySelector("#codigo-cupon");


const mensajeCupon =
    document.querySelector("#mensaje-cupon");


const botonPagar =
    document.querySelector("#boton-pagar");


const notificacionCarrito =
    document.querySelector("#notificacion-carrito");


let descuento = 0;


/* ========================================= */
/* MOSTRAR NOTIFICACIÓN */
/* ========================================= */

const mostrarNotificacion = (mensaje) => {

    notificacionCarrito.style.display =
        "block";


    notificacionCarrito.textContent =
        mensaje;

};


/* ========================================= */
/* MOSTRAR CARRITO */
/* ========================================= */

const mostrarCarrito = () => {

    listaCarrito.innerHTML =
        "";


    if (carrito.length === 0) {

        carritoVacio.textContent =
            "Tu carrito está vacío.";

    } else {

        carritoVacio.textContent =
            "";

    }


    carrito.forEach((producto, posicion) => {


        /* PRODUCTO */

        const productoCarrito =
            document.createElement("article");


        productoCarrito.classList.add(
            "producto-carrito"
        );


        /* IMAGEN */

        const imagen =
            document.createElement("img");


        imagen.src =
            producto.imagen;


        imagen.alt =
            producto.nombre;


        /* INFORMACIÓN */

        const informacion =
            document.createElement("section");


        informacion.classList.add(
            "informacion-carrito"
        );


        const nombre =
            document.createElement("h3");


        nombre.textContent =
            producto.nombre;


        const descripcion =
            document.createElement("p");


        descripcion.textContent =
            producto.descripcion;


        informacion.appendChild(
            nombre
        );


        informacion.appendChild(
            descripcion
        );


        /* CONTROL PRODUCTO */

        const controlProducto =
            document.createElement("section");


        controlProducto.classList.add(
            "control-producto"
        );


        /* PRECIO */

        const precio =
            document.createElement("p");


        precio.classList.add(
            "precio-producto-carrito"
        );


        precio.textContent =
            "$" +
            (
                producto.precio *
                producto.cantidad
            ).toLocaleString("es-CL");


        /* CONTROL CANTIDAD */

        const controlCantidad =
            document.createElement("section");


        controlCantidad.classList.add(
            "control-cantidad"
        );


        /* BOTÓN MENOS */

        const botonMenos =
            document.createElement("button");


        botonMenos.textContent =
            "−";


        botonMenos.addEventListener("click", () => {

            disminuirCantidad(posicion);

        });


        /* CANTIDAD */

        const cantidad =
            document.createElement("span");


        cantidad.textContent =
            producto.cantidad;


        /* BOTÓN MÁS */

        const botonMas =
            document.createElement("button");


        botonMas.textContent =
            "+";


        botonMas.addEventListener("click", () => {

            aumentarCantidad(posicion);

        });


        /* ARMAR CONTROL */

        controlCantidad.appendChild(
            botonMenos
        );


        controlCantidad.appendChild(
            cantidad
        );


        controlCantidad.appendChild(
            botonMas
        );


        controlProducto.appendChild(
            precio
        );


        controlProducto.appendChild(
            controlCantidad
        );


        /* ARMAR PRODUCTO */

        productoCarrito.appendChild(
            imagen
        );


        productoCarrito.appendChild(
            informacion
        );


        productoCarrito.appendChild(
            controlProducto
        );


        listaCarrito.appendChild(
            productoCarrito
        );

    });


    calcularTotal();

};


/* ========================================= */
/* AUMENTAR CANTIDAD */
/* ========================================= */

const aumentarCantidad = (posicion) => {

    carrito[posicion].cantidad =
        carrito[posicion].cantidad + 1;


    guardarCarrito();


    mostrarCarrito();

};


/* ========================================= */
/* DISMINUIR CANTIDAD */
/* ========================================= */

const disminuirCantidad = (posicion) => {

    carrito[posicion].cantidad =
        carrito[posicion].cantidad - 1;


    if (carrito[posicion].cantidad <= 0) {

        carrito.splice(
            posicion,
            1
        );

    }


    guardarCarrito();


    mostrarCarrito();

};


/* ========================================= */
/* GUARDAR CARRITO */
/* ========================================= */

const guardarCarrito = () => {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

};


/* ========================================= */
/* CALCULAR TOTAL */
/* ========================================= */

const calcularTotal = () => {

    let total =
        0;


    carrito.forEach((producto) => {

        total =
            total +
            (
                producto.precio *
                producto.cantidad
            );

    });


    if (descuento > 0) {

        total =
            total -
            (
                total *
                descuento
            );

    }


    precioTotal.textContent =
        "$" +
        Math.round(total)
            .toLocaleString("es-CL");

};


/* ========================================= */
/* CUPÓN */
/* ========================================= */

botonCupon.addEventListener("click", () => {

    const cupon =
        codigoCupon.value
            .trim()
            .toLowerCase();


    if (cupon === "felices10") {

        descuento =
            0.10;


        mensajeCupon.textContent =
            "Cupón aplicado: 10% de descuento.";


        calcularTotal();

    } else {

        descuento =
            0;


        mensajeCupon.textContent =
            "Cupón no válido.";


        calcularTotal();

    }

});


/* ========================================= */
/* PAGAR */
/* ========================================= */

botonPagar.addEventListener("click", () => {


    if (carrito.length === 0) {

        mostrarNotificacion(
            "No tienes productos en el carrito."
        );


        return;

    }


    mostrarNotificacion(
        "Compra realizada correctamente."
    );


    carrito =
        [];


    descuento =
        0;


    codigoCupon.value =
        "";


    mensajeCupon.textContent =
        "";


    guardarCarrito();


    mostrarCarrito();

});


/* ========================================= */
/* INICIAR */
/* ========================================= */

mostrarCarrito();