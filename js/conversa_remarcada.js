// adicionando remarcado

document.addEventListener('DOMContentLoaded', function() {



    var li = document.querySelector('.depois_agenda')

    var digite = document.querySelector('.digite')



    digite.addEventListener('click', function() {



        console.log(li)

        console.log(digite)



        li.classList.remove('depois_agenda')

        li.classList.add('pos_agenda_resp')

    })


})