import React from 'react';
//import Image from 'react-bootstrap/Image';

import LogoPrincipal from '../utils/images/logprincipal_trans.png';

const Logo = () => {
  return (
    <div>
      <img src={LogoPrincipal} class="img-fluid mx-auto d-block LogoPrincipal" alt="Logo"></img>
    </div>
  );
}

export default Logo;