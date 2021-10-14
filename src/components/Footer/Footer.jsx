import React from 'react'
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import ImageFooter from '../../assets/imagefooter.png';
import BackFooter from '../../assets/backfooter.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer_global">
               <svg className="footer_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f08148" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,122.7C480,149,600,235,720,245.3C840,256,960,192,1080,160C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className="footer_container" >
         
         <div className="container_text_footer">

             <img src={ImageFooter} alt="" />
             <h1 className="footer_title">¡Qué tu negocio no se detenga!
             </h1>
             <span className="footer_text_small">Hecho con ♥ por Corporación Vespro
             </span>
         </div>
     </div>
        </div>
       
    )
}

export default Footer
