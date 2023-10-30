import React from 'react';
import './styleContacto.css';
import { useForm } from '../../../Hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const formulario = "contacto"

const initialForm = {
    name: '',
    email: '',
    subject: '',
    comments: ''
}

const validateForm =(form)=>{
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.subject.trim()){
        errors.subject = "El campo 'Asunto a tratar' es requerido";
    }

    if(!form.comments.trim()){
        errors.comments = "El campo 'Comentarios' es requerido";
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentario' supera los 255 caracteres";
    }

    return errors
}

const Contacto =()=>{

    const {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validateForm, formulario)

    return (
        <div className='contacto'>
            <h3 className='tituloContacto'>CONTACTANOS</h3>
            <div className='contenedorContacto'>
                <form className='contenedorForm' onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Escribe tu nombre' onChange={handleChange} value={form.name} onBlur={handleBlur} required/>
                    <div className='contenedorError'>
                        {errors.name && <p className='mensajeError'>{errors.name}</p>}
                    </div>
                    <input type='email' name='email' placeholder='Escribe tu email' onChange={handleChange} value={form.email} onBlur={handleBlur} required/>
                    <div className='contenedorError'>
                        {errors.email && <p className='mensajeError'>{errors.email}</p>}
                    </div>
                    <input type='subject' name='subject' placeholder='Asunto a tratar' onChange={handleChange} value={form.subject} onBlur={handleBlur} required/>
                    <div className='contenedorError'>
                        {errors.subject && <p className='mensajeError'>{errors.subject}</p>}
                    </div>
                    <textarea name='comments' cols='50' rows='5' value={form.comments} placeholder='Escribe tus comentarios' onBlur={handleBlur} onChange={handleChange} required></textarea>
                    <div className='contenedorError'>
                        {errors.comments && <p className='mensajeError'>{errors.comments}</p>}
                    </div>
                    {
                        loading 
                        ?
                        <input className='buttonContacto' type='submit' value='Enviar'/>
                        :
                        <div className='contenedorBotonPresionado'>
                            <p className='textoBotonPresionado'>Gracias por escribirnos, en breve nos pondremos en contacto.</p>
                            <p className='botonPresionado'>Enviado</p>
                        </div>
                    }
                </form>
                <div className='contenedorContactoForm'>
                    <div className='contenedorPhone'>
                        <div className='contenedorContactoPhone'>
                            <a href='https://www.linkedin.com/company/who-consultora-integral/mycompany/' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className='FontAwesomeIcon'/>       
                            </a>
                        </div>
                        <div className='contenedorContactoPhone'>
                            <a href='https://www.facebook.com/profile.php?id=100063522880814' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className='FontAwesomeIcon'/>       
                            </a>
                        </div>
                        <div className='contenedorContactoPhone'>
                            <a href='https://www.instagram.com/whoconsultoraintegral/' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className='FontAwesomeIcon'/>       
                            </a>
                        </div>
                    </div>
                    <div className='contenedorPhones'>
                        <div>
                            <div className='Phones'>
                                <FontAwesomeIcon icon={faLocationDot} className='FontAwesomeIconPhone'/>
                                <p className='tituloPhone'>Buenos Aires, Argentina</p>
                            </div>
                            <a className='PhonesWhatsapp' href='https://wa.me/+5491165227793' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faWhatsapp} className='FontAwesomeIconPhone'/>
                                <p className='subtituloPhone'>+54 9 11 6522 7793 - Juan Manuel Román</p>
                            </a>
                        </div>
                        <div>
                            <div className='Phones'>
                                <FontAwesomeIcon icon={faLocationDot} className='FontAwesomeIconPhone'/>
                                <p className='tituloPhone'>Córdoba, Argentina</p>
                            </div>
                            <a className='PhonesWhatsapp' href='https://wa.me/+5493517502319' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faWhatsapp} className='FontAwesomeIconPhone'/>
                                <p className='subtituloPhone'>+54 9 351 750 2319 - María Belén Córdoba</p>
                            </a>
                        </div>
                        <div>
                            <div className='Phones'>
                                <FontAwesomeIcon icon={faLocationDot} className='FontAwesomeIconPhone'/>
                                <p className='tituloPhone'>Zaragoza, España</p>
                            </div>
                            <a className='PhonesWhatsapp' href='https://wa.me/+34608329393' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faWhatsapp} className='FontAwesomeIconPhone'/>
                                <p className='subtituloPhone'>+34 608 32 93 93 - Nadia Jurevicius Rodríguez</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;