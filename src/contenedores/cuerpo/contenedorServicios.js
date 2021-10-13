import React from 'react';
//import CabeceraServicios from '../../vistas/servicios/cabeceraServicios';

const ContenedorServicios = ({servicioComponente, cabeceraServicios}) => {
    return (
      <div className="fuenteServicios">
        {cabeceraServicios}
        {servicioComponente}
      </div>
    )
}

export default ContenedorServicios;