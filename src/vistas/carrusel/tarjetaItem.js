import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextoCarruselItem from './textoCarruselItem';
import ImagenCarruselItem from './imagenCarruselItem';

const TarjetaItem = ({titulo, subtitulo, aclaracion, texto, imagen }) => {
    return (
      <Row xs="auto">
        <Col xs={6} className="noMargen">
          <TextoCarruselItem titulo={titulo} subtitulo={subtitulo} aclaracion={aclaracion} texto={texto}/>
        </Col>
        <Col xs={6} className="noMargen">
          <ImagenCarruselItem imagen={imagen}/>
        </Col>
      </Row>
    )
}

export default TarjetaItem;
