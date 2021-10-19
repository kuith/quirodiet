import React from 'react';

const RejuvenecimientoCuerpo = ({datosCuerpo}) => {
    return (
      <div  className="textoCuerpoServicio">
        <h3>
          Tarifa desde {datosCuerpo.facial} €
        </h3>
        <p>          
          Eliminación de toxinas, eleva la temperatura de la piel destruyendo la dermis muerta para activar la producción de colágeno y elastina, disminuyendo grasa, flacidez y marcas de expresión.
        </p>
        <p>
          También se eliminan manchas color café, se dismimulan las estrías, elimina hongos de uñas, marcas de acné y capilares.
        </p>
      </div>
    )
}

export default RejuvenecimientoCuerpo;