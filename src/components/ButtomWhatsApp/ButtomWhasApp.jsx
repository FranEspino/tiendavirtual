import React from 'react'
import './ButtomWhatsApp.css';
import { BsWhatsapp } from "react-icons/bs";
import { useDimension } from "../../hooks/useDimension";

const ButtomWhasApp = () => {
    const { width } = useDimension();
    console.log(width);
    return (
        <a className="btn-whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+51997630413&text=Hola estoy interesado en adquirir mi tienda virtual,%20¿Podrías brindarme %20más%20información?">
            <div className="btn-whatsapp_container">
            <BsWhatsapp   size={ (width >=700 ? 58 : 35) }  color={'#fff'}  />

            </div>
        </a>
    )
}

export default ButtomWhasApp
