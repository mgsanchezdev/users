import Swal from 'sweetalert2';

export const errorAlert = (error) =>
  Swal.fire({
    title: 'Que mal!',
    // eslint-disable-next-line no-nested-ternary
    // text: error===false  ? "Ocurrio un error por parte del servidor" : error.response.data.message[0]=== "I" ? error.response.data.message : "La cuenta no esta activada, por favor revisar su correo para completar la activacion de su cuenta" ,
    text:
      error === false
        ? 'Ocurrio un error por parte del servidor'
        : error.response.data.message[0].messages[0].message,
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
