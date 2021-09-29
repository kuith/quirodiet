import React from 'react';

import {Carousel} from 'react-bootstrap';
import Logo from '../../vistas/logo';

import CarruselTatoo from '../../utils/images/carrusel/C_Tatoo.png';

import TarjetaItem from '../../vistas/carrusel/tarjetaItem';


const ContenedorTarjetas = () => {

    return (
      <div>
        <Logo />
          <Carousel className="carrusel">
            <Carousel.Item>
              <TarjetaItem orden="Primer"  imagen={CarruselTatoo}/>
            </Carousel.Item>

            <Carousel.Item>
              <TarjetaItem orden="Segundo"   imagen={CarruselTatoo}/>
            </Carousel.Item>

            <Carousel.Item>
              <TarjetaItem orden="Tercero"   imagen={CarruselTatoo}/>
            </Carousel.Item>
          </Carousel>
      </div>
    )
}

export default ContenedorTarjetas;