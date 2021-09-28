import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextoCarruselItem from './textoCarruselItem';
import ImagenCarruselItem from './imagenCarruselItem';

const TarjetaItem = (props) => {
    return (
      <Row>
        <Col xs={6} className="noMargen">
          <TextoCarruselItem />
        </Col>
        <Col xs={6} className="noMargen">
          <ImagenCarruselItem />
        </Col>
      </Row>
    )
}

export default TarjetaItem;
