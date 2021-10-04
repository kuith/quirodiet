import React from 'react';
import Image from 'react-bootstrap/Image';



const imagenCarruselItem = ({imagen}) => {
    return (
      <Image className="imagenCarrusel" src={imagen} fluid />
    )
}

export default imagenCarruselItem;