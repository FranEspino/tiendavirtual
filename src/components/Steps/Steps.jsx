import React from "react";
import StepLinea from "../../assets/StepLinea.png";
import StepOnda from "../../assets/StepOnda.png";
import "./Steps.css";
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import "../../fonts/Poppins/Poppins-Bold.ttf";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { useDimension } from "../../hooks/useDimension";
const Steps = () => {
  const { width } = useDimension();


  return (
    <div className="steps_global" style={{ paddingBottom: 55 }}>
      <div className="steps_container">
        <h2 className="step_number">5</h2>
        <div className="step_containerinfo">
          <div className="step_containertext">
            <h2 className="step_title">Beneficios de la</h2>
            <h2 className="step_subtitle">Tienda Virtual</h2>
            <h2 className="step_subtitle2">para tu negocio</h2>
          </div>
          <img src={StepOnda} alt="Onda Step" />
        </div>
      </div>
      {/*STEP 1 */}
      <div className="fadeStepIn1" >
        <div className="step_one ">
          <div className="step_one_image">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634056842/step1_nyebgb.png"
              alt="Tienda Virtual "
            />
          </div>

          <div>
            {width >= 700 ? (
              <BsChevronDoubleLeft
                color={"#E67D0C"}
                size="30"
                style={{ marginLeft: 40 }}
              />
            ) : (
              <></>
            )}
          </div>
          <div clasName="step_one_description" style={ (width>= 700)? {paddingLeft:120} :{paddingLeft:0}}>
            <h1 className="step_number_description">01</h1>
            <h2 className="step_title_desciption">Tu propia tienda virtual</h2>
            {width >= 700 ? (
              <span className="step_resume_desciption">
           Muestra todos tus productos, precios, promociones y ofertas que desees.
              </span>
            ) : (
              <span className="step_resume_desciption">
          Muestra todos tus productos, precios, promociones y ofertas que desees.
              </span>
            )}

            {width >= 700 ? (
              <div className="step_border_desciption">
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
        {width <= 700 ? (
          <div className="step_divider">
            <img src={StepLinea} alt="Onda Step" />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/*STEP 2 */}
      <div className="fadeStepIn2"  style={{marginTop:60}}>
        <div className="step_two fadeStepIn2" >
          <div class="step_two_description" style={ (width>= 700)? {paddingRight:120} :{paddingLeft:0}}>
            <h1 className="step_number_description">02</h1>
            <h2 className="step_title_desciption">Aumenta tus ventas</h2>
            <span className="step_resume_desciption">
            Podrás automatizar el proceso de compra de tus clientes, atendiendo a más personas que visitarán tu tienda virtual y realizarán su compra. ¡Tú ahorrarás tiempo y obtendrás más ganancias!
            </span>
            {width >= 700 ? (
              <div className="step_border" style={{ marginTop: 35 }}>
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {width >= 700 ? (
              <BsChevronDoubleRight
                color={"#E67D0C"}
                size="30"
                style={{ marginLeft: 40 }}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="step_two_image">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634056589/StepAumento_opmkwh.png"
              alt="Aumento de ventas"
            />
          </div>
          {width <= 700 ? (
            <div className="step_divider">
              <img src={StepLinea} alt="Onda Step" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/*STEP 3 */}
      <div className="fadeStepIn3" >
        <div className="step_one ">
          <div className="step_one_image ">
            <img
              className="cerdito"
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634057390/ChanchoSteps_hpftrn.png"
              alt="Tienda Virtual "
            />
          </div>

          <div>
            {width >= 700 ? (
              <BsChevronDoubleLeft color={"#E67D0C"} size="30" />
            ) : (
              <></>
            )}
          </div>
          <div clasName="step_one_description" style={ (width>= 700)? {paddingLeft:120} :{paddingLeft:0}}>
            <h1 className="step_number_description">03</h1>
            <h2 className="step_title_desciption">Disminuye costos</h2>
            {width >= 700 ? (
              <span className="step_resume_desciption">
            Ahorra en infraestructura, decoración, entre otros gastos de local que evitarás vendiendo online.
              </span>
            ) : (
              <span className="step_resume_desciption">
               Ahorra en infraestructura, decoración, entre otros gastos de local que evitarás vendiendo online.
              </span>
            )}

            {width >= 700 ? (
              <div className="step_border_desciption">
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>

        {width <= 700 ? (
          <div className="step_divider">
            <img src={StepLinea} alt="Onda Step" />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/*STEP 4 */}
      <div className="fadeStepIn4" >
        <div className="step_two ">
          <div class="step_two_description"  style={ (width>= 700)? {paddingRight:120} :{paddingLeft:0}}>
            <h1 className="step_number_description">04</h1>
            <h2 className="step_title_desciption">Tu negocio online</h2>
            <span className="step_resume_desciption">
            Libérate de los límites de aforo y horario de un local y llega a personas que te comprarán desde donde se encuentren, las 24 horas del día.
            </span>
            {width >= 700 ? (
              <div className="step_border" style={{ marginTop: 35 }}>
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {width >= 700 ? (
              <BsChevronDoubleRight
                color={"#E67D0C"}
                size="30"
                style={{ marginLeft: 40 }}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="step_two_image">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634054873/DeliberyGuy_ix21gk.svg"
              alt="Aumento de ventas"
            />
          </div>
          {width <= 700 ? (
            <div className="step_divider">
              <img src={StepLinea} alt="Onda Step" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/*STEP 5 */}
      <div className="fadeStepIn5 step5" >
        <div className="step_one ">
          <div
            className="step_one_image"
            style={{ marginTop: -25, marginLeft: 30 }}
          >
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634054819/Database_zhmefg.svg"
              alt="Tienda Virtual "
            />
          </div>

          <div>
            {width >= 700 ? (
              <BsChevronDoubleLeft color={"#E67D0C"} size="30" />
            ) : (
              <></>
            )}
          </div>
          <div clasName="step_one_description" style={ (width>= 700)? {paddingLeft:120} :{paddingLeft:0}}>
            <h1 className="step_number_description">05</h1>
            <h2 className="step_title_desciption">
            Obtén la base de datos de tus clientes.
            </h2>
            {width >= 700 ? (
              <span className="step_resume_desciption">
               Tendrás a la mano tu propia base de datos con toda la información que ingresen tus clientes al realizar sus compras. 
              </span>
            ) : (
              <span className="step_resume_desciption">
                Con los datos que ingrese el cliente al realizar su compra,
                tendrás a la mano la base de datos de tus clientes.
              </span>
            )}

            {width >= 700 ? (
              <div className="step_border_desciption">
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>

        {width <= 700 ? (
          <div className="step_divider">
            <img src={StepLinea} alt="Onda Step" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Steps;