document.addEventListener('DOMContentLoaded', function() {



    botao = document.querySelector('.select')

    /*Identificando botao */

    console.log(botao)



    botao.addEventListener('click', function(event) {

        /* Apagando variável nome no LocalStorage , apos reentrar em agenda */

        window.localStorage.removeItem('nome');

    })

    

})