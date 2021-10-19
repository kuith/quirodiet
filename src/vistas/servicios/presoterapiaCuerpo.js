import React from 'react';

const PresoterapiaCuerpo = ({datosCuerpo}) => {
    return (
      <div>
        <h1 className="encabezadoCuerpoServicio">SUS FUNCIONES SON:</h1>
        <ul className="textoCuerpoServicio">
          <li>Activar la circulación eliminando toxinas, cansancio, pesadez y mejora las varices.</li>
          <li>Es muy recomendable para personas embarazadas o con problemas circulatorios.</li>
          <li>Ayuda a perder peso mediante el drenaje linfático que combinado con una buena dieta y algo de ejercicio podemos conseguir un resultado asombroso para nuestra figura.</li>
          <li>Reduce la celulitis y mejora la piel de naranja tonificando músculos y articulaciones siempre que se combine con ejercicio.</li>
          <li>Nos ayuda a la relajación de los músculos y a la fatiga muscular.</li>
          <li>Combate los problemas de estreñimiento, y si se aplica un masaje manual y con dieta el resultado es buenísimo.</li>
          <li>Hay que tomar un par de vasos de agua antes de darse una sesión.</li>
          <li>En la mayoría de las sesiones es ideal acompañarlas con dieta y hacer algo de ejercicio para unos resultados satisfactorios.</li>
          <li>No se recomienda a personas que tengan el período.</li>
        </ul>

        <h3>Sesión de presoterapia  de 30 min. + masaje anticelulitico de 30 min.: {datosCuerpo.presoterapiaSesion} € por sesión.</h3>
      </div>
    )
}

export default PresoterapiaCuerpo;
