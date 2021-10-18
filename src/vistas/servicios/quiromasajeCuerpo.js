import React from 'react';

const QuiromasajeCuerpo = ({datosCuerpo}) => {
    return (
      <div>
        <h1 className="encabezadoCuerpoServicio">MASAJES Y TARIFAS (Individuales, sin bono).</h1>
        <ul className="textoCuerpoServicio">
          <li>
            Masaje deportivo + osteopatía (a criterio del profesional): <span className="tarifa"> TARIFA {datosCuerpo.quiromasajeDeportivo} €.</span>
          </li>
          <li>
            Masaje relajante + osteopatía (a criterio del profesional): <span className="tarifa">TARIFA {datosCuerpo.quiromasajeRelajante} €.</span>
          </li>
          <li>
            Masaje circulatorio: <span className="tarifa">TARIFA {datosCuerpo.quiromasajeCirculatorio} €.</span>
          </li>
          <li>
            Masaje descontracturante: <span className="tarifa">TARIFA {datosCuerpo.quiromasajeDescontracturante} €.</span>
          </li>
          <li>
            Masaje recuperador de lesiones + osteopatía (a criterio del profesional): <span className="tarifa">TARIFA {datosCuerpo.quiromasajeRecuperador} €.</span>
          </li>
          <li>
            Masaje jubilados + osteopatía (a criterio del profesional) con descuento CARNET JUBILADO: <span className="tarifa">TARIFA {datosCuerpo.quiromasajeJubilados} €.</span>
          </li>
        </ul>

        <h4>Llame e infórmese. Estaremos encantados de atenderle.</h4>
        <h3>SESIONES DE 50 MINUTOS</h3>
      </div>
    )
}

export default QuiromasajeCuerpo;
