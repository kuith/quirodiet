import React from 'react';

const BonosCuerpo = ({datosCuerpo}) => {
    return (
      <div>
        <h1 className="encabezadoCuerpoServicio">MASAJES Y TARIFAS (Individuales, sin bono).</h1>
        <ul className="textoCuerpoServicio">
          <li>
            Bono de masajes (3 sesiones). Tarifa:{datosCuerpo.bonoMasajes3} €
          </li>
          <li>
            Bono de masajes (6 sesiones). Tarifa:1{datosCuerpo.bonoMasajes6} €
          </li>
          <li>
            Bono de masajes (10 sesiones). Tarifa:{datosCuerpo.bonoMasajes10} €
          </li>
          <li>
            Bono especial anticelulítico + dieta (5 sesiones presoterapia + 5 masajes + dieta). Tarifa:{datosCuerpo.bonoAnticelulitico} €
          </li>
          <li>
            Pack Dieta + Rutina Entrenamiento. Tarifa:{datosCuerpo.bonoDieta} €
          </li>
        </ul>
        <h3>TODOS LOS BONOS SON TRANSFERIBLES A OTRAS PERSONAS</h3>
      </div>
    )
}

export default BonosCuerpo;









