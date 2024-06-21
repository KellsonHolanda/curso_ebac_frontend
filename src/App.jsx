import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulário";


function App() {
  
  const nome = "kellson"

  function retornaNome () {
    return nome;
  }

  return (
    <>
    <Perfil/>
    <Formulario/>
    <h1>Olá, {retornaNome()}</h1>
      
    </>
  )
}

export default App
