// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");

// percorrer todos os cards selecionados e para cada um (separadamente) pegar os botoes (botao curiosidade e o botao favoritos) */

cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector ('.botao-curiosidade');
    let botaoFavorito = card.querySelector ('.botao-favorito');
    let curiosidade = card.querySelector ('.curiosidade');

    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        }

    }); // fechamento do código do botaoCuriosidade
    botaoFavorito.addEventListener("click", function(){
        //Aplicar/remover a classe 'favoritado'
        let favoritado = card.classList.toggle('favoritado')

        //Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);

        //Atualizar o texto do botão (☆ Favorito ou  Favoritado ★)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado"
        } else {
            botaoFavorito.textContent = "☆ Favorito"
        }
    }) // fechamento botao favorito

}); // fechamento do forEach

