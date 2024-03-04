let inputbox=document.querySelector("input");
let list=document.querySelector("#list_container");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    if(inputbox.value===""){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputbox.value="";
    }
});
// list.addEventListener("click",(e)=>{
//     if(e.target.tagname=="li"){
//         e.target.paremtElement.remove();
//     }
// });
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    e.target.parentElement.remove();
},false);
