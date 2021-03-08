/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './EditProfile.css';
import { useForm } from 'react-hook-form';
import useGet from '../../hooks/useGet';
import http from '../../utils/http';
import { useAuth } from '../../context/auth';
import UserMenu from '../../components/Layout/Header/UserMenu/UserMenu';

const EditProfile = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [data] = useGet('users/me');
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    reset({
      username: data.username || '',
      email: data.email || '',
    });
  }, [data]);

  const onSubmit = (formData) => {
    const formDataCopy = { ...formData };
    Object.keys(formDataCopy).forEach((key) => {
      if (formDataCopy[key] === '') {
        delete formDataCopy[key];
      }
    });
    http.put(`users/${user.id}`, formDataCopy);
    history.push('/profile');
  };

  return (
    <>
      <UserMenu />
      <div className="edit-form">
        <form className="edit-form form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-control">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                name="username"
                id="username"
                ref={register}
                placeholder="nick"
              />
            </div>
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
          </div>
          <div>
            <button type="submit" className="button button-yellow btn-edit">
              Editar Perfil
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
