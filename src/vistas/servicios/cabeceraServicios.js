import React from 'react';

const CabeceraServicios = ({s_textoImagen, s_subtextoImagen, s_imagen}) => {
    return (
      <div>
        <h1>La cabecera de los servicios</h1>
        El logo ++++++++++++++++ La imagen con su subtitulo
        <br/>
        EL texto de la imagen es: {s_textoImagen}
        <br/>
        El subtexto de la imagen es: {s_subtextoImagen}
      </div>
    )
}

export default CabeceraServicios;