$(document).ready(function () {
    $('#ocultar').click(function () {
        $('ul').slideUp();
    })

})
$(document).ready(function () {
    $('#apresentar').click(function () {
        $('ul').slideDown();
    })
})


$('form').on('submit', function (e) {
    e.preventDefault()
    const adicionarTarefa = $('#tarefa').val();
    const adicionarNaLista = $(`<li>${adicionarTarefa}</li>`);
    $(adicionarNaLista).appendTo('ul');
    
    $('#tarefa').val('');
})
$('ul').on('click','li',function(){
    $(this).addClass('list');
})




