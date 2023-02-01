import React from 'react';
import './style.css';
import mision from '../../../Multimedia/mision.jpg'
import vision from '../../../Multimedia/vision.jpg'
import valores from '../../../Multimedia/valores.jpg'

const Seccion =()=>{
    return(
        <div className='contenedorSeccion'>
            <div className='mision'>
                <div className='ContenedorMision'>
                    <p className='numeroSeccion'>01.</p>
                    <p className='tituloSection'>Misión</p>
                    <p className='parrafoSeccion'>Acompañar exitosamente el crecimiento de las personas y empresas del mundo IT, a través de nuestros 
                    servicios personalizados de reclutamiento, sumando valor, poniendo en práctica nuestra pasión y experiencia.</p>
                </div>
                <div>
                    <img alt='imagenMision' className='imgMision' src={mision} />
                </div>
            </div>
            <div className='vision'>
                <div className='contenedorImgVision'>
                    <img alt='imagenVision' className='imgVision' src={vision} />
                </div>
                <div className='ContenedorVision'>
                    <p className='numeroSeccionMid'>02.</p>
                    <p className='tituloSection'>Visión</p>
                    <p className='parrafoSeccion'>Ser la consultora líder en el mundo IT creando puentes entre los talentos y las empresas, conectando profesionales
                    con oportunidades.</p>
                </div>
            </div>
            <div className='valores'>
                <div className='ContenedorValores'>
                    <p className='numeroSeccion'>03.</p>
                    <p className='tituloSection'>Valores</p>
                    <p className='parrafoSeccion'>Honestidad, Trabajo en equipo, Compromiso, Pasion, Empatia.</p>
                </div>
                <div>
                    <img alt='imagenMision' className='imgMision'  src={valores} />
                </div>
            </div>
        </div>
    )
}

export default Seccion;