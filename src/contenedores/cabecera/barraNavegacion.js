import React from 'react';
import { Link } from "react-router-dom";

const BarraNavegacion = () => {
  return (
    <div>
      <nav class="navbar 
        navbar-expand-lg 
        navbar-light 
        transparent 
        navbar-inverse 
        navbar-fixed-top
        acmeNavbar ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbartoggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link col" to="/">Inicio</Link>
                <Link class="nav-link col" to="/servicios">Servicios</Link>
                <Link class="nav-link col" to="/contacto">Contacto</Link>
              </div>
          </div>
      </nav>
    </div>
    
  )
}

export default BarraNavegacion;