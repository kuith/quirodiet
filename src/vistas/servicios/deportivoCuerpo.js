import React from 'react';

const DeportivoCuerpo = ({datosCuerpo}) => {
    return (
      <div  className="textoCuerpoServicio">
        <p>
          Para conseguir volumen muscular. Tarifa de {datosCuerpo.volumen} € ( por tabla ).
        </p>
        <p>
          Para conseguir tonificación y definición. Tarifa de {datosCuerpo.tonificacion} € ( por tabla ).
        </p>
      </div>
    )
}

export default DeportivoCuerpo;
