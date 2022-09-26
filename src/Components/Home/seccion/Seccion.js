import React from 'react';
import './styleSeccion.css';

const Seccion =()=>{
    return (
        <div>
            <div className='contenedorSeccionTotal'>
                <div>
                    <img src='https://i.imgur.com/eSr7yCU.jpg' alt='Logo' height= '50' className='imgSeccion'/>
                </div>
                <div className='containerSeccion'>
                    <div className="container">
                        <h3 className='tituloSeccion'>Quiénes somos</h3>
                    </div>
                    <div className="container">
                        <p className='numero'>01.</p>
                        <p className='text'>Somos Who? Consultora Integral, una consultora especializada en selección de perfiles IT. 
                        Buscamos al profesional ideal para su organización y estamos convencidos que nuestros servicios suman valor y 
                        sinergia a su organización.</p>
                    </div>
                    <div className="container">
                        <p className='numero'>02.</p>
                        <p className='text'>Conectamos a los profesionales IT con las empresas, ayudándolas a cumplir con sus objetivos. 
                        Contamos con un equipo de selectores especializados en perfiles IT con amplia experiencia en el mercado.</p>
                    </div>
                    <div className="container">
                        <p className='numero'>03.</p>
                        <p className='text'>Diseñamos publicaciones, entrevistas y evaluaciones en función de la necesidad de su empresa. 
                        Implementamos el onboarding del candidato, un proceso que contempla todos los puntos de contacto con nuestro equipo y la empresa.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seccion;