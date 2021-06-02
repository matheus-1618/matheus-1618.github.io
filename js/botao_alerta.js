document.addEventListener('DOMContentLoaded', function() {

        alerta = document.querySelector(".alerta")

        overlay = document.querySelector(".overlay")
        popup = document.querySelector(".popup_2")

        fechar = document.querySelector(".x")
        botao_nao =  document.querySelector(".botao_nao")
        botao_sim =  document.querySelector(".botao_sim")

        alerta.addEventListener('click', function(event) {

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

        botao_nao.addEventListener( 'click', function(event) {

            overlay.style.display = "none"
            popup.style.display = "none"

        })

        botao_sim.addEventListener( 'click', function(event) {

            alerta.innerHTML = ''

            img = document.createElement('img')

            img.src = "img/alerta.png" 
            img.alt = "atenção!"
            
            img.classList.add('alerta_img')
            alerta.appendChild(img)

            overlay.style.display = "none"
            popup.style.display = "none"

        })
   
})