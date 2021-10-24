import React from 'react';

import LogoPrincipal from '../utils/images/logprincipal_trans.png';

const Logo = () => {
  return (
    <div>
      <img src={LogoPrincipal} className="img-fluid mx-auto d-block LogoPrincipal" alt="Logo"></img>
    </div>
  );
}

export default Logo;