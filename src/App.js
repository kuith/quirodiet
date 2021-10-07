import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './estilos.css';

import Intro from './vistas/intro';
import BarraNavegacion from './contenedores/cabecera/barraNavegacion';
import ContenedorTarjetas from './contenedores/cuerpo/contenedorTarjetas';
import ContenedorServicios from './contenedores/cuerpo/contenedorServicios';

import QuiromasajeCuerpo from './vistas/servicios/quiromasajeCuerpo';
import BonosCuerpo from './vistas/servicios/bonosCuerpo';
import DeportivoCuerpo from './vistas/servicios/deportivoCuerpo';
import DieteticoCuerpo from './vistas/servicios/dieteticoCuerpo';
import OsteopatiaCuerpo from './vistas/servicios/osteopatiaCuerpo';
import PresoterapiaCuerpo from './vistas/servicios/presoterapiaCuerpo';
import RejuvenecimientoCuerpo from './vistas/servicios/rejuvenecimientoCuerpo';
import TatooCuerpo from './vistas/servicios/tatooCuerpo';

///Imagenes de las cabeceras de la páginas////
import Dummy from './utils/images/servicios/700_300_dummy.png';
///Fin Imágenes de las cabeceras de la páginas///

const App = () => {
  return (
    <Container>
       <BrowserRouter>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/servicios" component={ContenedorTarjetas} />

          <Route exact path="/servicios/bonos" 
            render={({ match }) => ( <ContenedorServicios servicio= "Bonos" /> )} 
          />
          <Route exact path="/servicios/deportivo"
            render={({ match }) => ( <ContenedorServicios servicio= "Asesoramiento deportivo" /> )} 
          />
          <Route exact path="/servicios/dietetico"
            render={({ match }) => ( <ContenedorServicios servicio= "Asesoramiento dietético" /> )} 
          />
          <Route exact path="/servicios/osteopatia"
            render={({ match }) => ( <ContenedorServicios servicio= "Osteopatía" /> )} 
          />
          <Route exact path="/servicios/presoterapia"
            render={({ match }) => ( <ContenedorServicios servicio= "Presoterapia" /> )} 
          />
          <Route exact path="/servicios/quiromasaje" 
            render={({ match }) => ( <ContenedorServicios 
              servicio= "Quiromasaje desde el inicio mas"
              s_textoImagen="El texto de la imagen de la cabecera. Esto luego lo pillo desde el archivo de configuración y será muy bonito."
              s_subtextoImagen="Este es el subtexto de la imagen, que irá, a veces debajo del texto de la imagen."
              s_imagen={Dummy}
              servicioComponente = {<QuiromasajeCuerpo/>}
              />)} 
          />
          <Route exact path="/servicios/rejuvenecimiento"
            render={({ match }) => ( <ContenedorServicios servicio= "Reuvenecimiento" /> )} 
          />
          <Route exact path="/servicios/tatoo"
            render={({ match }) => ( <ContenedorServicios servicio= "Tatoo" /> )} 
          />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
