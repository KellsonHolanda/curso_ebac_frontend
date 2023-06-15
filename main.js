
$('#telefone').mask('(00) 0000-0000', { placeholder: '(xx) xxxx-xxxx' })


function validateNome () {
    if (document.formularioDeContato.nome.value===""){
        document.getElementById("result").innerHTML="Primeiro digite seu nome*";
        $('.seloNome').addClass("fas fa-exclamation-circle");
        
        
    }

    else if (document.formularioDeContato.nome.value.length < 6) {
        document.getElementById("result").innerHTML="Por favor, insira seu nome completo*";
        $('.seloNome').addClass("fas fa-exclamation-circle");
        
    }
    else {
        $('.seloNome').removeClass("fas fa-exclamation-circle");
        $('.seloNome').addClass("fas fa-check-circle");
        
        
    }
}
function validateTel () {
    if (document.formularioDeContato.telefone.value===""){
        document.getElementById("result").innerHTML="Digite seu Telefone*";
        $('.seloTelefone').addClass("fas fa-exclamation-circle");      
        
    }

    else if (document.formularioDeContato.telefone.value.length < 9) {
        document.getElementById("result").innerHTML="Por favor, insira o número com DDD";
        $('.seloTelefone').addClass("fas fa-exclamation-circle");
        
    }
    else {
        $('.seloTelefone').removeClass("fas fa-exclamation-circle");
        $('.seloTelefone').addClass("fas fa-check-circle");
        
    }
}
function validateEmail () {
    if (document.formularioDeContato.email.value===""){
        document.getElementById("result").innerHTML="Digite seu E-mail*";
        $('.seloEmail').addClass("fas fa-exclamation-circle");      
        
    }
    else{
        $('.seloEmail').removeClass("fas fa-exclamation-circle");
        $('.seloEmail').addClass("fas fa-check-circle");
        

    }
}




