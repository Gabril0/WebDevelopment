document.addEventListener("DOMContentLoaded",function(){
    const caixa = document.querySelector("div");
    const meAperte = document.querySelector(".meAperte");
    const ok = document.querySelector(".ok");
    const texto = document.querySelector(".texto");

    meAperte.onclick = function(){
        caixa.style.visibility = "visible";
        showMessage(caixa);
    }
    ok.onclick = function(){
        caixa.style.visibility = "hidden";
    }
    
    function showMessage(e){
        e.target.textContent = texto.value;
    }
})

