import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: "Imagem Teste",
        avatar:'https://avatars.githubusercontent.com/u/117248477?v=4'
    }
    return (
        <>
        <img className="perfil-avatar" src={usuario.avatar} />
        <h3>{usuario.nome}</h3>
        </>
    )
}
export default Perfil;