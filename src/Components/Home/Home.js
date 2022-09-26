import React from "react";
import Article from "./article/Article";
import Contacto from "./Contacto/Contacto";
import Seccion from "./seccion/Seccion";
import Carrusel from "./inicio/Carrusel";
import NavBar from "./inicio/NavBar";
import Empresas from "./empresas/Empresas";
import { Footer } from "./footer/Footer";

const Home =()=>{
    return (
        <div>
            <NavBar />
            <Carrusel />
            <Seccion />
            <Article />
            <Empresas />
            <Contacto />
            <Footer />
        </div>
    )
}

export default Home;