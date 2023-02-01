import React from "react";
import { Footer } from "../utils/footer/Footer";
import NavBar from "../utils/NavBar";
import Casos from "./casos/Casos";
import Contacto from "./contacto/Contacto";
import Header from "./header/Header.js";
import Seccion from "./seccion/seccion";

const Empresas =()=>{
    return(
        <>
            <NavBar/>
            <Header />
            <Seccion />
            <Casos />
            <Contacto />
            <Footer />
        </>
    )
}

export default Empresas