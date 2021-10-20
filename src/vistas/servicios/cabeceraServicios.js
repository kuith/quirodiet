import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';


const CabeceraServicios = ({datosCabecera, s_logo}) => {
  return (
    <Row xs="auto">
      <Col xs={4}>
        <div className="paraCentrarLogo">
        <Image src={s_logo} fluid className="logoServicios centrado"/>
        </div>
      </Col>
      <Col xs={8}>
        <Image src={datosCabecera.imagen} fluid className="imagenServicios"/>
        <p className="textoTituloServicios ">{datosCabecera.textoImagen}</p>
        <p className="textoSubtituloServicios ">{datosCabecera.subtextoImagen}</p>
      </Col>
    </Row>
  );
}

export default CabeceraServicios;