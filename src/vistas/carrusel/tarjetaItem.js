import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextoCarruselItem from './textoCarruselItem';
import ImagenCarruselItem from './imagenCarruselItem';

const TarjetaItem = ({titulo, precioCarrusel, aclaracion, texto, imagenCarrusel, servicio }) => {
    return (
      <Row xs="auto">
        <Col xs={6} className="noMargen">
          <TextoCarruselItem titulo={titulo} precioCarrusel={precioCarrusel} aclaracion={aclaracion} texto={texto} servicio={servicio}/>
        </Col>
        <Col xs={6} className="noMargen">
          <ImagenCarruselItem imagenCarrusel={imagenCarrusel}/>
        </Col>
      </Row>
    )
}

export default TarjetaItem;
