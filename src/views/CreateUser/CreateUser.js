import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserSchema } from '../../validations/auth';
import { errorAlertText, errorAlert } from '../../utils/alerts';
import http from '../../utils/http';
import useGet from '../../hooks/useGet';
import './CreateUser.css';

const CreateUser = () => {
  const history = useHistory();
  const [data, fetching] = useGet('users');
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(createUserSchema),
  });

  const handleRegister = async ({
    registerNick: username,
    registerEmail: email,
    registerPassword: password,
  }) => {
    const dataUser = {
      username: `${username}`,
      email: `${email}`,
      password: `${password}`,
      confirmed: true,
    };
    try {
      let isUser;
      if (!fetching) {
        isUser = data.filter(
          (user) => user.username === username || user.email === email
        );
      }

      if (isUser.length !== 0) {
        errorAlertText('El nick o la contraseña existen');
      } else {
        await http.post('users', dataUser);
        reset();
        history.push('/users');
      }
    } catch (error) {
      errorAlert(error);
    }
  };

  return (
    <div className=" container container-create-user">
      <form
        className=" conatiner form form-create-user "
        onSubmit={handleSubmit(handleRegister)}
      >
        <h3 className="form-title">Agregar un usuario al sistema</h3>

        <label htmlFor="registerNick" className="form-label">
          Nick
          <input
            type="text"
            id="registerNick"
            name="registerNick"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerNick?.message}</div>

        <label htmlFor="registerEmail" className="form-label">
          Correo Electronico
          <input
            type="email"
            id="registerEmail"
            name="registerEmail"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerEmail?.message}</div>

        <label htmlFor="registerPassword" className="form-label">
          Contraseña
          <input
            type="password"
            id="registerPassword"
            name="registerPassword"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerPassword?.message}</div>

        <label htmlFor="registerRepeat" className="form-label">
          Repetir Contraseña
          <input
            type="password"
            id="registerRepeat"
            name="registerRepeat"
            className="form-input"
            ref={register}
          />
        </label>
        <div className="form-error">{errors.registerRepeat?.message}</div>

        <button type="submit" className="button button-yellow form-button">
          Crear usuario
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
