import React from 'react';

const ContenedorServicios = ({servicio, S_titulo, S_subtitulo, S_imagen, servicioComponente}) => {
    return (
      <div>
        <h1>Contenedor servicios</h1>
        <h3>Servicio: {servicio}</h3>
        {servicioComponente}
      </div>
    )
}

export default ContenedorServicios;