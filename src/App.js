import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './estilos.css';

import Intro from './vistas/intro';
import BarraNavegacion from './contenedores/cabecera/barraNavegacion';
import ContenedorTarjetas from './contenedores/cuerpo/contenedorTarjetas';

const App = () => {
  return (
    <div className="container">
       <BrowserRouter>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/servicios" component={ContenedorTarjetas} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
