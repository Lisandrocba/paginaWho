import React from "react";
import NavBar from "../utils/NavBar";
import ReactPlayer from "react-player";
import './styleRecluting.css'

const Recluting = () => {
  return (
    <div>
      <NavBar />
      <div className="contenedorRecluting">
        <div className="hijo1ContenedorRecluting">
          <h2 className="tituloCursoRecluting">
            Aprende sobre las mejores practicas en reclutamiento y seleccion IT
          </h2>
          <p className='parrafoCursoRecluting'>
            Este curso tiene el objetivo de convertirlos en recruiter IT
            expertos, de manera que puedan trabajar freelance para el exterior,
            en los mejores proyectos, para llevar al maximo su carrera y poder 
            ganar en USD
          </p>
          <button className="botonCurso">Obtener Curso</button>
        </div>
        <div className="hijo2ContenedorRecluting">
          <ReactPlayer url="https://youtu.be/vsX1nAq_XG8" volume={0.5} />
        </div>
      </div>
    </div>
  );
};

export default Recluting;
