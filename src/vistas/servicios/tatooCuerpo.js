import React from 'react';

const TatooCuerpo = ({datosCuerpo}) => {
    return (
      <div className="textoCuerpoServicio">
        <p>
        Si estás pensando en elimiar tu tatuaje, ahora es el momento.
        </p>
        <p>
        Consulta nuestros precios dependiendo del tamaño y color.
        </p>
        <p>
        Tarifa desde {datosCuerpo.tatoo} €
        </p>
      </div>
    )
}

export default TatooCuerpo;