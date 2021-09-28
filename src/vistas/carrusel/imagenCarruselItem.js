import React from 'react';
import Image from 'react-bootstrap/Image';



const imagenCarruselItem = (props) => {
    return (
      <Image className="imagenCarrusel" src={props.imagen} fluid />
    )
}

export default imagenCarruselItem;