import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './estilos.css';

import Intro from './vistas/intro';
import BarraNavegacion from './contenedores/cabecera/barraNavegacion';
import ContenedorTarjetas from './contenedores/cuerpo/contenedorTarjetas';

const App = () => {
  return (
    <Container>
       <BrowserRouter>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/servicios" component={ContenedorTarjetas} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
