import React from 'react'
import './Frecuentes.css'
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import Collapsible from 'react-collapsible';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useDimension } from "../../hooks/useDimension";

const Frecuentes = () => {
    const  togger1 = "¿Qué tipos de negocios utilizan Tienda Virtual Vespro?";
   const  trigger2=`¿Tengo que comprar  un ${' '}  dominio y servidor propio para obtener mi tienda virtual?`
   const trigger3="¿Utilizan pasarela de pago?";
   const trigger4="¿Dónde se almacena la información de mi tienda virtual?";
   const trigger5="¿Qué te ofrecemos con la tienda virtual?";
   const { width } = useDimension();

   return (
        <div className="frecuentes_container">
            <h1 className="frecuentes_title">Preguntas Frecuentes</h1>
            <Collapsible open={true} trigger={[togger1, <AiFillCaretDown size={ (width>=700)? 20: 20}/>]}   >
                <p>
                    Diferentes categorías de negocios como restaurantes, pollerías, cevicherías, pizza, chifa, pastelerías, tiendas retail, ropa, accesorios, servicios en general y emprendedores que trabajan desde casa.
                </p>
                
            </Collapsible>
            <br />
            <Collapsible trigger={[trigger2, <AiFillCaretDown size={ (width>=700)? 20: 28}/>]}   >
                <p>
                    No necesariamente, Vespro te puede ofrecer un dominio con una extensión con el nombre de tu negocio, ejem: vespro.io/minegocio
                </p>
            </Collapsible>
            <br />

            <Collapsible trigger={[trigger3, <AiFillCaretDown size={ (width>=700)? 20: 15}/>]}   >
                <p>
                Así es, si tu negocio lo requiere, podemos integrar pasarela de pagos. El dinero que paguen tus clientes llegará directo a tu cuenta bancaria.
                </p>
            </Collapsible>
            <br />

            <Collapsible trigger={[trigger4, <AiFillCaretDown size={ (width>=700)? 20: 20}/>]}   >
                <p>
                Toda la información de los productos, categorías, precios y más están almacenados en la nube, esto te permite poder acceder a esa información en el momento que lo requieras.                </p>
            </Collapsible>
            <br />

            <Collapsible trigger={[trigger5, <AiFillCaretDown size={ (width>=700)? 20: 15}/>]}   >
    <p>
    Te ofrecemos plantillas administrables, en las que podrás colocar la información de tus productos, pecios y más. No necesitas conocimientos previos, ya que es muy sencillo utilizar el sistema.     </p>
</Collapsible>
        </div>
    )
}

export default Frecuentes

