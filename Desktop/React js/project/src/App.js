import React from 'react'



import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import "./App.css"
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import {Projects} from "./Components/Projects"
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Contactform1 from "./Components/Contactform1"
// import { BrowserRouter,Route,Routes,Link } from "react-router-dom";  
import {Additionalprojects} from './Components/Additionalprojects'






function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects/>
     <Additionalprojects/>
   
     <Contactform1/>
    
     {/* <div dangerouslySetInnerHTML={{ __html: Contactform }} /> */}
     {/* <MailchimpForm/> */}
     <Footer/>
     

    </div>
  )
}

export default App
