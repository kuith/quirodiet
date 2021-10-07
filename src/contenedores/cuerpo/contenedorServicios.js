import React from 'react';
import CabeceraServicios from '../../vistas/servicios/cabeceraServicios';

const ContenedorServicios = ({servicio, s_textoImagen, s_subtextoImagen, s_imagen, servicioComponente}) => {
    return (
      <div className="borde">
        <h1>Contenedor servicios</h1>
        <CabeceraServicios s_textoImagen={s_textoImagen} s_subtextoImagen={s_subtextoImagen} s_imagen={s_imagen}/>
        <h3>Servicio: {servicio}</h3>
        {servicioComponente}
      </div>
    )
}

export default ContenedorServicios;