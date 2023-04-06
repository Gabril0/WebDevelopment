document.addEventListener("DOMContentLoaded",() => { //espera do carregamento da arvore 
    const input = document.querySelector(".interesse"); //pegando o input
    input.addEventListener("keyup", e =>{ //vendo se o usuario apertou alguma tecla
        if(e.key === "Enter") adicionaInteresse(); //checando se eh a tecla enter
    })

    
})
function adicionaInteresse(){
    const orderedList = document.querySelector(".listaDeInteresses"); //carregando a lista
    const input = document.querySelector(".interesse"); //carregando a caixa de input
    const linha = document.createElement("li"); //criando uma linha
    const texto = document.createElement("spam"); //criando o texto
    const botaoFechar = document.createElement("button"); //criando um botao

    texto.textContent = input.value; //mudando o conteudo do spam para o do input
    texto.className = "texto"; //mudando nome da classe do texto
    botaoFechar.textContent = "X"; //mudando o conteudo do botao
    botaoFechar.className = "botaoFechar"; //mudando o nome da classe do botao
    linha.appendChild(texto); //adicionando o texto na linha
    linha.appendChild(botaoFechar); //adicionando o botao na linha
    orderedList.appendChild(linha); //adicionando a linha na lista

    botaoFechar.addEventListener("click", ()=>{ //quando o usuario clicar no botao
        orderedList.removeChild(linha); //o elemento eh retirado da lista
    })
    input.value = ""; //apos o usuario apertar enter a caixa volta a ficar vazia
}