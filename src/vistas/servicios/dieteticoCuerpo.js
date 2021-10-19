import React from 'react';

const DieteticoCuerpo = ({datosCuerpo}) => {
    return (
      <div  className="textoCuerpoServicio">
        <h2 className="encabezadoCuerpoServicio">
          Asesoramiento dietético con control cada 20 o 30 días:
        </h2>
        <ul className="textoCuerpoServicio">
          <li>Primera sesión: {datosCuerpo.primera} €</li>
          <li>Seguimiento: {datosCuerpo.seguimiento} €</li>
        </ul>
      </div>
    )
}

export default DieteticoCuerpo;