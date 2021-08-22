import React from 'react';
import logo from '../img/logo.png'
 

function Header() {
  return (
    <div className="Inicio">
     <div>
       <img src= {logo} alt = "logo"/>
     </div>
     <div>
     <ul>
	<li><a href="#perfil">Perfil</a></li>
	<li><a href="#projeto">Projetos</a></li>
  <li><a href="https://github.com/souzadbr" target ="_blank" rel="noreferrer" >Github</a></li>
  <li><a href="https://www.linkedin.com/in/debora-rodrigues-dev/" target ="_blank" rel="noreferrer" >Linkedin</a></li>
     </ul>
     </div>
    </div>
  );
}

export default Header;
