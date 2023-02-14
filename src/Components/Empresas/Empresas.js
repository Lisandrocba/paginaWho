import React from "react";
import { Footer } from "../utils/footer/Footer";
import NavBar from "../utils/NavBar";
import CasosCarrusel from "./casosCarrusel.js/CasosCarrusel";
import Contacto from "./contacto/Contacto";
import Header from "./header/Header.js";
import Seccion from "./seccion/seccion";

const Empresas =()=>{
    return(
        <div className='contenedorEmpresasTotal'>
            <NavBar/>
            <Header />
            <Seccion />
            <CasosCarrusel />
            <Contacto />
            <Footer />
        </div>
    )
}

export default Empresas