import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import jose from "../../../Multimedia/Foto Jose.jpg";
import juan from "../../../Multimedia/Foto Juan.jpg";
import jordanFerr from "../../../Multimedia/fotoJuanFerr.jpeg";
import fernando from "../../../Multimedia/fernando.jpeg";
import martin from "../../../Multimedia/martin.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./stylesCasos.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function CasosCarrusel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide className="contenedroSwiper">
          <div className="contenedorCaso">
            <p className="contenedorTextoCaso">
              « Recomiendo 100% a los chicos de WHO, cada búsqueda que tenemos
              se muestran siempre predispuestos trabajando a riesgo hasta
              encontrar varios candidatos para cada vacante, realizando primeras
              entrevistas de filtro muy eficientes. Es muy importante el día a
              día con ellos con una comunicación personalizada y al instante en
              este mundo que es tan importante la velocidad y proactividad,
              logrando una sinergia muy buena »
            </p>
            <img alt="fotojose" src={jose} className="imgCaso" />
            <p className="tituloCaso">Jordan Ferreyra</p>
            <p className="subtituloCaso">Socio Gerente en TEBSA SRL</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="contenedroSwiper">
          <div className="contenedorCaso">
            <p className="contenedorTextoCaso">
              « Lo mejor de trabajar con Who? Consultora Integral, además de que
              brindan un excelente servicio personalizado es que consiguen
              candidatos, son proactivos y dedicados, lo que te dan ganas de
              trabajar con ellos, porque generan una relación de equipo y
              proximidad entre el Cliente y el Proveedor difícil de encontrar en
              esta era de la virtualidad »
            </p>
            <img alt="fotojose" src={juan} className="imgCaso" />
            <p className="tituloCaso">Juan Amuchástegui</p>
            <p className="subtituloCaso">Cofundador en The Colony</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="contenedroSwiper">
          <div className="contenedorCaso">
            <p className="contenedorTextoCaso">
              « En Who? Consultora Integral hemos encontrado un socio
              estratégico en el mundo de la incorporación de talentos, con
              procesos ágiles y un excelente trato, tanto con los candidatos
              como con nuestra empresa, brindando tranquilidad y seguridad
              durante todo el proceso. Llevamos trabajando con ellos varios años
              y los procesos de selección que hemos realizado han sido todos
              exitosos »
            </p>
            <img alt="fotojose" src={jordanFerr} className="imgCaso" />
            <p className="tituloCaso">Jordan Ferreyra</p>
            <p className="subtituloCaso">Socio Gerente en TEBSA SRL</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="contenedroSwiper">
          <div className="contenedorCaso">
            <p className="contenedorTextoCaso">
              « Hemos trabajado con Who? Consultora Integral como si fuesen
              parte de nuestro equipo interno, pero con una visión mucho más
              amplia en gestión de personas, compartiendo dudas y
              recomendaciones. Simplemente tengo que enviar un mail con la
              necesidad y saben adecuar el perfil a lo que buscamos, lo cual me
              genera mucha tranquilidad ante una nueva incorporación »
            </p>
            <img alt="fotojose" src={fernando} className="imgCaso" />
            <p className="tituloCaso">Fernando Olivero</p>
            <p className="subtituloCaso">Socio Gerente en TEBSA SRL</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="contenedroSwiper">
          <div className="contenedorCaso">
            <p className="contenedorTextoCaso">
              « Para una empresa como la nuestra, con un mercado laboral tan
              cambiante es fundamental tener un partner como Who? Consultora
              Integral, que sepa interpretar lo que estas buscando, ya que hay
              gente cualificada pero no es fácil encontrarla. Ellos entienden
              nuestra necesidad, encuentran al candidato idóneo y optimizamos
              recursos »
            </p>
            <img alt="fotojose" src={martin} className="imgCaso" />
            <p className="tituloCaso">Martin Paulino</p>
            <p className="subtituloCaso">
              Socio Gerente HPampa Comercio Internacional
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
