/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import { FcStatistics } from 'react-icons/fc';
import useGet from '../../hooks/useGet';
import Usertable from '../../components/UserTable/UserTable';
import useCountDate from '../../hooks/useCountDate';
import Loading from '../../components/Loading/Loading';
import GraphicBar from '../../components/GraphicBar/GraphicBar';
import http from '../../utils/http';
import { errorAlert, messageAlert, errorAlertText } from '../../utils/alerts';
import './Users.css';

import Maps from '../../components/Maps/Maps';

const Users = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [graphic, setGraphic] = useState(false);
  const [dataGraphicDate, setDataGraphicDate] = useState([]);
  const [dataGraphicData, setDataGraphicData] = useState([]);
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

  const userConnection = async (e) => {
    e.preventDefault();
    const { id } = e.target;
    const dataa = await http.get(`users/${id}`);
    if (dataa.data.accesses !== undefined) {
      if (dataa.data.accesses.length !== 0) {
        const [arrayDate, arrayDataCount] = useCountDate(dataa.data.accesses);
        await setDataGraphicDate(arrayDate);
        await setDataGraphicData(arrayDataCount);
        setGraphic(true);
      } else {
        errorAlertText('El usuario no se ha conectado al sistema');
      }
    } else {
      errorAlertText('Error en el servidor al enviar los datos');
    }
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
            Header: 'Conexiones al sistema',
            Cell: ({ cell }) => (
              <FcStatistics
                id={cell.row.values.id}
                type="button"
                onClick={userConnection}
              />
            ),
          },
          {
            Header: 'Geolocalización',
            Cell: ({ cell }) => (
              <SiGooglemaps
                id={cell.row.values.id}
                type="button"
                onClick={geolocation}
              />
            ),
          },
          {
            Header: 'Eliminar',
            Cell: ({ cell }) => (
              <RiDeleteBin6Line
                id={cell.row.values.id}
                type="button"
                onClick={deleteU}
              />
            ),
          },
          {
            Header: 'Editar',
            Cell: ({ cell }) => (
              <MdModeEdit
                id={cell.row.values.id}
                type="button"
                onClick={updateU}
              />
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

  if (graphic) {
    return (
      <GraphicBar
        setGraphic={setGraphic}
        dataGraphicDate={dataGraphicDate}
        dataGraphicData={dataGraphicData}
      />
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
