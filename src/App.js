
import './App.css';
import Header from './componentes/header';
import Sou from './componentes/perfil'
import Projeto from './componentes/projetos';

function App() {
  return (
    <div className="App">
    <div className = "cabeca">
      <Header/>
    </div>
    <div>
      <Sou/>
    </div>
    <div>
      <Projeto/>
    </div>

    </div>
  );
}

export default App;
