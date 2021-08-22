import React from 'react';
import projetos from '../img/1.png'
import github from '../img/7.png'
import hospedagem from '../img/8.png'

function Projeto() {
  return (
    <div className ="foto">
      <div>
       <img src= {projetos} alt = "projetos"/>
       <h3>Projetos</h3>
        </div>
        <div className = "titulo">
        <h4>Aula Bootstrap</h4>
        </div>
        <div className = "Linkprojeto">
        <div>
        <img src= {github} alt = "github"  />
        </div>
        <div>
        <img src= {hospedagem} alt = "hospedagem"/>
        </div>
        </div>
        
    </div>
  );
}

export default Projeto;