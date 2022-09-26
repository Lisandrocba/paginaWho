import React from 'react';
import './styleNavBar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, A11y } from 'swiper';


const Carrusel =()=>{
    return(
        <Swiper
        modules={[ Pagination, Autoplay, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}      
        pagination={{ clickable: true }}
      >
            <SwiperSlide>
                <div className='contenedorCarrusel imgFondo1'>
                    <h3>Encontrá el cambio que necesitas</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='contenedorCarrusel imgFondo2'>
                    <h3>Tenemos el talento que buscas para tu equipo</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='contenedorCarrusel imgFondo3'>
                    <h3>¿Querés ser parte de nuestro equipo como reclutador?</h3>
                </div>
            </SwiperSlide>
      </Swiper>
    )
}

export default Carrusel;