import React from 'react'
import { useEffect } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import About from './Pages/About/About'
import Tours from './Pages/Tours/Tours'
import "aos/dist/aos.css";
import Aos from 'aos'
import Hotels from './Pages/Hotels/Hotels'
import Flights from './Pages/Flights/Flights'
import Contact from './Pages/Contact/Contact'


function App() {

      useEffect(() => {
    Aos.init({
        duration: 900,
        offset: 50,
        easing: 'ease-in-out', 
    });
}, []);




  return (
    <>
     <Header/>
     <Main/>
     <About/>
     <Tours/>
     <Hotels/>
     <Flights/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
