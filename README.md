# App de manejos de usuarios

## El deploy de la aplicación esta en:

### https://users-pi.vercel.app/auth

Nota: El backend está realizado con Strapi y desplegado en Heroku, con lo cual como el plan gratis de Heroku se apaga el servidor a los 15 minutos de inactividad, la primera vez que se quiere loguear al sistema tarda un poco, que es hasta que se active de nuevo el servidor.

## El usuario que puede ver el resto de los usuarios por defecto es:

### Users: admin@admin.com

### Password: adminadmin

## Un usuario común que solo puede acceder al sistema y actualizar solamente sus datos del perfil.

### User: alejandro@alejandro.com

### Password: 123456

## Detalles del proyecto:

### Se implementó el login de usuario y el registro. Cuando el usuario se registra al sistema se le envía un correo a la cuenta registrada para confirmar su registro a la web(este email por lo general va a la carpeta spam del correo), luego de hacer clic en el link que se envió al correo lo direcciona al home de la página.

### También se implementó la recuperación de contraseña, se envía un link al correo con el que se registró el usuario (este email por lo general va a la carpeta spam del correo) y luego lo envía a un página donde se pude agregar la nueva contraseña y luego se re direcciona a home.

### También se implementó que el usuario que se registró al sistema pueda modificar los datos de perfil, ya sea que se allá ingresado a sistema con el usuario admin o cualquier otro usuario.

### Con este usuario admin puede ver el resto de los usuarios del sistema (estos se pueden ordenar por un criterio determinado), pude modificar los datos de un usuario, puede borrar un usuario, también puede crear un usuario, puede ver cuántas veces se conectó un usuario en los últimos 7 días usuario (estos datos son fakeados/mockeados), puede ver en un mapa las coordenadas donde se conectó el usuario (estos datos son fakeados/mockeados).

## Que librerías se utilizó:

### Esta aplicación se creó con:

### npx create-react-app users

### Se configuro para el proyecto Eslint (Airbnb: https://github.com/airbnb/javascript), Prittier y Husky.

### Para el manejo de rutas se utilizó React Router Dom:

### npm install react-router-dom

### Usamos:

### npm install jsonwebtoken

### Para las peticiones a la API se utilizó Axios:

### npm install axios

### Para la validación de formularios se utilizó:

### npm install react-hook-form

### npm install @hookform/resolvers

### npm install -S yup

### Para las ventanas emergentes se utilizó:

### npm install --save sweetalert2

### Para colocar cuando algo se está cargado algo o se está haciendo una petición a la API usamos el spinner:

### npm install --save react-spinners

### Como librería de UI se utilizó:

### npm install react-bootstrap bootstrap

### Para los iconos se utilizó:

### npm install react-icons - -save

### Para las tablas dinámicas y que se pueden ordenar haciendo clic en el encabezado de la tabla y se orden toda la tabla ya se descendente o ascendente se utilizó:

### npm install react-table - -save

### Para ver la geolocalización de los usuarios uso Google Maps:

### npm i --save simple-react-google-maps

### Para representar los datos de uso de CPU memoria y consumo de internet en un gráfico de líneas se utilizó la librería:

### npm i react-charts –save

### Para representar cuantas veces por día se conectó el usuario en un gráfico de barras se utilizó la librería:

### npm install --save react-chartjs-2 chart.js

### Se utilizó para el manejo de fecha las librería momento.js

### npm install moment

### Para descargar el proyecto:

### git clone git@github.com:mgsanchezdev/users

### cd users

### npm install

### Se abre en el navegador:

### http://localhost:3000

### Cualquier consulta al correo: mgsanchezdev@gmail.com
