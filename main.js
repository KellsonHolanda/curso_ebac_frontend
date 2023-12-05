
$(document).ready(function () {
    $('#cep').mask('00000-000');
    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');
        console.log(endpoint);

        fetch(endpoint)
            .then(function (resposta) {
                return resposta.json();
            })
            .then(function (json) {
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);
                setTimeout(function () {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');

                }, 1000);
            })
            .catch(function(erro){
                alert("Por favor, digite um CEP válido.")
            })
            .finally(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');

            })
    })
    $('#formulario').submit(function(e){
        e.preventDefault();
        if ($('#nome').val().length == 0) {
                throw new Error("Nome");
                
            
            
        }
    })


    
})