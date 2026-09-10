# Refactorizacion CSS de Pasteleria Mil Sabores

Se aplicaron las seis etapas sobre el respaldo del proyecto. El trabajo conserva
la identidad, las medidas y los layouts existentes. No se modificaron archivos
JavaScript, datos, imagenes, textos, destinos de enlaces ni estructura del DOM.
Los cambios HTML agregan clases y actualizan los enlaces a hojas de estilo.

Este resumen describe la refactorizacion inicial. La estandarizacion posterior
del footer, solicitada por separado, se documenta en la seccion 10 y reemplaza
las variantes publicas anteriores por el contenido y diseno de contacto.

## 1. Archivos creados

- `css/global.css`: variables existentes, estilo del body y modelo de caja optativo.
- `css/componentes.css`: botones, paneles, badges, mensajes, listados y tarjetas de producto.
- `css/tablas.css`: contenedor desplazable, tabla, cabeceras, celdas y hover.
- `docs/REFACTORIZACION-CSS.md`: inventario, decisiones y resultados de verificacion.

`css/formularios.css` ya existia vacio: se completo, no se creo nuevamente.
`css/estilos.css` se conserva vacio. No se eliminaron archivos CSS.
No se agregaron dependencias, frameworks ni herramientas de build al proyecto.

## 2. Archivos modificados

HTML publicos, 11 archivos:

```text
index.html
pages/login.html
pages/registro.html
pages/contacto.html
pages/productos.html
pages/detalle-producto.html
pages/carrito.html
pages/blogs.html
pages/blog-detalle-1.html
pages/blog-detalle-2.html
pages/nosotros.html
```

HTML administrativos, 8 archivos:

```text
admin/index.html
admin/productos/productos.html
admin/productos/nuevo-producto.html
admin/productos/editar-producto.html
admin/usuarios/usuarios.html
admin/usuarios/nuevo-usuario.html
admin/usuarios/editar-usuario.html
admin/usuarios/ver-usuario.html
```

CSS existentes modificados, 19 archivos:

```text
css/main.css
css/admin.css
css/formularios.css
css/login.css
css/registro.css
css/contacto.css
css/productos.css
css/detalle-producto.css
css/carrito.css
css/blogs.css
css/blog-detalle.css
css/nosotros.css
css/admin-productos.css
css/admin-nuevo-producto.css
css/admin-editar-producto.css
css/admin-usuarios.css
css/admin-nuevo-usuario.css
css/admin-editar-usuario.css
css/admin-ver-usuario.css
```

## 3. Que se centralizo

| Responsabilidad | Archivo |
| --- | --- |
| Paleta existente, estados, radios repetidos, sombras, body y Arial | `global.css` |
| Botones principales, secundarios, peligrosos y variantes existentes | `componentes.css` |
| Paneles administrativos, presentaciones, badges y mensajes | `componentes.css` |
| Superficie, nombre e imagen base de tarjetas de productos | `componentes.css` |
| Campos, etiquetas, foco, readonly, busqueda y filtros | `formularios.css` |
| Filas y acciones compartidas por los dos formularios de usuarios | `formularios.css` |
| Tablas de usuarios y productos, bordes y desplazamiento horizontal | `tablas.css` |
| Header publico, sus variantes y footer publico estandar de contacto | `main.css` |
| Navegacion, sidebar, cabecera y estructura administrativa | `admin.css` |

Orden de carga: `global.css`, `componentes.css`, `formularios.css` cuando corresponde,
`tablas.css` solamente en los dos listados administrativos, `main.css` o `admin.css`,
y finalmente la hoja especifica de la pagina. Font Awesome sigue siendo la
dependencia visual que el proyecto ya utilizaba.

`modelo-borde` se aplica al elemento `html` solamente en login, registro y
administracion, que ya tenian `box-sizing: border-box`. Las otras vistas conservan
su modelo original para evitar cambios de ancho y padding.

## 4. Que permanecio especifico

- Hero, beneficios, promocion y distribucion del home.
- Layout dividido e imagen del login; columnas y contenedor del registro.
- Informacion de contacto, mapa y distribucion de sus secciones.
- Galeria del producto, productos relacionados y estructura del carrito.
- Contenido editorial, noticias, secciones de nosotros y sus separadores.
- Sidebar, navegacion y distribucion de tarjetas del dashboard administrativo.
- Anchos de filtros, ancho minimo de la tabla de productos e imagen de inventario.
- Dimensiones particulares de campos y botones de nuevo/editar producto.
- Media queries que corresponden a layouts particulares.

## 5. Clases reutilizables

Botones:

```text
.btn                 .btn-admin          .btn-principal
.btn-secundario      .btn-peligro         .btn-acceso
.btn-listado         .btn-tabla           .btn-compra
.btn-oscuro          .btn-elevable
```

Paneles y listados:

```text
.panel                      .panel-con-borde
.panel-presentacion         .presentacion-acciones
.presentacion-usuarios      .presentacion-productos
.herramientas-admin         .listado-admin
.listado-cabecera            .tarjeta-producto
.tabla-admin                .tabla-contenedor
```

Badges y mensajes:

```text
.badge                      .badge-cliente
.badge-exito                .badge-error
.badge-admin                .badge-sesion
.mensaje-exito              .mensaje-exito-formulario
.mensaje-exito-producto     .mensaje-vacio
.mensaje-listado-vacio
```

Formularios y layout compartido:

```text
.formulario-acceso          .formulario-usuario
.formulario-producto        .control-formulario
.acciones-formulario-usuario
.buscador-admin             .filtro-admin
.modelo-borde               .pagina-admin
.header-sombra              .header-catalogo
.footer-publico             .texto-dorado-editorial
```

Se reutilizaron las clases ya existentes `.campo-formulario`, `.fila-formulario`
y `.mensaje-error`. La refactorizacion inicial conservo todos los IDs y clases;
la estandarizacion posterior sustituye las clases del footer anterior.

Los selectores `.boton-ver`, `.boton-editar`, `.boton-editar-producto`,
`.boton-eliminar-producto`, `.rol`, `.rol-cliente`, `.rol-vendedor`,
`.rol-administrador`, `.estado-stock`, `.stock-normal`, `.stock-critico` y
`.producto-completo` funcionan como alias de las reglas compartidas. Esto permite
estilizar los elementos generados por JavaScript sin modificar sus generadores.

Ejemplo de reutilizacion para un formulario administrativo:

```html
<button id="boton-guardar" class="btn btn-admin btn-principal" type="submit">
    Guardar
</button>
```

La clase `.btn` aporta la base; la variante de contexto, como `.btn-admin` o
`.btn-tabla`, aporta las medidas. Los IDs se mantienen para los selectores JS.

## 6. Codigo eliminado

Se retiraron de los CSS individuales las copias de campos y foco de formularios,
estados y acciones de las tablas, superficies de paneles, bloques de errores,
botones equivalentes y cuatro copias del footer editorial. Se centralizaron
tambien las reglas repetidas de separacion del header y los valores compartidos
de color, radios y sombras. Se quitaron comentarios de secciones trasladadas y
media queries que quedaron vacias, sin eliminar selectores de uso desconocido.

| Medida sobre todas las hojas CSS | Antes | Despues |
| --- | ---: | ---: |
| Reglas de estilo | 710 | 593 |
| Declaraciones | 2584 | 1874 |
| Grupos de reglas identicas con al menos tres declaraciones | 48 | 11 |

La reduccion neta es de 710 declaraciones, aproximadamente 27,5%, incluyendo
los archivos comunes nuevos. El conteo utiliza las reglas analizadas por el
navegador y conserva las propiedades abreviadas. Los grupos identicos comparan
el bloque serializado y el contexto de media query; no miden todos los casos de
similitud conceptual. Las coincidencias restantes incluyen layouts editoriales
y de pagina que se conservaron deliberadamente.

## 7. Decisiones visuales

| Componente | Referencia existente y decision |
| --- | --- |
| Principal administrativo | Guardar usuario: dorado `#D89B2B`, hover `#B97818`, texto blanco, radio 8px y tipografia de 14px en negrita. |
| Secundario administrativo | Volver/Cancelar existentes: fondo `#F6F0E7`, hover `#E8DCCB`, texto `#3B1F0F`. Se conservan los ajustes de padding por contexto. |
| Acciones de tabla | Diseno compartido de las tablas: minimo 36px, padding 8px 12px, radio 7px y texto de 13px. |
| Eliminar | Diseno rojo existente de productos: `#B3261E`, hover `#8C1D18`. |
| Login y registro | Alto compartido de 52px; se mantienen el radio de 7px del login, el de 8px del registro y sus transiciones originales. |
| Comprar y agregar al carrito | Botones dorados rectos originales; mantienen sus tamanos y ausencia de hover adicional. |
| Blog y contacto | Variante oscura `#3B1F0F` y hover existente `#5D4037`; se conserva el desplazamiento original de 3px. |
| Panel administrativo | Fondo blanco, radio 12px y sombra `0 3px 10px rgba(0, 0, 0, 0.08)`. Padding y bordes se aplican segun el tipo de panel. |
| Campos administrativos | Base de usuarios: borde `#D9CBC0`, radio 8px y foco dorado. Las medidas de producto y contacto permanecen especificas. |
| Badges | Geometria de roles/stock existente: padding 6px 12px, radio 15px y texto de 12px. Se mantienen texto y colores de cada estado. |

No se agregaron colores, sombras ni animaciones decorativas. Se conservaron
incluso diferencias de tipografia ya existentes, como Verdana en los botones de
alta de los listados y la tipografia original del textarea de contacto.

## 8. Posibles pendientes

| Componente | Variantes conservadas | Motivo y recomendacion |
| --- | --- | --- |
| Boton secundario | Contorno transparente del home, relleno claro administrativo y enlace de fuente blanco con borde dorado del blog. | Unificarlos alteraria perceptiblemente sus secciones. Mantenerlos hasta una decision de diseno explicita. |
| Campos de producto | Nuevo usa padding 12px 14px y radio 8px; editar usa campos mas grandes, altura 54px y radio 9px. | La base es comun; igualar medidas cambiaria la densidad del formulario. |
| Foco de contacto | Borde dorado de 2px; acceso/administracion usan borde de 1px y halo. | Se conserva el tratamiento original de cada contexto. |
| Selectores dinamicos | Clases historicas utilizadas por JavaScript. | Los alias permiten reutilizacion sin cambiar logica. Una migracion futura de generadores requiere otro alcance. |

## 9. Verificacion y revisiones recomendadas

Se utilizo Playwright con Microsoft Edge en modo headless y datos de prueba
aislados. Se sirvieron la version original y la refactorizada desde un servidor
temporal local, cerrado al terminar. No se uso el perfil habitual del navegador
ni se modifico el localStorage del usuario.

Resultados de la refactorizacion inicial:

- 19 paginas comparadas a 1440px, 800px y 390px: 57 pares de capturas completas.
- Ninguna diferencia visual detectada por la comparacion de pixeles, con una
  tolerancia de 12 sobre la suma de diferencias RGB por pixel.
- Comparacion adicional de geometria y estilos calculados, foco, hover y errores
  de formularios. Las diferencias calculadas observadas fueron propiedades sin
  efecto visual: `gap` de botones Cancelar sin elementos separados y
  `flex-direction` en campos de contacto con `display: block`. El URL de la
  imagen del home cambia solo por el prefijo del servidor de comparacion.
- Cero errores JavaScript observados en las paginas y flujos probados.
- Cero rutas de recursos faltantes; Font Awesome y las imagenes cargaron.
- Los 19 HTML conservan sus IDs, clases anteriores, atributos funcionales,
  contenido y estructura. Orden y existencia de enlaces CSS verificados.
- Los 15 archivos JavaScript coinciden con la copia original sin modificaciones.
- Variables CSS verificadas, sin referencias indefinidas; no se introdujo
  `!important` ni `@import`.
- `git diff --check` sin errores. Se conservaron los finales de linea de Windows.
- Apertura directa de `index.html` comprobada, sin requerir un servidor de desarrollo.

Flujos probados en ambas versiones:

1. Login incorrecto y correcto, seguido de navegacion administrativa.
2. Busqueda y filtro de productos, stock disponible/critico, estado vacio,
   cancelacion de eliminacion y edicion/guardado de un producto de prueba.
3. Filtro y busqueda de usuarios, vista de detalle, acceso a edicion, Cancelar y
   estados de usuario no encontrado en ver/editar.
4. Listado de productos con perfil Vendedor y sus restricciones existentes.
5. Validaciones vacias de login, registro, contacto y altas administrativas;
   validacion exitosa del formulario local de contacto.
6. Agregar producto al carrito, aumentar cantidad y completar la compra simulada
   que ya implementaba el proyecto, incluido el estado de carrito vacio.

Las capturas, scripts y reportes auxiliares estan en `.qa/`, en la carpeta padre
del repositorio del respaldo. No forman parte de las dependencias del sitio.

Revisiones manuales recomendadas antes de integrar:

- Revisar login, registro y contacto con los datos habituales; completar un alta
  valida de usuario y registro, cuyos casos exitosos no se cubrieron de extremo
  a extremo en esta comprobacion.
- Recorrer tablas y acciones administrativas con inventarios y nombres largos.
- Revisar el footer publico, el header publico y buscadores administrativos en movil.
  El original ya presenta desbordamiento horizontal del header publico y una
  compresion de la altura del buscador administrativo en anchos pequenos. Las
  comparaciones confirman que estos comportamientos permanecen; corregirlos
  requiere una tarea responsive separada.
- Comprobar otros navegadores o dispositivos objetivo: la verificacion automatica
  se realizo con Edge/Chromium, no con Firefox o Safari.

## 10. Estandarizacion posterior del footer

Se adopto el footer de `pages/contacto.html` como unica referencia visual y de
contenido para los 11 HTML publicos enumerados en la seccion 2. La clase
definitiva es `.footer-publico`; las columnas conservan `.footer-columna`.
El contenido fuera del footer no cambio en ninguno de esos HTML.

El unico CSS modificado en este ajuste fue `css/main.css`. Se conservaron el
fondo cafe oscuro, bordes y titulos dorados, textos, espaciados, tipografia y
distribucion originales de contacto. Se hicieron explicitos los margenes y
padding que antes heredaba del footer generico. El footer usa `content-box`
tambien en login y registro para mantener las mismas medidas de la referencia.
El cambio a una columna sigue ocurriendo a 900px.

Tras comprobar que ningun HTML ni JavaScript seguia usando las variantes
anteriores, se eliminaron `.footer-seccion` y sus reglas descendientes, el estilo
generico del footer con fondo `#AB846E` y la grilla de `#footer-contenido`,
incluidos sus ajustes a 760px y 1024px. `.footer-oscuro` se sustituyo por
`.footer-publico`; las reglas utiles de contenido y derechos se consolidaron.
No se modificaron archivos administrativos ni JavaScript en este ajuste.

Comprobaciones con Playwright y Edge/Chromium:

- Los 11 footers comparados contra contacto a 1440px y 390px, mas contacto y
  login a 900px y 901px: 26 comparaciones sin diferencias de pixeles, geometria
  ni estilos calculados respecto de la referencia al mismo ancho.
- Contacto conserva la pagina completa identica a su estado previo a este
  ajuste en los cuatro anchos comprobados, con cero pixeles diferentes.
- Un solo footer publico por pagina, tres columnas y cinco enlaces.
- Rutas de Inicio, Carta, Nosotros y Contacto verificadas en las 11 vistas,
  con destinos existentes y rutas relativas correctas desde raiz y `pages/`.
  Instagram conserva `#`, exactamente como en contacto.
- Sin recursos faltantes ni errores JavaScript observados.
- Sin referencias activas a `.footer-seccion`, `.footer-oscuro` ni reglas de
  la antigua grilla del footer. Se conservaron las media queries ajenas a el.
- Comparacion de archivos contra el inicio de este ajuste: solo los 11 HTML
  publicos, `css/main.css` y este informe cambiaron. Administracion, JavaScript
  y contenido publico fuera de los footers permanecen intactos.

Las capturas y el reporte de este ajuste estan en `.qa/footer/`, en la carpeta
padre del repositorio. La verificacion responsive conserva el comportamiento
previo del sitio; no introduce un rediseno ni corrige el desbordamiento del
header mencionado en la seccion anterior.

## 11. Limpieza posterior sin rediseno

La auditoria final retiro `css/estilos.css`, vacio y sin referencias de carga;
las ocho reglas de `#login-imagen-texto` y sus descendientes; `.boton-secundario`;
y las entradas sin consumidores `.btn-peligro`, `.btn-peligro:hover`,
`.btn-tabla`, `.badge-exito`, `.badge-error` y `.badge-admin`.
Las menciones anteriores a esas clases describen la refactorizacion inicial,
no la API CSS vigente. Los alias utilizados por JavaScript se conservan.

El informe y el inventario completos de esta auditoria estan en
`.qa/cleanup/INFORME.md` y `.qa/cleanup/INVENTARIO.md`, en la carpeta padre del
repositorio, junto al baseline del diseno actual y las pruebas reproducibles.
Esta limpieza no modifico ningun HTML ni JavaScript.
