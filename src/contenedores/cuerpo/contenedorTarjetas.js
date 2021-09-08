import React from 'react';

import Tarjeta from '../../vistas/tarjeta';
import Logo from '../../vistas/logo';
import Imagen from '../../utils/images/carrusel/bonosCarrusel.png';
import Imagen2 from '../../utils/images/carrusel/deportivoCarrusel.png';

import {eliminacionTatuajes} from '../../parametros/datos';

import {Carousel} from 'react-bootstrap';


const ContenedorTarjetas = () => {
    const precioTatuajes = eliminacionTatuajes.eliminacionTatuajesPrecioCard;
    const tituloTatuajes = eliminacionTatuajes.eliminacionTatuajesTitulo;
    const textoTatuajes = eliminacionTatuajes.eliminacionTatuajesTextoCard;

    return (
      <div>   

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Imagen}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Imagen2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Imagen}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

<Logo />
      </div>
    )
}

export default ContenedorTarjetas;