document.addEventListener("DOMContentLoaded",function(){
    const h2List = document.querySelectorAll("h2");
    //h1List.onclick = function
    for(let element of h2List) {   
        element.onclick = function(){
            let p = element.nextElementSibling;
            p.style.display = "none";
        }
        element.addEventListener("dblclick", () => {
            console.log("teste");
            let p = element.nextElementSibling;
            p.style.display = "block";
        })
    };
    
})