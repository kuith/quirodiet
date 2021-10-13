import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './estilos.css';

import Intro from './vistas/intro';
import BarraNavegacion from './contenedores/cabecera/barraNavegacion';
import ContenedorTarjetas from './contenedores/cuerpo/contenedorTarjetas';
import ContenedorServicios from './contenedores/cuerpo/contenedorServicios';
import CabeceraServicios from './vistas/servicios/cabeceraServicios';

import QuiromasajeCuerpo from './vistas/servicios/quiromasajeCuerpo';
import BonosCuerpo from './vistas/servicios/bonosCuerpo';
import DeportivoCuerpo from './vistas/servicios/deportivoCuerpo';
import DieteticoCuerpo from './vistas/servicios/dieteticoCuerpo';
import OsteopatiaCuerpo from './vistas/servicios/osteopatiaCuerpo';
import PresoterapiaCuerpo from './vistas/servicios/presoterapiaCuerpo';
import RejuvenecimientoCuerpo from './vistas/servicios/rejuvenecimientoCuerpo';
import TatooCuerpo from './vistas/servicios/tatooCuerpo';

import * as datosServicios from './datos/datosServicios';



///Imagenes de las cabeceras de la páginas////
import Dummy from './utils/images/servicios/dummy.png';
import LogoServicios from './utils/images/logprincipal_trans.png';
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
              servicioComponente = {<QuiromasajeCuerpo/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                s_imagen={datosServicios.quiromasaje.imagen}
                s_textoImagen={datosServicios.quiromasaje.textoImagen}
                s_subtextoImagen={datosServicios.quiromasaje.suxtextImagen}
              />}
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
