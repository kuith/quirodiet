import React from 'react';

const Contacto = ({}) => {
    return (
      <>
        <div className="textoContactoDireccion textoCentrado">
        Ronda del Saliente, nº 1 <br/>
        Torrejon de Ardoz (Madrid).<br/>
        TLF:91 011 12 60 - 653 82 29 45<br/>
        josesevilla.herrera@hotmail.com
        </div>
        
        <div className="textoCentrado textoCorreo">
        <a href="mailto:josesevilla.herrera@hotmail.com"  linkCorreo>Para escribirnos un correo, haga clic aquí.</a>
        </div>
        
        <div className="textoContactoInfo textoCentrado">
        HORARIO:<br/>
        De lunes a viernes de 09:00 a 14:00 y de 16:00 a 21:00<br/>
        Sabados de 08:00 a 14:00<br/>
        En caso de no avisar o no acudir a la sesion se le restara del bono.<br/>
        Pedir citas previas por telefono o whatsapp.<br/>
        1 hora de aparcamiento gratuito en parking publico de la Plaza mayor (Consultar).<br/>
        </div>
        
      </>
    )
}

export default Contacto;