import React from 'react';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button'

const TextoCarruselItem = ({titulo, precioCarrusel, aclaracion, texto, servicio }) => {
    return (
      <div className="textoCarrusel">
        <h1 className="tituloCarrusel">{titulo}</h1>
        <h3 className="subtituloCarrusel">Desde {precioCarrusel} €</h3>
        <h3 className="aclaracionCarrusel">{aclaracion}</h3>
        <p className="texto">{texto}</p>
        
        <Link to={`servicios/${servicio}`}>
          <Button variant="outline-success">Más información</Button>{" "}  
        </Link>
      </div>
    );
}

export default TextoCarruselItem;
