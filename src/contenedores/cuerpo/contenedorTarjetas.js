import React from 'react';

import {Carousel} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Logo from '../../vistas/logo';

//import CarruselTatoo from '../../utils/images/carrusel/C_Tatoo.png';

import TarjetaItem from '../../vistas/carrusel/tarjetaItem';

//import {eliminacionTatuajes} from '../../parametros/datos';




const ContenedorTarjetas = () => {

    return (
      <div>
        <Logo />
        <Container>
        <Carousel centered>
          <Carousel.Item className="bordePrueba">
            <TarjetaItem orden="Primer" />
          </Carousel.Item>

          <Carousel.Item className="bordePrueba">
           <TarjetaItem orden="Segundo" />
          </Carousel.Item>

          <Carousel.Item className="bordePrueba">
            <TarjetaItem orden="Tercero" />
          </Carousel.Item>

        </Carousel>

      </Container>
      </div>
    )
}

export default ContenedorTarjetas;