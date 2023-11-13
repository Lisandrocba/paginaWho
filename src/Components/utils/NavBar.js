import React from 'react';
import './styleNavBar.css';
import {NavLink} from 'react-router-dom'

function NavBar (){
    return (
        <div className='contenedorNavegacion'>
            <NavLink to='/'><img src='https://i.imgur.com/tKZzvsT.png' alt='Logo' height= '40' className='imgMenu'/></NavLink>
            <ul className='contenedorNavBar'>
                <li><NavLink className='itemNavbar' to='/historia'>Nosotros</NavLink></li>
                <li><NavLink className='itemNavbar' to='/empresas'>Empresas</NavLink></li>
                <li><NavLink className='itemNavbar' to='/recluting'>Recruiters</NavLink></li>
            </ul>   
        </div>
    )
}

export default NavBar;