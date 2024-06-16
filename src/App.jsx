import Perfil from "./components/Perfil/index";


function App() {
  
  const nome = "kellson"

  function retornaNome () {
    return nome;
  }

  return (
    <>
    <Perfil/>
    <h1>Olá, {retornaNome()}</h1>
      
    </>
  )
}

export default App
