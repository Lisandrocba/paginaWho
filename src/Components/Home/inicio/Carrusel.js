import React from 'react';
import '../../utils/styleNavBar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, A11y } from 'swiper';


const Carrusel =()=>{
    return(
        <div className='carruselHome'>
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
                        <h3>ENCUENTRA EL CAMBIO QUE NECESITAS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='contenedorCarrusel imgFondo2'>
                        <h3>CONSEGUIMOS EL TALENTO QUE NECESITA TU EMPRESA</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='contenedorCarrusel imgFondo3'>
                        <h3>¿QUIERES SER PARTE DE NUESTRO EQUIPO COMO RECLUTADOR?</h3>
                    </div>
                </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Carrusel;