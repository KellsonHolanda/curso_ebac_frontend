import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setIMC] = useState(null);

    const resultado = () => {
        const alturaM = altura / 100;
        const alturaAoQuadrado = alturaM * alturaM;
        const imc = peso / alturaAoQuadrado;
        return imc.toFixed(2);
    };

    const calcular = (e) => {
        e.preventDefault();
        const imcResultado = resultado();
        setIMC(imcResultado);
    };

    const mensagemIMC = () => {
        if (imc !== null) {
          if (imc < 18.5) {
            return 'A classificação é: Magreza.';
          } 
          else if (imc >= 18.5 && imc <= 24.9){
            return 'A classificação é: Peso adequado.';
          }
          else if (imc > 24.9 && imc <= 29.9){
            return 'A classificação é: Sobrepeso.';
          }          
          else {
            return 'A classificação é: Obesidade.';
          }
        }
        return ''; 
      };

    return (
        <form className={styles.formulario}>
            <div>
                <label htmlFor="altura">Altura (cm)</label>
                <input type="number" id="altura" placeholder="Digite a altura em centímetros" onChange={(e) => setAltura(parseInt(e.target.value, 10))}
                />
            </div>
            <div>
                <label htmlFor="peso">Peso (kg)</label>
                <input type="number" id="peso" placeholder="Digite o peso em quilogramas" onChange={(e) => setPeso(parseFloat(e.target.value))}
                />
            </div>
            
            
            <button onClick={calcular}>Calcular</button>
            {imc !== null && <p>Seu IMC é: {imc} </p>}
            <p>{mensagemIMC()}</p>
        </form>
    );
};

export default Formulario;
