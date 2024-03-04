let icon=document.querySelector(".icon");
let ul=document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle("showdata");
    if(ul.className=== "showdata"){
        document.querySelector("#cross").className="fa-solid fa-xmark";
    }
    else{
        document.querySelector("#cross").className="fa-solid fa-bars";
    }
});