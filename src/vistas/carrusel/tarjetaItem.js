import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextoCarruselItem from './textoCarruselItem';
import ImagenCarruselItem from './imagenCarruselItem';

const TarjetaItem = (props) => {
    return (
      <Row>
        <Col xs={6} className="noMargen">
          <TextoCarruselItem imagen={props.imagen}/>
        </Col>
        <Col xs={6} className="noMargen">
          <ImagenCarruselItem imagen={props.imagen}/>
        </Col>
      </Row>
    )
}

export default TarjetaItem;
