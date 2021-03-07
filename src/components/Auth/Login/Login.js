import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../validations/auth';
import { useAuth } from '../../../context/auth';
import { errorAlert, messageAlert } from '../../../utils/alerts';

export const Login = () => {
  const history = useHistory();
  const { login } = useAuth();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async ({
    loginEmail: identifier,
    loginPassword: password,
  }) => {
    const { error } = await login({ identifier, password });

    if (error) {
      if (typeof error.response === 'undefined') {
        errorAlert(false);
      } else {
        errorAlert(error);
      }
    } else {
      reset();
      messageAlert('success', 'Acabas de iniciar sesión').then(() => {
        history.push('/home');
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleLogin)}>
      <h3 className="form-title">Iniciar Sesión</h3>

      <label htmlFor="loginEmail" className="form-label">
        Correo Electronico
        <input
          type="email"
          id="loginEmail"
          name="loginEmail"
          className="form-input"
          ref={register}
        />
      </label>
      <div className="form-error">{errors.loginEmail?.message}</div>

      <label htmlFor="loginPassword" className="form-label">
        Contraseña{' '}
        <span
          onClick={() => history.push('/password-reset')}
          role="button"
          tabIndex={0}
          onKeyDown={() => history.push('/password-reset')}
        >
          ¿Olvido su contraseña?
        </span>
        <input
          type="password"
          id="loginPassword"
          name="loginPassword"
          className="form-input"
          ref={register}
        />
      </label>
      <div className="form-error">{errors.loginPassword?.message}</div>

      <button type="submit" className="button button-yellow form-button">
        Ingresar
      </button>
    </form>
  );
};
