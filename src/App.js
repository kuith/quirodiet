import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './estilos.css';

import Intro from './vistas/intro';
import ImagenIntro from './utils/images/imagenIntro2.png';
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

import ContenedorContacto from './contenedores/cuerpo/contenedorContacto';

import * as datosServicios from './datos/datosServicios';

///Imagenes de las cabeceras de la páginas////
import LogoServicios from './utils/images/logprincipal_trans.png';
///Fin Imágenes de las cabeceras de la páginas///

const App = () => {
  return (
    <Container>
       <BrowserRouter>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/" 
            render={({ match }) => ( <Intro imagenIntro = {ImagenIntro}/>)}/>

          <Route exact path="/servicios" component={ContenedorTarjetas} />

          <Route exact path="/servicios/bonos" 
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<BonosCuerpo datosCuerpo = {datosServicios.bonos}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.bonos}
              />}
            />)} 
          />
          <Route exact path="/servicios/deportivo"
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<DeportivoCuerpo datosCuerpo = {datosServicios.deportivo}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.deportivo}
              />}
            />)} 
          />
          <Route exact path="/servicios/dietetico"
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<DieteticoCuerpo datosCuerpo = {datosServicios.dietetico}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.dietetico}
              />}
            />)}
          />
          <Route exact path="/servicios/osteopatia"
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<OsteopatiaCuerpo/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.osteopatia}
              />}
              />)}
          />
          <Route exact path="/servicios/presoterapia"
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<PresoterapiaCuerpo datosCuerpo = {datosServicios.presoterapia}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.presoterapia}
              />}
            />)} 
          />
          <Route exact path="/servicios/quiromasaje" 
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<QuiromasajeCuerpo datosCuerpo = {datosServicios.quiromasaje}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.quiromasaje}
              />}
            />)} 
          />
          <Route exact path="/servicios/rejuvenecimiento"
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<RejuvenecimientoCuerpo datosCuerpo = {datosServicios.facial}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.facial}
              />}
            />)} 
          />
          <Route exact path="/servicios/tatoo"
            render={({ match }) => ( <ContenedorServicios 
              servicioComponente = {<TatooCuerpo datosCuerpo = {datosServicios.tatoo}/>}
              cabeceraServicios = {<CabeceraServicios 
                s_logo={LogoServicios}
                datosCabecera = {datosServicios.tatoo}
              />}
            />)}
          />
          <Route exact path="/contacto" component={ContenedorContacto} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
