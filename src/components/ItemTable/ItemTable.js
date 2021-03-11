import React from 'react';
import { Button } from 'react-bootstrap';
import './ItemTable.css';

const ItemTable = ({ user, updateU, deleteU }) => {
  const updateHandle = (e) => {
    e.preventDefault();
    const { id } = e.target;
    updateU(id);
  };

  const deleteHandle = (e) => {
    e.preventDefault();
    const { id } = e.target;
    deleteU(id);
  };

  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.dni}</td>
        <td>{user.adress}</td>
        <td>
          <Button
            className="btn-text"
            id={user.id}
            variant="warning"
            onClick={updateHandle}
          >
            Editar
          </Button>
        </td>
        <td>
          <Button
            className="btn-text"
            id={user.id}
            variant="danger"
            onClick={deleteHandle}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemTable;
