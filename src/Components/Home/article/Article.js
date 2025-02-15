import React from 'react';
import blanquita from '../../../Multimedia/blanquita.jpg';
import nadia from '../../../Multimedia/nadia.jpg';
import juan from '../../../Multimedia/juan.jpg'

import './styleArtycle.css';


const Article =()=>{
    return(
        <div className='containerArticle'>
            <div className='containerAvatar'>
                <a href='https://www.linkedin.com/in/maria-belen-cordoba-b93122113/' target='_blank' rel="noreferrer">
                    <img src={blanquita} alt='Logo' height= '60' className='imgAvatar'/>
                </a>
                <div className='lineaAvatar'></div>
                <div className='contenedorTextAvatar'>
                    <p className='nombreAvatar'>María Belén Córdoba</p>
                    <p className='cofounder'>Co-Fundador</p>
                </div>
            </div>
            <div className='containerAvatar'>
                <a href='https://www.linkedin.com/in/nadia-jurevicius-rodriguez-10a8b121a/' target='_blank' rel="noreferrer">
                    <img src={nadia} alt='Logo' height= '60' className='imgAvatar'/>
                </a>
                <div className='lineaAvatar'></div>
                <div className='contenedorTextAvatar'>
                    <p className='nombreAvatar'>Nadia Jurevicius Rodríguez</p>
                    <p className='cofounder'>Co-Fundador</p>
                </div>
            </div>
            <div className='containerAvatar'>
                <a href='https://www.linkedin.com/in/juan-manuel-roman-a9531a21/' target='_blank' rel="noreferrer">
                    <img src={juan} alt='Logo' height= '60' className='imgAvatar'/>
                </a>
                <div className='lineaAvatar'></div>
                <div className='contenedorTextAvatar'>
                    <p className='nombreAvatar'>Juan Manuel Román</p>
                    <p className='cofounder'>Co-Fundador</p>
                </div>
            </div>
        </div>
    )
}

export default Article;