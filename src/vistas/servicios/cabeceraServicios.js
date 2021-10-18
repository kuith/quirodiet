import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';


const CabeceraServicios = ({s_textoImagen, s_subtextoImagen, s_logo, s_imagen}) => {
  return (
      <Row xs="auto">
        <Col xs={4}>
          <div className="paraCentrarLogo">
          <Image src={s_logo} fluid className="logoServicios centrado"/>
          </div>
        </Col>
        <Col xs={8}>
          <Image src={s_imagen} fluid className="imagenServicios"/>
          <p className="textoTituloServicios ">{s_textoImagen}</p>
          <p className="textoSubtituloServicios ">{s_subtextoImagen}</p>
        </Col>
      </Row>

  );
}

export default CabeceraServicios;