import Swal from 'sweetalert2';

export const errorAlert = (error) =>
  Swal.fire({
    title: 'Que mal!',
    text:
      error === false
        ? 'Ocurrio un error por parte del servidor'
        : error.response.data.message[0].messages[0].message,
    icon: 'error',
    confirmButtonText: 'Aceptar',
  });

export const errorAlertText = (text) =>
  Swal.fire({
    title: 'Que mal!',
    text,
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
