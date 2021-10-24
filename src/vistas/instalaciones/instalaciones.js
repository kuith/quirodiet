import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Instalaciones = ({imagenesInstalaciones}) => {

  const carruselinstalaciones  = imagenesInstalaciones.map(instalacion=>(
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={instalacion}
        alt="First slide"
      />
    </Carousel.Item> 
  ));
    return (
      <Carousel>
        {carruselinstalaciones}
      </Carousel>
    );
}

export default Instalaciones;


