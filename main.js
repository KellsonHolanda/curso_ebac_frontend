
$('#cpf').mask('000.000.000-00');
$('#telefone').mask('(00) 00000-0000');
$('#cep').mask('00.000-000');

$('form').validate({
    rules: {
        nomeCompleto: {
            required: true,
            
        },
        cpf: {
            required: true,
            minlength: 11,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereço: {
            required: true
        },
        cep: {
            required: true
        },
    },
    messages: {
        nomeCompleto: 'Por favor, insira seu nome.',
        email: 'Por favor, insira o endereço de e-mail.',
        cpf: 'Por favor, insira o CPF.',
        telefone: 'Por favor, insira seu telefone.',
        endereço: 'Por favor, insira seu endereço.',
        cep: 'Por favor, insira o CEP.',
        
    },
    
    submitHandler: function (form) {
        console.log(form);
        const reset = validador.resetForm();
    },  
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos sem preenchimento.`)
        }
    }
})



