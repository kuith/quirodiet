import React from 'react';
//import Image from 'react-bootstrap/Image';

import LogoPrincipal from '../utils/images/logprincipal_trans.png';

const Logo = () => {
    return (
      <div>
        <img src={LogoPrincipal} class="img-fluid mx-auto d-block LogoPrincipal" alt="Logo"></img>
        {/* <Image src={LogoPrincipal}  alt="Logo" fluid className="mx-auto d-block LogoPrincipal"/> */}
      </div>
    )
}

export default Logo;