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


/*V2: programação para o recurso de filtragem de destinos */

//procurar e selecionar os botões de filtro
const botoesFiltro = document.querySelectorAll("[data-filtro]");

// Percorrer/acessar cada botão dentro do botoesFiltro
botoesFiltro.forEach(function(botaoFiltro){

    // Quando acontecer o clique no botão...
    botaoFiltro.addEventListener("click", function(){
    // ... acessamos e guardamos o filtro escolhido
    const filtro = botaoFiltro.dataset.filtro;
    
    cards.forEach(function(card){
        // ... e guardando a categoria de cada um
        const categoria = card.dataset.categoria;

        // Se o valor do filtro for "todos" OU se a categoria for igual o filtro a
        if(filtro === "todos" || categoria === filtro){
            // Então mostramos o card
            card.hidden = false;
        }else{
            // senão, escondemos o card
            card.hidden = true;
        }
    });

    botoesFiltro.forEach(function(botaoFiltro){
        if(botaoFiltro.dataset.filtro === filtro){
            // se for, adicionamos a classe nele
            botaoFiltro.classList.add("filtro-ativo");
        } else { 
            // senão, retiramos a classe dele
            botaoFiltro.classList.remove("filtro-ativo");

            // E mudamos o estado para não-pressionado/desativado (false)
            botaoFiltro.setAttribute("aria-pressed", "false");
        }

    }); // fechamento event listener

}); // fechamento forEach e dos botoes

});