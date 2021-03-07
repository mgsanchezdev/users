import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .email('Correo no válido')
    .required('El correo es obligatorio'),
  loginPassword: yup.string().required('La contraseña es obligatoria'),
});

export const registerSchema = yup.object().shape({
  registerNick: yup.string().required('El nick es obligatorio'),
  registerEmail: yup
    .string()
    .email('Correo no válido')
    .required('El correo es obligatorio'),
  registerPassword: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener 8 caracteres como mínimo')
    .matches(/.*[0-9].*/, 'La contraseña debe tener al menos un número')
    .matches(
      /.*[A-Z].*/,
      'La contraseña debe tener al menos un caracter en mayuscula'
    )
    .matches(
      /.*[a-z].*/,
      'La contraseña debe tener al menos un caracter en minuscula'
    ),
  registerRepeat: yup
    .string()
    .oneOf([yup.ref('registerPassword'), null], 'Las contraseñas no coinciden'),
  terms: yup
    .boolean()
    .required('Acepte los terminos y condiciones')
    .oneOf([true], 'Debe aceptar los terminos y condiciones'),
});

export const passwordRecoverySchema = yup.object().shape({
  recoveryEmail: yup
    .string()
    .email('Correo no válido')
    .required('El correo es obligatorio'),
});

export const passwordResetSchema = yup.object().shape({
  resetPassword: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener 8 caracteres como mínimo')
    .matches(/.*[0-9].*/, 'La contraseña debe tener al menos un número')
    .matches(
      /.*[A-Z].*/,
      'La contraseña debe tener al menos un caracter en mayuscula'
    )
    .matches(
      /.*[a-z].*/,
      'La contraseña debe tener al menos un caracter en minuscula'
    ),
  resetRepeat: yup
    .string()
    .oneOf([yup.ref('resetPassword'), null], 'Las contraseñas no coinciden'),
});
