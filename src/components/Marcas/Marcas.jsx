import React from 'react'
import './Marcas.css';
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';
import Logo4 from '../../assets/logo4.png';
import Logo5 from '../../assets/logo5.png';
import Logo6 from '../../assets/logo6.png';
import Logo7 from '../../assets/logo7.png';
import Logo8 from '../../assets/logo8.png';
import Logo9 from '../../assets/logo9.png';
import Logo10 from '../../assets/logo10.png';
import Logo11 from '../../assets/logo11.png';
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";

const Marcas = () => {
    return (
        <div className="marcas_global" >
            <div className="marcas_container">
                  <h1 className="marcas_title">Marcas que confian en nosotros</h1>
                <div className="marcas_logos">
                    <img src={Logo1} alt="logo1" />
                    <img src={Logo2} alt="logo2" />
                    <img src={Logo3} alt="logo3" />
                    <img src={Logo4} alt="logo4" />
                    <img src={Logo5} alt="logo5" />
                    <img src={Logo6} alt="logo6" />
                    <img src={Logo7} alt="logo7" />
                    <img src={Logo8} alt="logo8" />
                    <img src={Logo9} alt="logo9"  className="logo9"/>
                    <img src={Logo10} alt="logo10" className="logo10"/>
                    <img src={Logo11} alt="logo11"  className="logo11" />
                </div>
            </div>
        </div>
    )
}

export default Marcas
