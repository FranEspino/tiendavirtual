import React from 'react'
import ValorationAnimation from '../Valoration/ValorationAnimation'
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import { FaUserAlt } from "react-icons/fa";
import { useDimension } from "../../hooks/useDimension";

import './Feedback.css'
const Feedback = () => {
    const { width } = useDimension();
    console.log(width);
    return (
        <div className="feedback_container">
            <div className="feedback_animation">
                <ValorationAnimation />
            </div>
            <div className="feedback_description">
                <h2 className="feedback_desciption_title">Nuestros clientes nos respaldan
                </h2>
                <span className="feedback_desciption_subtitle">Intuitivo y amigable para el usuario
                </span>
                {(width >= 700) ?
                    <p className="feedback_desciption_text"  >Gracias a la Tienda Virtual de VESPRO <br />
                        hemos podido incrementar (30%) en nuestras ventas en comparación <br />
                        al mes anterior. Llegando a más clientes. !!!Buenazo!!!</p>
                    : <p className="feedback_desciption_text"  >Gracias a la Tienda Virtual de VESPRO
                        hemos podido incrementar (30%) en nuestras ventas en comparación
                        al mes anterior. Llegando a más clientes. !!!Buenazo!!!</p>
                }

                <div className="feedback_user">
                    <FaUserAlt size={(width >= 700) ? 50 : 35} />
                    <div className="feedback_user_text">
                        <h2 style={width >=700 ? { margin: 0, paddingBottom: 15 } : {margin: 0, paddingBottom: 5}} className="feedback_user_h2">Carlos Cabrera</h2>
                        <span className="feedback_user_span" >CEO de ONEIL<br />
                            Chiclayo
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
