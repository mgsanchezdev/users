import React, { useState } from 'react';
import '../Auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordRecoverySchema as schema } from '../../../validations/auth';
import http from '../../../utils/http';

export default function PasswordRecovery() {
  const [emailSend, setEmailSend] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ recoveryEmail: email }) => {
    reset();
    http
      .post('auth/forgot-password', { email })
      .then(() => {
        setEmailSend(true);
      })
      .catch((err) => {
        setError(err.response.data.message[0].messages[0].message);
      });
  };

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Recuperar Contraseña</h3>

            <p>
              Por favor, ingrese su correo para poder enviar el correo de
              recuperación
            </p>

            <label htmlFor="recoveryEmail" className="form-label">
              Correo Electronico
              <input
                type="recoveryEmail"
                id="recoveryEmail"
                name="recoveryEmail"
                className="form-input"
                ref={register}
              />
            </label>
            <div className="form-error">{errors.recoveryEmail?.message}</div>
            {error ? (
              <div className="form-error form-text message">{error}</div>
            ) : (
              ''
            )}
            {emailSend ? (
              <p className="form-text message">Correo Enviado</p>
            ) : (
              ''
            )}

            <button type="submit" className="button button-yellow form-button">
              Recuperar Contraseña
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
