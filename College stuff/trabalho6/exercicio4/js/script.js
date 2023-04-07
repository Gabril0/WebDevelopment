window.onload = ()=>{ //executa a funcao assim que a arvore DOM for carregada
    document.forms.formContato.onsubmit = validaForm;
    botoes = document.querySelectorAll("nav button"); //seleciona os botoes dentro de nav
    for(let botao of botoes){ //vai de item a item da lista de botoes
        botao.addEventListener("click", mudaTab); //quando clicar em algum botao valido, sera usada a funcao muda tab passando parametro de listener e
    }
    abreTab(0); //abre-se a tab correspondente
}
function mudaTab(e){ //funcao recebe elemento que acordou a funcao
    const botao = e.target; //botao atribui ao botao que iniciou a funcao
    const lista = botao.parentNode; //acha a lista por meio do pai do botao, neste caso o div
    const nodes = Array.from(lista.parentNode.children); //faz isso para ver quantos elementos a lista contem
    const index = nodes.indexOf(lista); //acha o numero correspondente
    abreTab(index); //abre a tab com o numero desejado relacionado ao numero de elementos do nav
}

function abreTab(i){ //funcao que muda a pagina para o elemento desejado
    const tabActive = document.querySelector(".tabActive"); //atribui ao elemento cuja classe tem este nome
    if(tabActive !== null)tabActive.className = ""; //se nao for nulo, seu nome de classe desaparecera

    const buttonActive = document.querySelector(".buttonActive"); //atribui ao elemento cuja classe tem este nome
    if(buttonActive !== null) buttonActive.className = ""; //se nao for nulo, seu nome de classe desaparecera

    document.querySelectorAll(".tabs section")[i].className = "tabActive"; //se nao existir, vai comecar a existir e ter o nome do valor atribuido
    document.querySelectorAll("nav button")[i].className = "buttonActive";

}

function validaForm(e){
    let form = e.target; //atribui o form para a variavel
    let formValido = true; //variavel de validacao verdadeira
    const spanUser = form.usuario.nextElementSiblin; //acha o span do usuario
    const spanSenha = form.senha.nextElementSiblin; //acha o span da senha
    const spanEmail = form.email.nextElementSiblin; //acha o span do email
    
    spanUser.textContent = "";  //faz o span ficar vazio
    spanSenha.textContent = ""; //faz o span ficar vazio
    spanEmail.textContent = ""; //faz o span ficar vazio
    if(form.usuario.value === ""){ //se o campo estiver vazio
        spanUser.textContent = "Campo usuário não preenchido"; //mudar o span para avisar que esta vazio
        formValido = false; //invalidar o form
    }
    if(form.senha.value === ""){ //se o campo estiver vazio
        spanSenha.textContent = "Campo senha não preenchido"; //mudar o span para avisar que esta vazio
        formValido = false; //invalidar o form
    }
    if(form.email.value === ""){ //se o campo estiver vazio
        spanEmail.textContent = "Campo email não preenchido"; //mudar o span para avisar que esta vazio
        formValido = false; //invalidar o form
    }
    return formValido; //retornar true ou false dependendo se o form eh valido ou nao
}