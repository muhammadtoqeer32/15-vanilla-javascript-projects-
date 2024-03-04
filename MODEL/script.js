let btn=document.querySelector(".btnd");
let obtn=document.querySelector(".btn");
let popup=document.querySelector(".popup")
btn.addEventListener("click",()=>{
  popup.classList.add("active");

})
obtn.addEventListener("click",()=>{
  popup.classList.remove("active");
})