/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useGet from '../../hooks/useGet';
import Usertable from '../../components/UserTable/UserTable';
import Loading from '../../components/Loading/Loading';
import http from '../../utils/http';
import { errorAlert, messageAlert, errorAlertText } from '../../utils/alerts';
import './Users.css';

import Maps from '../../components/Maps/Maps';

const Users = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [latitudeM, setLatitudeM] = useState();
  const [longitudeM, setLongitudeM] = useState();
  const [data, fetching] = useGet('users');
  const dataA = data;
  const filtrarData = (dataa) =>
    dataa.filter(
      (user) =>
        user.email !== 'admin@admin.com' &&
        user.email !== 'alejandro@alejandro.com'
    );

  const dataTable = React.useMemo(() => filtrarData(dataA), [dataA]);

  const deleteU = (e) => {
    e.preventDefault();
    const { id } = e.target;
    http
      .delete(`users/${id}`)
      .then(() => {
        messageAlert('success', 'Se elimino correctamente el usuario').then(
          () => {
            // eslint-disable-next-line no-self-assign
            window.location.href = window.location.href;
          }
        );
      })
      .catch((error) => {
        errorAlert(error);
      });
  };

  const updateU = (e) => {
    e.preventDefault();
    const { id } = e.target;
    history.push(`updateuser/${id}`);
  };

  const userHandle = () => {
    history.push(`createuser`);
  };

  const geolocation = async (e) => {
    e.preventDefault();
    const { id } = e.target;
    const dataa = await http.get(`users/${id}`);
    const { latitude } = dataa.data;
    const { Longitude } = dataa.data;
    if (latitude !== undefined && Longitude !== undefined) {
      setLatitudeM(latitude);
      setLongitudeM(Longitude);
      setModal(true);
    } else {
      errorAlertText('Usuario no Geolocalizado');
    }
  };

  const hola = () => {
    setModal(true);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Usuarios registrados en el sistema sistema',
        columns: [
          {
            Header: 'Nombre',
            accessor: 'name',
          },
          {
            Header: 'Apellido',
            accessor: 'lastName',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'DNI',
            accessor: 'dni',
          },
          {
            Header: 'Dirección',
            accessor: 'adress',
          },
          {
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Geolocalización',
            Cell: ({ cell }) => (
              <Button
                className="btn-user"
                variant="info"
                id={cell.row.values.id}
                type="button"
                onClick={geolocation}
              >
                Mapa
              </Button>
            ),
          },
          {
            Header: 'Eliminar',
            Cell: ({ cell }) => (
              <Button
                className="btn-user"
                variant="danger"
                id={cell.row.values.id}
                type="button"
                onClick={deleteU}
              >
                Eliminar
              </Button>
            ),
          },
          {
            Header: 'Editar',
            Cell: ({ cell }) => (
              <Button
                className="btn-user"
                variant="warning"
                id={cell.row.values.id}
                type="button"
                onClick={updateU}
              >
                Editar
              </Button>
            ),
          },
        ],
      },
    ],
    []
  );

  if (fetching) {
    return <Loading />;
  }

  if (modal) {
    return (
      <Maps setModal={setModal} latitudeM={latitudeM} longitudeM={longitudeM} />
    );
  }
  return (
    <>
      <Button
        className="btn-user btn-user-margin"
        variant="success"
        onClick={userHandle}
      >
        Agregar Usuario al Sistema
      </Button>
      <Usertable columns={columns} data={dataTable} />
    </>
  );
};
export default Users;
