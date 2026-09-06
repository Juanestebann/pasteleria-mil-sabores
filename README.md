# Pastelería Mil Sabores

Proyecto frontend para la plataforma web de **Pastelería Mil Sabores**.

La solución busca ofrecer una experiencia de navegación clara y accesible para clientes y visitantes, junto con un área administrativa para la gestión básica de productos y usuarios.

## Versión Inicial del Sistema

La Versión Inicial contempla:

- Navegación por la tienda pública.
- Página principal.
- Registro de usuarios.
- Inicio de sesión.
- Sección Nosotros.
- Blogs y detalle de publicaciones.
- Formulario de contacto.
- Catálogo de productos.
- Detalle de productos.
- Carrito de compras.
- Persistencia del carrito mediante `localStorage`.
- Acceso al área administrativa.
- Gestión de productos.
- Alertas de stock crítico.
- Gestión de usuarios.
- Selección dependiente de región y comuna.

## Actores del sistema

- Visitante
- Cliente
- Vendedor
- Administrador

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Estructura del proyecto

```text
pasteleria-mil-sabores/
│
├── index.html
│
├── pages/
│   ├── registro.html
│   ├── login.html
│   ├── nosotros.html
│   ├── blogs.html
│   ├── blog-detalle-1.html
│   ├── blog-detalle-2.html
│   ├── contacto.html
│   ├── productos.html
│   ├── detalle-producto.html
│   └── carrito.html
│
├── admin/
│   ├── index.html
│   ├── productos/
│   │   ├── productos.html
│   │   ├── nuevo-producto.html
│   │   └── editar-producto.html
│   └── usuarios/
│       ├── usuarios.html
│       ├── nuevo-usuario.html
│       └── editar-usuario.html
│
├── css/
│   ├── estilos.css
│   ├── formularios.css
│   └── admin.css
│
├── js/
│   ├── productos.js
│   ├── carrito.js
│   ├── registro.js
│   ├── login.js
│   ├── contacto.js
│   ├── ubicaciones.js
│   └── admin/
│       ├── admin.js
│       ├── productos-admin.js
│       └── usuarios-admin.js
│
├── img/
├── README.md
└── .gitignore