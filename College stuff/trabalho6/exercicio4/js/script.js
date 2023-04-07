window.onload = ()=>{ //executa a funcao assim que a arvore DOM for carregada
    botoes = document.querySelectorAll("nav button"); //seleciona os botoes dentro de nav
    for(let botao of botoes){ //vai de item a item da lista de botoes
        botao.addEventListener("click", mudaTab); //quando clicar em algum botao valido, sera usada a funcao muda tab passando parametro de listener e
    }
    abreTab(3); //abre-se a tab correspondente
}
function mudaTab(e){ //funcao recebe elemento que acordou a funcao
    const botao = e.target; //botao atribui ao botao que iniciou a funcao
    const lista = botao.parentNode; //acha a lista por meio do pai do botao, neste caso o div
    const nodes = Array.from(lista.parentNode.children); //faz isso para ver quantos elementos a lista contem
    const index = nodes.indexOf(lista); //acha o numero correspondente
    abreTab(index); //abre a tab com o numero desejado relacionado ao numero de elementos do nav
}

function abreTab(i){ //funcao que muda a pagina para o elemento desejado
    const tabOn = document.querySelector(".tabOn"); //atribui ao elemento cuja classe tem este nome
    if(tabOn !== null)tabOn.className = ""; //se nao for nulo, seu nome de classe desaparecera

    const buttonOn = document.querySelector(".buttonOn"); //atribui ao elemento cuja classe tem este nome
    if(buttonOn !== null) buttonActive.className = ""; //se nao for nulo, seu nome de classe desaparecera

    document.querySelectorAll(".tabs section")[i].className = "tabOn"; //se nao existir, vai comecar a existir e ter o nome do valor atribuido
    document.querySelectorAll("nav button")[i].className = "buttonOn";

}