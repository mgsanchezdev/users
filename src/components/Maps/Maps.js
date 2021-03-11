import React from 'react';
import GoogleMaps from 'simple-react-google-maps';
import { Button } from 'react-bootstrap';
import './Maps.css';

const ModalModal = ({ setModal, latitudeM, longitudeM }) => {
  const handle = () => {
    setModal(false);
  };
  return (
    <div
      className="c"
      style={{ height: '100vh', display: 'flex', 'flex-direction': 'column' }}
    >
      <GoogleMaps
        // eslint-disable-next-line react/jsx-curly-brace-presence
        apiKey={'AIzaSyBKuisFT51yG_QNcV4pIbh-dd-ZsM7EYA4'}
        style={{ height: '80vh', width: '100%' }}
        zoom={15}
        center={{
          lat: latitudeM,
          lng: longitudeM,
        }}
        markers={{ lat: latitudeM, lng: longitudeM }}
      />

      <Button
        style={{ 'font-size': '20px', 'margin-top': '10px' }}
        className="btn-maps"
        type="button"
        onClick={handle}
      >
        Cerrar mapa
      </Button>
    </div>
  );
};
export default ModalModal;
