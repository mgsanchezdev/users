/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePerfilUserSchema } from '../../validations/auth';
import http from '../../utils/http';
import useGet from '../../hooks/useGet';
import './UpdateUser.css';

const UpdateUser = () => {
  const history = useHistory();
  const queryString = window.location.href;
  const idUser = queryString.slice(33);
  const [data] = useGet(`users/${idUser}`);
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(updatePerfilUserSchema),
  });

  useEffect(() => {
    reset({
      username: data.username || '',
      email: data.email || '',
      name: data.name || '',
      lastName: data.lastName || '',
      dni: data.dni || '',
      adress: data.adress || '',
    });
  }, [data]);

  const onSubmit = async (formData) => {
    const formDataCopy = { ...formData };
    Object.keys(formDataCopy).forEach((key) => {
      if (formDataCopy[key] === '') {
        delete formDataCopy[key];
      }
    });
    // Aca antes hay que hacer una consulta a la base de datos para ver si el nuevo correo editado existe
    await http.put(`users/${idUser}`, formDataCopy);
    history.push('/users');
  };

  return (
    <div className="edit-form">
      <form className="edit-form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="username">Nick</label>
            <input
              type="text"
              name="username"
              id="username"
              ref={register}
              placeholder="nick"
            />
          </div>
          <div className="form-error">{errors.username?.message}</div>

          <div className="form-control">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={register}
              placeholder="email"
            />
          </div>
          <div className="form-error">{errors.email?.message}</div>

          <div className="form-control">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={register}
              placeholder="Nombre"
            />
          </div>
          <div className="form-error">{errors.name?.message}</div>

          <div className="form-control">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              ref={register}
              placeholder="Apellido"
            />
          </div>
          <div className="form-error">{errors.lastName?.message}</div>

          <div className="form-control">
            <label htmlFor="dni">DNI</label>
            <input
              type="number"
              name="dni"
              id="dni"
              ref={register}
              placeholder="DNI"
            />
          </div>
          <div className="form-error">{errors.dni?.message}</div>

          <div className="form-control">
            <label htmlFor="adress">Domicilio</label>
            <input
              type="text"
              name="adress"
              id="adress"
              ref={register}
              placeholder="Domicilio"
            />
          </div>
          <div className="form-error">{errors.adress?.message}</div>

          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={register}
              placeholder="contraseña"
            />
          </div>
          <div className="form-error">{errors.password?.message}</div>

          <div className="form-control">
            <label htmlFor="passwordRepeat">Repetir contraseña</label>
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              ref={register}
              placeholder="confirmar contraseña"
            />
          </div>
          <div className="form-error">{errors.passwordRepeat?.message}</div>
        </div>
        <button type="submit" className="button button-yellow form-button">
          Editar perfil
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
