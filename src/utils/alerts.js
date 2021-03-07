import Swal from 'sweetalert2';

export const errorAlert = (error) =>
  Swal.fire({
    title: 'Que mal!',
    text:
      error === false
        ? 'Ocurrio un error por parte del servidor'
        : error.response.data.message[0].messages[0].message, // Aca se evalua, si error=false, significa que el servidor envio un undefined, caso contrario se muestra el mensaje del servidor en una notificacion
    icon: 'error',
    confirmButtonText: 'Aceptar',
  });

export const messageAlert = (icon, text) =>
  Swal.fire({
    title: 'Genial!',
    text,
    icon,
    confirmButtonText: 'Aceptar',
  });
