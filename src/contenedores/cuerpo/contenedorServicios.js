import React from 'react';
//import CabeceraServicios from '../../vistas/servicios/cabeceraServicios';

const ContenedorServicios = ({servicioComponente, cabeceraServicios}) => {
    return (
      <div>
        {cabeceraServicios}
        {servicioComponente}
      </div>
    )
}

export default ContenedorServicios;