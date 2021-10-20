import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../vistas/logo';
import CuerpoContacto from '../../vistas/cuerpoContacto';

const ContenedorContacto = () => {
    return (
      <div className="textoCuerpoServicio">
        <Row xs="auto">
          <Col xs={4} className="imagenContacto">
            {<Logo />}
          </Col>
          <Col xs={8}>
            {<CuerpoContacto />}
          </Col>
        </Row>
      </div>
    )
}

export default ContenedorContacto;