import React from "react";
import NavBar from "../utils/NavBar";
import ReactPlayer from "react-player";
import './styleRecluting.css'
import FormRecruiter from "./FormRecruiter";
import imgFormRecruiter from '../../Multimedia/retrato-joven-morena__2_-removebg copia.png'
import { Footer } from "../utils/footer/Footer";

const Recluting = () => {
  return (
    <div>
      <NavBar />
      <div className="contenedorRecluting">
        <div className="hijo1ContenedorRecluting">
          <p className="aclaracionCurso">Curso Udemy</p>
          <h2 className="tituloCursoRecluting">
          Formate con nosotros!
          </h2>
          <p className='parrafoCursoRecluting'>
          Este curso tiene el objetivo de convertirlos en recruiter IT expertos. y para lograrlo te vamos a enseñar a utilizar las mejores practicas y las ultimas tendencias en reclutamiento y seleccion IT
          </p>
          <a rel="noreferrer" href="https://www.udemy.com/course/reclutamiento-it-el-impacto-de-la-inteligencia-artificial/learn/lecture/37196598#overview" target="_blank" className="botonCurso">Obtener Curso</a>
        </div>
        <div className="hijo2ContenedorRecluting">
          <ReactPlayer url="https://youtu.be/vsX1nAq_XG8" volume={0.5}  className='videoRecluting'  width='80%'/>
        </div>
      </div>
      <div className="contenedorPrincipalTrabjar">
        <img src={imgFormRecruiter} alt='img recluting' className='imgRecluting'/>
        <div className="contenedorTrabjar">
        <h3>Sumate a nuestro equipo</h3>
          <FormRecruiter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recluting;
