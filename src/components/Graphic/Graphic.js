import React from 'react';
import { Chart } from 'react-charts';

const Graphic = ({ dataGraphic }) => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: dataGraphic,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <>
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    </>
  );
};

export default Graphic;
