const form = document.getElementById('numeros');

function formulário (A, B){
    const resultado = A < B;
    return resultado;
    
}
form.addEventListener('submit', function(e){
    
    e.preventDefault();
    const numeroA = document.getElementById('A');
    const numeroB = document.getElementById('B');
    
    const mensagemPositiva = 'Parabéns! O Número B é maior que o número A. Formulário Válido.'
    const mensagemNegativa = 'Que pena! O número B é menor ou igual ao número A. Tente novamente. '
    validação = formulário (numeroA.value, numeroB.value);
    
    if (validação === true){
        const mensagem = document.querySelector('.success');
        mensagem.innerHTML = mensagemPositiva;
        mensagem.style.display = 'block';
    }
    else{
        const mensagem2 = document.querySelector('.success');
        mensagem2.innerHTML = mensagemNegativa;
        mensagem2.style.display = 'block';
    }
    }
)
