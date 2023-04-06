document.addEventListener("DOMContentLoaded",()=>{
    nav = document.querySelectorAll("nav button");
    for(let button of buttons){
        button.addEventListener("click", mudaTab);
    }
    abreTab(0);
})
function mudaTab(e){
    const botao = e.target;
    const lista = botao.parentNode;
    const nodes = Array.from(lista.parentNode.children);
    const index = nodes.indexOf(lista);
    abreTab(index);
}

function abreTab(i){
    const tabOn = docume.querySelector(".tabOn");
    if(tabOn !== null)tabOn.className = "";

    const buttonOn = document.querySelector(".buttonOn");
    if(buttonOn !== null) buttonActive.className = "";

    document.querySelectorAll(".tabs section")[i].className = "tabOn";
    document.querySelectorAll("nav button")[i].className = "buttonOn";

}