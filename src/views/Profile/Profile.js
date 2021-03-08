import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useGet from '../../hooks/useGet';
import UserMenu from '../../components/Layout/Header/UserMenu/UserMenu';
import './profile.css';

const Profile = () => {
  const history = useHistory();
  const handerEditPerfil = () => {
    history.push('/editprofile');
  };

  const [data] = useGet('users/me');
  return (
    <>
      <UserMenu />
      <div className="profilContainer">
        <div>
          <h1>Datos del perfil:</h1>
          <h2 className="text-detalls-perfil">
            Nombre de usuario: {data.username || ''}
          </h2>
          <h2 className="text-detalls-perfil">Correo: {data.email || ''}</h2>
        </div>
        <Button
          className="btn btn-success btn-perfil"
          onClick={handerEditPerfil}
        >
          Editar Perfil
        </Button>
      </div>
    </>
  );
};

export default Profile;
