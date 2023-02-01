import React from "react";
import "./style.css";
import Historia from "../../../Multimedia/historia.jpg";
import imgHistoria from "../../../Multimedia/fondoHistoria.jpg";

const Seccion = () => {
  return (
    <div className="fondoHistoria">
      <img alt="inicioHistoria" src={imgHistoria} className="imgHistoria"/>
      <div className="contenedorTotalHistoria">
        <div className="contenedorSeccion">
          <div className="mision">
            <div className="ContenedorMision">
              <p className="numeroSeccion">01.</p>
              <p className="tituloSection">Misión</p>
              <p className="parrafoSeccion">
                Acompañar exitosamente el crecimiento de las personas y empresas
                del mundo IT, a través de nuestros servicios personalizados de
                reclutamiento, sumando valor, poniendo en práctica nuestra
                pasión y experiencia.
              </p>
            </div>
          </div>
          <div className="vision">
            <div className="ContenedorVision">
              <p className="numeroSeccion">02.</p>
              <p className="tituloSection">Visión</p>
              <p className="parrafoSeccion">
                Ser la consultora líder en el mundo IT creando puentes entre los
                talentos y las empresas, conectando profesionales con
                oportunidades.
              </p>
            </div>
          </div>
          <div className="valores">
            <div className="ContenedorValores">
              <p className="numeroSeccion">03.</p>
              <p className="tituloSection">Valores</p>
              <ul className="listaValores">
                <li>
                Honestidad.
                </li>
                <li>
                Trabajo en equipo.
                </li>
                <li>
                Compromiso.
                </li>
                <li>
                Pasíon.
                </li>
                <li>
                Empatía.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img alt="imagenHistoria" src={Historia} className="imgMision"/>
        </div>
      </div>
    </div>
  );
};

export default Seccion;
