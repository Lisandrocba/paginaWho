import React from "react";
import Article from "./article/Article";
import Contacto from "./Contacto/Contacto";
import Seccion from "./seccion/Seccion";
import Carrusel from "./inicio/Carrusel";
import NavBar from "../utils/NavBar";
import Empresas from "./empresas/Empresas";
import { Footer } from "../utils/footer/Footer";

const Home =()=>{
    return (
        <div>
            <p>Hola mundo</p>
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