import React from "react";
import  {Route,Router} from "react-router-dom"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import AddService from "./pages/AddService";

const App=()=>{

  return(

    <>
    <NavBar/>
    <Service/>
    <AddService/>
    <Footer/>
    
    </>
  )
}

export default App