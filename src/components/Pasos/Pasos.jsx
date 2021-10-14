import React from "react";
import StepOnda from "../../assets/StepOnda.png";
import Celular1 from '../../assets/celular1.png';
import Celular2 from '../../assets/celular2.png';
import Celular3 from '../../assets/celular3.png';

import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import "./Pasos.css";
import "../../fonts/Poppins/Poppins-Bold.ttf";
import { useDimension } from "../../hooks/useDimension";

const Pasos = () => {
  const { width } = useDimension();

  return (
    <div style={{marginTop:-100}}>
      <div className="container_pasos">
        <div className="title_pasos">
          <h1>Tu pedido en <br />  3 simples pasos</h1>
          <img src={StepOnda} alt="StepOnda" className="StepOnda" />
        </div>

        <div className="container_paso1">
          <img src={Celular1} alt="" />
          <div className="text_pasos">
            <h2 className="number_text">01</h2>
            <span className="description_text">Escanea el QR y elige <br />
              la categoría del producto<br />
              que deseas.</span>
          </div>
        </div>
        <div className={ (width>=700)? `container_paso1`: `container_paso2`}>
          <div className=" text_2">
            <h2 className="number_text">02</h2>
            <span className="description_text">Escoge tu producto favorito y <br />
              agrega al carrito de compras.</span>
          </div>
          <img src={Celular2} alt="" />
        </div>

        <div className="container_paso1">
          <img src={Celular3} alt=""  style={{marginLeft:20}}/>
          <div className="text_pasos">
            <h2 className="number_text">03</h2>
            <span className="description_text">Ingresa tus datos <br />
            para la compra y envía tu pedido 
<br />
directo al whatsapp del negocio. 
</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasos;
