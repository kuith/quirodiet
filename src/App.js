import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './estilos.css';

import Intro from './vistas/intro';
import BarraNavegacion from './contenedores/cabecera/barraNavegacion';
import ContenedorTarjetas from './contenedores/cuerpo/contenedorTarjetas';
import Bonos from './vistas/servicios/bonos';
import Deportivo from './vistas/servicios/deportivo';
import Dietetico from './vistas/servicios/dietetico';
import Osteopatia from './vistas/servicios/osteopatia';
import Presoterapia from './vistas/servicios/presoterapia';
import Quiromasaje from './vistas/servicios/quiromasaje';
import Rejuvenecimiento from './vistas/servicios/rejuvenecimiento';
import Tatoo from './vistas/servicios/tatoo';

const App = () => {
  return (
    <Container>
       <BrowserRouter>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/servicios" component={ContenedorTarjetas} />
          <Route exact path="/servicios/bonos" component={Bonos} />
          <Route exact path="/servicios/deportivo" component={Deportivo} />
          <Route exact path="/servicios/dietetico" component={Dietetico} />
          <Route exact path="/servicios/osteopatia" component={Osteopatia} />
          <Route exact path="/servicios/presoterapia" component={Presoterapia} />
          <Route exact path="/servicios/quiromasaje" component={Quiromasaje} />
          <Route exact path="/servicios/rejuvenecimiento" component={Rejuvenecimiento} />
          <Route exact path="/servicios/tatoo" component={Tatoo} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
