$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#nome-tarefa').val();

        $(`<li>${nomeDaTarefa}</li>`).appendTo('.lista-tarefas');
        $('.lista-tarefas > li').click(function() {
            $(this).css({'text-decoration': 'line-through'});
        })

        $('#limpar-lista').click(function Apagar() {
            $('.lista-tarefas').empty();
        })
        
        $('#nome-tarefa').val('');
    })
    
    
})