import React from 'react';
import Graphic from '../../components/Graphic/Graphic';
import useGet from '../../hooks/useGet';
import useDataGraphic from '../../hooks/useDataGraphic';

import './Estadisticas.css';

const Estadisticas = () => {
  const [data] = useGet('cpus');
  const [dataGraphic] = useDataGraphic(data);

  const [dataMemoria] = useGet('memorias');
  const [dataGraphicMemoria] = useDataGraphic(dataMemoria);

  const [dataInternet] = useGet('internetts');
  const [dataGraphicInternet] = useDataGraphic(dataInternet);

  return (
    <div className="container-graphic">
      <h2 className="title-graphic">%CPU</h2>
      <Graphic dataGraphic={dataGraphic} />
      <h2 className="title-graphic">Memoria utilizada</h2>
      <Graphic dataGraphic={dataGraphicMemoria} />
      <h2 className="title-graphic">Consumo de internet</h2>
      <Graphic dataGraphic={dataGraphicInternet} />
    </div>
  );
};

export default Estadisticas;
