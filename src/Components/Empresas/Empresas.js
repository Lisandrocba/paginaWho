import React from "react";
import { Footer } from "../utils/footer/Footer";
import NavBar from "../utils/NavBar";
import Contacto from "./contacto/Contacto";
import Header from "./header/Header.js";

const Empresas =()=>{
    return(
        <>
            <NavBar/>
            <Header />
            <Contacto />
            <Footer />
        </>
    )
}

export default Empresas