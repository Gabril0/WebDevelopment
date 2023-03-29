document.addEventListener("DOMContentLoaded",function () {
    let nome = document.querySelector("h1");
    nome.addEventListener("click", () => nome.textContent = "Ciclano de Tal")
    let subtitulos = document.querySelectorAll("h2");
    for(let node of subtitulos)
    node.addEventListener("click", () => node.textContent = "Obrigado")

    
})