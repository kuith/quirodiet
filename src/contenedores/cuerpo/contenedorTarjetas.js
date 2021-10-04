import React from 'react';

import {Carousel} from 'react-bootstrap';
import Logo from '../../vistas/logo';

import ImgCarruselTatoo from '../../utils/images/carrusel/C_Tatoo.png';

import TarjetaItem from '../../vistas/carrusel/tarjetaItem';


const ContenedorTarjetas = () => {

    return (
      <div>
        <Logo />
          <Carousel className="carrusel">
            <Carousel.Item>
            <TarjetaItem
              titulo="SESIÓN DE ELIMINACIÓN DE TATUAJES"
              precioCarrusel="22"
              aclaracion="(Con bono de 10)"
              texto="Utiliza la presión de aire, a modo de masaje, activando el sistema linfático mejorando la circulación."
              imagen={ImgCarruselTatoo}
              servicio="#"
            />
            </Carousel.Item>

            <Carousel.Item>
              <TarjetaItem
              titulo="SESIÓN DE ELIMINACIÓN DE TATUAJES"
              precioCarrusel="30"
              aclaracion="(Con bono de 10)"
              texto="Utiliza la presión de aire, a modo de masaje, activando el sistema linfático mejorando la circulación."
              imagen={ImgCarruselTatoo}
              servicio="#"
            />
            </Carousel.Item>

            <Carousel.Item>
              <TarjetaItem
              titulo="SESIÓN DE ELIMINACIÓN DE TATUAJES"
              precioCarrusel="22"
              aclaracion="(Con bono de 10)"
              texto="Utiliza la presión de aire, a modo de masaje, activando el sistema linfático mejorando la circulación."
              imagen={ImgCarruselTatoo}
              servicio="#"
            />
            </Carousel.Item>
          </Carousel>
      </div>
    )
}

export default ContenedorTarjetas;