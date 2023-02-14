import React from "react";
import "./style.css";
import Historia from "../../../Multimedia/historia.jpg";
import Honestidad from "../../../Multimedia/Honestidad.jpg";
import Equipo from "../../../Multimedia/TrabajoEnEquipo.jpg";
import Compromiso from "../../../Multimedia/Compromiso.jpg";
import Pasion from "../../../Multimedia/Pasion.jpg";
import Empatia from "../../../Multimedia/Empatia.jpg";


const Seccion = () => {
  return (
    <div className="fondoHistoria">
      <div className="imgHistoria">

      </div>
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
              <div className="listaValores">
                <div>
                  <img src={Honestidad} alt="Imagen Honestidad"/>
                  <p>
                     Honestidad.
                  </p>
                </div>
                <div>
                  <img src={Equipo} alt="Imagen Trabajo en equipo"/>
                  <p>
                    Trabajo en equipo.
                  </p>
                </div>
                <div>
                  <img src={Compromiso} alt="Imagen compromiso"/>
                  <p>
                    Compromiso.
                  </p>
                </div>
                <div>
                  <img src={Pasion} alt="Imagen pasion"/>
                  <p>
                    Pasíon.
                  </p>
                </div>
                <div>
                  <img src={Empatia} alt="Imagen empatia"/>
                  <p>
                    Empatía.
                  </p>
                </div>
              </div>
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
