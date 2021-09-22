import React from 'react';

import TextoCarruselItem from './textoCarruselItem';
import ImagenCarruselItem from './imagenCarruselItem';

const TarjetaItem = (props) => {
    return (
        <div>
          <h1>Esto es el {props.orden} elemento del carrusel</h1>
          <TextoCarruselItem />
          <ImagenCarruselItem />
        </div>
    )
}

export default TarjetaItem;
