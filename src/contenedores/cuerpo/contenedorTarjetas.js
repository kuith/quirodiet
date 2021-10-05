import React from 'react';

import {Carousel} from 'react-bootstrap';
import Logo from '../../vistas/logo';

import TarjetaItem from '../../vistas/carrusel/tarjetaItem';

import {
  carruselQuiromasaje,
  carruselOsteopatia,
  carruselPresoterapia,
  carruselDeportivo,
  carruselDietetico,
  carruselBonos,
  carruselRejuvenecimiento,
  carruselTatoo
} from '../../datos/datosCarrusel';


const ContenedorTarjetas = () => {
  const datosCarrusel = [
    carruselQuiromasaje,
    carruselOsteopatia,
    carruselPresoterapia,
    carruselDeportivo,
    carruselDietetico,
    carruselBonos,
    carruselRejuvenecimiento,
    carruselTatoo];

  const carruselTotal = datosCarrusel.map(item =>(
    <Carousel.Item>
      <TarjetaItem
        titulo= {item.titulo}
        precioCarrusel={item.precioCarrusel}
        aclaracion={item.aclaracion}
        texto={item.texto}
        imagenCarrusel={item.imagenCarrusel}
        servicio={item.servicio}
      />
    </Carousel.Item>
  ));

  return (
    <div>
      <Logo />
      <Carousel className="carrusel">
        {carruselTotal}
      </Carousel>
    </div>
  )
}

export default ContenedorTarjetas;