import { useState } from "react";

const Formulario = () => {
    let [materiaA, setValorA] = useState(0);
    let [materiaB, setValorB] = useState(0);
    let [materiaC, setValorC] = useState(0);

    const rendenizaResultado =  () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        // if (media >= 7){
        //     return (`A média é: ${media} O aluno foi aprovado`)
        // } else {
        //     return  (`A média é: ${media} O aluno não foi aprovado`)
        // }

        if (media >= 7){
            return (`A média é: ${media}\nO aluno foi aprovado`);
        } else {
            return (`A média é: ${media}\n\nO aluno não foi aprovado`);
        }
        

    }

    return (
        <form>
            <input type="number" placeholder="Nota da matéria A" onChange={evento => setValorA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da matéria B" onChange={evento => setValorB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da matéria C" onChange={evento => setValorC(parseInt(evento.target.value))}/>
            <p>O aluno foi aprovado</p>
            {rendenizaResultado()}
        </form>
    )
}

export default Formulario;