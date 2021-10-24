import React from 'react';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BarraNavegacion = () => {
  return (
    <div>
      <nav class="navbar 
        navbar-expand-lg 
        navbar-light 
        transparent 
        navbar-inverse 
        navbar-fixed-top
        acmeNavbar">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbartoggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Row> 
                <Col><Link class="nav-link col" to="/">Inicio</Link></Col>
                <Col><Link class="nav-link col" to="/servicios">Servicios</Link></Col>
                <Col><Link class="nav-link col" to="/contacto">Contacto</Link></Col>
                <Col><Link class="nav-link col" to="/instalaciones">Instalaciones</Link></Col>
              </Row>
              </div>
          </div>
      </nav>
    </div>
    
  )
}

export default BarraNavegacion;