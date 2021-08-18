import React from 'react';
import logo from '../img/logo.png'

function Header() {
  return (
    <div className="Inicio">
     <div>
       <img src= {logo} alt = "logo"/>
     </div>
     <div>
     <table>
       <tr>
<td>Perfil</td>
<td>Projetos</td>
<td>Certificados</td>
<td>Linkedin</td>
<td>Github</td>
       </tr>
     </table>
     </div>
    </div>
  );
}

export default Header;
