// Peocure e selecione o elemento com a classe card-destino
// e guarde em uma variável chamada primeiroCard
let primeiroCard = document.querySelector('.card-destino');

// Procure e slecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");

// Procure e slecione o parágrfo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade");

/* monitore o clique no botão de curiosidade e, quando acontecer o clique, verifique SE a curiosidade está oculta. Se estiver, faça ficar visível, mude o aria-expanded para true e troque o texto do botão para "ocultar curiosidade". */

botaoCuriosidade.addEventListener('click', function(){
    if(curiosidade.hidden){
        curiosidade.hidden = false;

        // Mude o atributo aria-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true");

        botaoCuriosidade.textContent = "Ocultar curiosidade";
    } else {
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded","false")
        botaoCuriosidade.textContent = "Ver curiosidades";
    }
})