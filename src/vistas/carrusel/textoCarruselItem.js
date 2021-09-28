import React from 'react';

import Image from 'react-bootstrap/Image';
import Imagen from '../../utils/images/carrusel/C_Tatoo.png';

const TextoCarruselItem = (props) => {
    return (
        <div className="textoCarrusel ">
          <Image src={Imagen} fluid />
        </div>
    )
}

export default TextoCarruselItem;
