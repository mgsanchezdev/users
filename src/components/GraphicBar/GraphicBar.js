import React from 'react';
import { Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

const GraphicBar = ({ setGraphic, dataGraphicDate, dataGraphicData }) => {
  const data = {
    labels: dataGraphicDate,
    datasets: [
      {
        label: 'Cantidad de conexion al día',
        backgroundColor: 'rgba(0,255,0,0.2)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,255,0,0.2)',
        hoverBorderlColor: '#ff0000',
        data: dataGraphicData,
      },
    ],
  };
  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const handleGraphic = () => {
    setGraphic(false);
  };
  return (
    <div
      style={{
        disply: 'flex',
        'justify-content': 'center',
        width: '100%',
        height: '500px',
      }}
    >
      <Bar data={data} iptiones={opciones} />
      <Button
        type="button"
        onClick={handleGraphic}
        style={{ width: '100%', 'font-size': '25px' }}
      >
        Cerrar
      </Button>
    </div>
  );
};

export default GraphicBar;
