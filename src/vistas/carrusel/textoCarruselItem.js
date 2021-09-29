import React from 'react';

import Image from 'react-bootstrap/Image';

const TextoCarruselItem = (props) => {
    return (
        <div className="textoCarrusel " >
           {/* <Image src={props.imagen} fluid /> */}
          <h1>El texto de la imagen.</h1>
        </div>
    )
}

export default TextoCarruselItem;
