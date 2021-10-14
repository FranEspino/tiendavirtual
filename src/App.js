import React from 'react'
import Banner from './components/Banner/Banner'
import Places from './components/Places/Places'
import Screens from './components/Screens/Screens'
import Steps from './components/Steps/Steps'
import Herramientas from './components/Herramientas/Herramientas'
import Pasos from './components/Pasos/Pasos'
import Feedback from './components/Feedback/Feedback'
import Marcas from './components/Marcas/Marcas'
import Planes from './components/Planes/Planes'
import ButtomWhasApp from './components/ButtomWhatsApp/ButtomWhasApp'
import Frecuentes from './components/Frecuentes/Frecuentes'
import Footer from './components/Footer/Footer'
const App = () => {
  return (

<>
    <Banner />
    <Screens/>
    <Places />
    <Steps />
    <Herramientas />
    <Pasos/>
    <Feedback />
      <Marcas />
      <Planes />
      <Frecuentes />
    <Footer />
    <ButtomWhasApp />
   </>
  )
}

export default App

