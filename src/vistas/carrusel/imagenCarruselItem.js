import React from 'react';
import Image from 'react-bootstrap/Image';

import Imagen from '../../utils/images/carrusel/C_Tatoo.png';

const imagenCarruselItem = (props) => {
    return (
      <Image className="imagenCarrusel" src={Imagen} fluid />
    )
}

export default imagenCarruselItem;