import React from 'react';

import {Carousel} from 'react-bootstrap';

import Logo from '../../vistas/logo';

import CarruselTatoo from '../../utils/images/carrusel/C_Tatoo.png';

import TarjetaItem from '../../vistas/carrusel/tarjetaItem';

import {eliminacionTatuajes} from '../../parametros/datos';




const ContenedorTarjetas = () => {

    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <TarjetaItem orden="Primer" />
          </Carousel.Item>

          <Carousel.Item>
           <TarjetaItem orden="Segundo" />
          </Carousel.Item>

          <Carousel.Item>
            <TarjetaItem orden="Tercero" />
          </Carousel.Item>

        </Carousel>

        <Logo />
      </div>
    )
}

export default ContenedorTarjetas;