document.addEventListener('DOMContentLoaded', function() {



    li = document.querySelector('.add_js_nome')

    a = document.querySelector('.a_content')



    // Obtém o valor armazenado da chave "texto".

    texto = localStorage.getItem('nome')

    

    // Printando o nome

    //console.log(texto)



    if (texto != null) {



        botao_mais = document.querySelector('.add_consulta')



        // Descomentar para ver botão pegado:

        // console.log(botao_mais)



        a.classList.remove('a_content')

        a.classList.add('depois_agenda')

        

        li.innerHTML = texto

        

    }



})