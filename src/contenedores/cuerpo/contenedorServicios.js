import React from 'react';

const ContenedorServicios = ({servicioComponente, cabeceraServicios}) => {
    return (
      <div>
        {cabeceraServicios}
        {servicioComponente}
      </div>
    )
}

export default ContenedorServicios;