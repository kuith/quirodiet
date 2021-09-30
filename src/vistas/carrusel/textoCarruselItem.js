import React from 'react';

//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

const TextoCarruselItem = (props) => {
    return (
        <div className="textoCarrusel" >
           {/* <Image src={props.imagen} fluid /> */}
          <h1 className="tituloCarrusel">SESIÓN DE ELIMINACIÓN DE TATUAJES</h1>
          <h3 className="subtituloCarrusel">Desde 22 €</h3>
          <h3 className="aclaracionCarrusel"> (Con bono de 10)</h3>
          <br/>
          <br />
          <p className="texto">
            Método de exploración (mediante la palpación) y de tratamiento manual, aplicado sobre la cubierta corporal.
          </p>
          <br />
          <br />
          <Button variant="outline-success">Más información</Button>{' '}
        </div>
    )
}

export default TextoCarruselItem;
