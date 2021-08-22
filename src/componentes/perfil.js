import React from 'react';
import perfil from '../img/perfil.jpg'

function Sou() {
  return (
    <div className ="foto">
      <div>
       <img src= {perfil} alt = "perfil"/>
       <h3>Quem Sou</h3>
    <p className = "texto">
    Sou uma mulher que transitou de carreira com pelo menos 9 anos de experiência dentro da indústria de alimentos. Sempre tive contato com arte desde criança e sempre foi uma forma de comunicação que me fez muito bem na infância e adolescência. Dentre essa trajetoria na indústria, me aventurei cursando Design de Interiores onde aprendi diversas formas de técnicas de ilustrações e desenhos, além de CAD e Sketchup que são duas ferramentas muito interessantes para a área. Hoje após perceber que todos meu conhecimentos anteriores podiam fazer sentido na minha trajetoria como desenvolvedora coloco minhas forças em direção aos estudos em desenvolvimento front-end e back -end onde estudo HTML,CSS e Javascript de forma auto didata e hoje faço parte de uma empresa com uma cultura linda com diversos programas de capacitação entre ele o Estrelas fora da Caixa o qual faço parte e estudo desenvolvimento Java. Quer me conhecer mais? Veja meu Linkedin e Github atraves do menu da minha página pessoal. 
    </p>
     </div>
    </div>
  );
}

export default Sou;