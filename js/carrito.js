// Obtiene el carrito guardado en localStorage y lo convierte desde JSON a un arreglo de JavaScript.

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];


// Busca el contenedor donde se mostrarán los productos del carrito.

const listaCarrito =
    document.querySelector("#lista-carrito");


// Busca el elemento donde se mostrará el precio total.

const precioTotal =
    document.querySelector("#precio-total");


// Busca el elemento donde se mostrará el mensaje cuando el carrito esté vacío.

const carritoVacio =
    document.querySelector("#carrito-vacio");


// Busca el botón utilizado para aplicar un cupón.

const botonCupon =
    document.querySelector("#aplicar-cupon");


// Busca el campo donde se ingresa el código del cupón.

const codigoCupon =
    document.querySelector("#codigo-cupon");


// Busca el elemento donde se mostrará el mensaje relacionado con el cupón.

const mensajeCupon =
    document.querySelector("#mensaje-cupon");


// Busca el botón utilizado para realizar el pago.

const botonPagar =
    document.querySelector("#boton-pagar");


// Busca el elemento donde se mostrarán las notificaciones del carrito.

const notificacionCarrito =
    document.querySelector("#notificacion-carrito");


// Guarda el porcentaje de descuento aplicado y comienza en cero.

let descuento = 0;


// Crea una función que muestra una notificación al usuario.

const mostrarNotificacion = (mensaje) => {

    // Hace visible la notificación.

    notificacionCarrito.style.display =
        "block";


    // Muestra el mensaje recibido dentro de la notificación.

    notificacionCarrito.textContent =
        mensaje;

};


// Crea una función que muestra todos los productos del carrito.

const mostrarCarrito = () => {

    // Limpia el contenido anterior de la lista del carrito.

    listaCarrito.innerHTML =
        "";


    // Verifica si el carrito no tiene productos.

    if (carrito.length === 0) {

        // Muestra un mensaje indicando que el carrito está vacío.

        carritoVacio.textContent =
            "Tu carrito está vacío.";

    } else {

        // Limpia el mensaje cuando sí existen productos.

        carritoVacio.textContent =
            "";

    }


    // Recorre cada producto del carrito junto con su posición.

    carrito.forEach((producto, posicion) => {


        // Crea un elemento para representar un producto dentro del carrito.

        const productoCarrito =
            document.createElement("article");


        // Agrega una clase CSS al producto del carrito.

        productoCarrito.classList.add(
            "producto-carrito"
        );


        // Crea el elemento que mostrará la imagen del producto.

        const imagen =
            document.createElement("img");


        // Asigna la ruta de la imagen del producto.

        imagen.src =
            producto.imagen;


        // Usa el nombre del producto como texto alternativo de la imagen.

        imagen.alt =
            producto.nombre;


        // Crea una sección para mostrar la información del producto.

        const informacion =
            document.createElement("section");


        // Agrega una clase CSS a la sección de información.

        informacion.classList.add(
            "informacion-carrito"
        );


        // Crea un título para mostrar el nombre del producto.

        const nombre =
            document.createElement("h3");


        // Muestra el nombre del producto.

        nombre.textContent =
            producto.nombre;


        // Crea un párrafo para mostrar la descripción.

        const descripcion =
            document.createElement("p");


        // Muestra la descripción del producto.

        descripcion.textContent =
            producto.descripcion;


        // Agrega el nombre dentro de la sección de información.

        informacion.appendChild(
            nombre
        );


        // Agrega la descripción dentro de la sección de información.

        informacion.appendChild(
            descripcion
        );


        // Crea una sección para contener el precio y los controles del producto.

        const controlProducto =
            document.createElement("section");


        // Agrega una clase CSS al control del producto.

        controlProducto.classList.add(
            "control-producto"
        );


        // Crea un párrafo para mostrar el precio.

        const precio =
            document.createElement("p");


        // Agrega una clase CSS al precio del producto.

        precio.classList.add(
            "precio-producto-carrito"
        );


        // Calcula el precio por la cantidad y lo muestra con formato chileno.

        precio.textContent =
            "$" +
            (
                producto.precio *
                producto.cantidad
            ).toLocaleString("es-CL");


        // Crea una sección para controlar la cantidad del producto.

        const controlCantidad =
            document.createElement("section");


        // Agrega una clase CSS al control de cantidad.

        controlCantidad.classList.add(
            "control-cantidad"
        );


        // Crea el botón utilizado para disminuir la cantidad.

        const botonMenos =
            document.createElement("button");


        // Coloca el símbolo menos dentro del botón.

        botonMenos.textContent =
            "−";


        // Escucha cuando se presiona el botón para disminuir la cantidad.

        botonMenos.addEventListener("click", () => {

            // Disminuye la cantidad del producto según su posición.

            disminuirCantidad(posicion);

        });


        // Crea un elemento para mostrar la cantidad actual.

        const cantidad =
            document.createElement("span");


        // Muestra la cantidad actual del producto.

        cantidad.textContent =
            producto.cantidad;


        // Crea el botón utilizado para aumentar la cantidad.

        const botonMas =
            document.createElement("button");


        // Coloca el símbolo más dentro del botón.

        botonMas.textContent =
            "+";


        // Escucha cuando se presiona el botón para aumentar la cantidad.

        botonMas.addEventListener("click", () => {

            // Aumenta la cantidad del producto según su posición.

            aumentarCantidad(posicion);

        });


        // Agrega el botón de disminuir al control de cantidad.

        controlCantidad.appendChild(
            botonMenos
        );


        // Agrega la cantidad actual al control.

        controlCantidad.appendChild(
            cantidad
        );


        // Agrega el botón de aumentar al control de cantidad.

        controlCantidad.appendChild(
            botonMas
        );


        // Agrega el precio dentro del control del producto.

        controlProducto.appendChild(
            precio
        );


        // Agrega el control de cantidad dentro del control del producto.

        controlProducto.appendChild(
            controlCantidad
        );


        // Agrega la imagen dentro del producto del carrito.

        productoCarrito.appendChild(
            imagen
        );


        // Agrega la información dentro del producto del carrito.

        productoCarrito.appendChild(
            informacion
        );


        // Agrega los controles dentro del producto del carrito.

        productoCarrito.appendChild(
            controlProducto
        );


        // Agrega el producto completo dentro de la lista del carrito.

        listaCarrito.appendChild(
            productoCarrito
        );

    });


    // Calcula nuevamente el precio total del carrito.

    calcularTotal();

};


// Crea una función para aumentar la cantidad de un producto.

const aumentarCantidad = (posicion) => {

    // Aumenta en uno la cantidad del producto seleccionado.

    carrito[posicion].cantidad =
        carrito[posicion].cantidad + 1;


    // Guarda los cambios realizados en el carrito.

    guardarCarrito();


    // Vuelve a mostrar el carrito actualizado.

    mostrarCarrito();

};


// Crea una función para disminuir la cantidad de un producto.

const disminuirCantidad = (posicion) => {

    // Disminuye en uno la cantidad del producto seleccionado.

    carrito[posicion].cantidad =
        carrito[posicion].cantidad - 1;


    // Verifica si la cantidad llegó a cero o menos.

    if (carrito[posicion].cantidad <= 0) {

        // Elimina el producto del carrito utilizando su posición.

        carrito.splice(
            posicion,
            1
        );

    }


    // Guarda los cambios realizados en el carrito.

    guardarCarrito();


    // Vuelve a mostrar el carrito actualizado.

    mostrarCarrito();

};


// Crea una función que guarda el carrito en localStorage.

const guardarCarrito = () => {

    // Convierte el carrito a JSON y lo guarda en localStorage.

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

};


// Crea una función que calcula el precio total del carrito.

const calcularTotal = () => {

    // Crea una variable que comienza en cero para acumular el total.

    let total =
        0;


    // Recorre todos los productos del carrito.

    carrito.forEach((producto) => {

        // Suma el precio del producto multiplicado por su cantidad.

        total =
            total +
            (
                producto.precio *
                producto.cantidad
            );

    });


    // Verifica si existe un descuento aplicado.

    if (descuento > 0) {

        // Resta al total el porcentaje correspondiente al descuento.

        total =
            total -
            (
                total *
                descuento
            );

    }


    // Redondea el total y lo muestra con formato numérico chileno.

    precioTotal.textContent =
        "$" +
        Math.round(total)
            .toLocaleString("es-CL");

};


// Escucha cuando el usuario hace clic en el botón para aplicar un cupón.

botonCupon.addEventListener("click", () => {

    // Obtiene el cupón, elimina espacios y lo convierte a minúsculas.

    const cupon =
        codigoCupon.value
            .trim()
            .toLowerCase();


    // Verifica si el código ingresado corresponde al cupón felices10.

    if (cupon === "felices10") {

        // Aplica un descuento del diez por ciento.

        descuento =
            0.10;


        // Muestra un mensaje indicando que el cupón fue aplicado.

        mensajeCupon.textContent =
            "Cupón aplicado: 10% de descuento.";


        // Calcula nuevamente el total aplicando el descuento.

        calcularTotal();

    } else {

        // Elimina cualquier descuento si el cupón no es válido.

        descuento =
            0;


        // Muestra un mensaje indicando que el cupón no es válido.

        mensajeCupon.textContent =
            "Cupón no válido.";


        // Calcula nuevamente el total sin descuento.

        calcularTotal();

    }

});


// Escucha cuando el usuario hace clic en el botón para pagar.

botonPagar.addEventListener("click", () => {


    // Verifica si el carrito está vacío.

    if (carrito.length === 0) {

        // Muestra una notificación indicando que no hay productos.

        mostrarNotificacion(
            "No tienes productos en el carrito."
        );


        // Detiene la función para evitar continuar con la compra.

        return;

    }


    // Muestra una notificación indicando que la compra fue realizada.

    mostrarNotificacion(
        "Compra realizada correctamente."
    );


    // Vacía completamente el carrito después de la compra.

    carrito =
        [];


    // Reinicia el descuento aplicado.

    descuento =
        0;


    // Limpia el campo donde se ingresó el cupón.

    codigoCupon.value =
        "";


    // Limpia el mensaje relacionado con el cupón.

    mensajeCupon.textContent =
        "";


    // Guarda el carrito vacío en localStorage.

    guardarCarrito();


    // Actualiza visualmente el carrito.

    mostrarCarrito();

});


// Muestra el contenido actual del carrito cuando se carga la página.

mostrarCarrito();