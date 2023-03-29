document.addEventListener("DOMContentLoaded",function(){
    const caixa = document.querySelector("div");
    const meAperte = document.querySelector(".meAperte");
    const ok = document.querySelector(".ok");
    const texto = document.querySelector(".texto");
    const paragrafo = document.querySelector(".paragrafo");

    meAperte.onclick = function(){
        caixa.style.visibility = "visible";
        paragrafo.textContent = showMessage(texto);
    }
    ok.onclick = function(){
        caixa.style.visibility = "hidden";
    }
    
    function showMessage(e){
        return e.value;
    }
})

