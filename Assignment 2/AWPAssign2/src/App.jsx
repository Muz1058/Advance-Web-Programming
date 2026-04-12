import React from "react";
import  {Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import AddService from "./pages/AddService";
import Home from "./pages/Home";
import { ServicesProvider } from "./context/ServicesContext";


const App=()=>{

  return(

    <ServicesProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <NavBar/>

        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-10">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Service/>} />
            <Route path="/add" element={<AddService/>} />
          </Routes>
        </main>
        
        <Footer/>
      </div>
    </ServicesProvider>
  )
}

export default App
