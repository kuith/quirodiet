import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../vistas/logo';
import CuerpoContacto from '../../vistas/contacto/textoContacto';
import MapaContacto from '../../vistas/contacto/mapaCpntacto';

const ContenedorContacto = () => {
    return (
      <>
      <Logo/>
      <div className="textoCuerpoServicio">
        <Row xs="auto">
          <Col xs={6} className="imagenContacto">
            <MapaContacto />
          </Col>
          <Col xs={6}>
            {<CuerpoContacto />}
          </Col>
        </Row>
      </div>
      </>
    )
}

export default ContenedorContacto;