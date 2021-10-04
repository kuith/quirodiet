import React from 'react';

//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

const TextoCarruselItem = ({titulo, subtitulo, aclaracion, texto }) => {
    return (
      <div className="textoCarrusel">
        <h1 className="tituloCarrusel">{titulo}</h1>
        <h3 className="subtituloCarrusel">{subtitulo}</h3>
        <h3 className="aclaracionCarrusel">{aclaracion}</h3>
        <p className="texto">{texto}</p>
        <Button variant="outline-success">Más información</Button>{" "}
      </div>
    );
}

export default TextoCarruselItem;
