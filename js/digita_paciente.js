document.addEventListener('DOMContentLoaded', function() {



    var nome = document.querySelector('input[type="text"]')

    var submit = document.querySelector('input[type="submit"]')



    console.log(nome)

    console.log(submit)



    /* Após enviado o formulário */

    submit.addEventListener('click', function(event) {



        /* Pegando nome digitado */

        value = nome.value



        console.log(value)



        /* Guardando valor digitado*/



        localStorage.setItem('nome', value)

        

        /*Descomentar para ver value digitado */

        // event.preventDefault()

    })



})