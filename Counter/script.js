let count = 0;
let value=document.querySelector(".value");
let Inbtn=document.querySelector(".Increase_btn");
let debtn=document.querySelector(".decrease_btn");
let rebtn=document.querySelector(".reset_btn");
let updater=()=>{
    value.textContent=count;
}
Inbtn.addEventListener("click",()=>{
    count++;
    value.style.color="green";
    updater();
})
debtn.addEventListener("click",()=>{
    count--;
    value.style.color="red";
    updater();
})
rebtn.addEventListener("click",()=>{
    count=0;
    value.style.color="black";
    updater();
})