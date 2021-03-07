import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { passwordResetSchema as schema } from '../../../validations/auth';
import { messageAlert, errorAlert } from '../../../utils/alerts';
import http from '../../../utils/http';

export default function PasswordReset() {
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    resetPassword: password,
    resetRepeat: passwordConfirmation,
  }) => {
    const totalCode = location.search;
    const code = totalCode.slice(6);
    http
      .post('auth/reset-password', {
        code: `${code}`,

        password,
        passwordConfirmation,
      })
      .then(() => {
        messageAlert('success', 'La contraseña se cambio correctamente').then(
          () => {
            history.push('/');
          }
        );
      })
      .catch((error) => {
        errorAlert(error);
      });
  };

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Cambiar Contraseña</h3>

            <label htmlFor="resetPassword" className="form-label">
              Nueva Contraseña
              <input
                type="password"
                id="resetPassword"
                name="resetPassword"
                className="form-input"
                ref={register}
              />
            </label>
            <div className="form-error">{errors.resetPassword?.message}</div>

            <label htmlFor="resetRepeat" className="form-label">
              Repetir Contraseña
              <input
                type="password"
                id="resetRepeat"
                name="resetRepeat"
                className="form-input"
                ref={register}
              />
            </label>
            <div className="form-error">{errors.resetRepeat?.message}</div>

            <button type="submit" className="button button-yellow form-button">
              Cambiar Contraseña
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
