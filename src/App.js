import React, {useState} from 'react';

import Header from './components/Header';
/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */
function App() {
  const  [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  // useState retorna um array de 2 posições 
  /**
   * 1. Variavewl com o seu valor inicial
   * 2. função para atualizarmos este valor 
   */
  
  function handleAppProject(){
    // projects.push(`)
    setProjects([...projects,`Novo projeto${Date.now()}`])
    console.log(projects)
  }
  return (
    <>

      <Header title="Projects" />
      <ul>
        {projects.map(projects => <li key={projects}>{projects}</li>)}
      </ul>
      <button type="button" onClick={handleAppProject} >adicionar projeto</button>
    </>
  );
}

export default App;