document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".janelaModal"); //recebimento do elemento div com classe respectiva
    const botaoAbrirModal = document.querySelector(".botaoJanelaModal"); //recebimento do botao qual a classe esta relacionada
    const botaoOk = document.querySelector(".botaoOk"); //recebimento do botao qual a classe esta relacionada
    botaoAbrirModal.addEventListener("click", () => { //eventListener que espera um click no botaoAbrirModal
        modal.style.visibility = "visible"; //atribuicao de estilo para visivel
    })
    botaoOk.addEventListener("click", () => { //eventListener que espera um click no botaoAbrirModal
        modal.style.visibility = "hidden"; //atribuicao de estilo para invisivel
    })
})