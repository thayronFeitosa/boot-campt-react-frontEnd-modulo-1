import React, {useState, useEffect} from 'react';
import './App.css'
import Header from './components/Header'
import api from './services/api'

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */
function App() {
  const  [projects, setProjects] = useState([]);
  useEffect(()=> {
    api.get('projects').then( response =>{
      setProjects(response.data)
    })
  },[])
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
        {projects.map(projects => <li key={projects.id}>{projects.title}</li>)}
      </ul>
      <button type="button" onClick={handleAppProject} >adicionar projeto</button>
    </>
  );
}

export default App;