import React from 'react';
import { Link } from "react-router-dom";


const Tarjeta = ({imagen, titulo, precio, aclaracion, texto, ruta, altImagen, clase}) => {
    return (
      
    <div className="row row-cols-1 row-cols-md-3 g-4">
      
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <small className="text-muted">Last updated 3 mins ago</small>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>
    )
}

export default Tarjeta;

