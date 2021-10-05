import React from 'react';
import Image from 'react-bootstrap/Image';



const imagenCarruselItem = ({imagenCarrusel}) => {
    return (
      <Image className="imagenCarrusel" src={imagenCarrusel} fluid />
    )
}

export default imagenCarruselItem;