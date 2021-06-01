document.addEventListener('DOMContentLoaded', function() {

    andre = document.querySelector(".Andre")
    
    overlay = document.querySelector(".overlay")
    popup = document.querySelector(".popup")

    fechar = document.querySelector(".x")
    desmarcar = document.querySelector(".botao_desmarcar")

    andre.addEventListener('click', function(event) {

        overlay.style.display = "block"
        popup.style.display = "flex"
        popup.style.flexDirection = "column"
        popup.style.justifyContent = "space-between"
        popup.style.alignItems = "center"

    })

    fechar.addEventListener( 'click', function(event) {

        overlay.style.display = "none"
        popup.style.display = "none"

    })

    desmarcar.addEventListener( 'click', function(event) {

        andre.innerHTML = ''

        img = document.createElement('img')

        img.src = "img/adicionar.png" 
        img.alt = "adicionar"

        img.classList.add('add_consulta')

        andre.appendChild(img)

        overlay.style.display = "none"
        popup.style.display = "none"


    })

})