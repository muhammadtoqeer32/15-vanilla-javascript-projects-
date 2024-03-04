let colors=["green","red","rgba(133,122,200,0.5)","#f1f025","violet","indego","blue","yellow","orange","cyan","pink","grey","black","white","silver","gold","brown","Purple","aqua","yellowgreen",];
let color=document.querySelector(".color");
let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    let randno=randomnumber();
    // console.log(randno);
    document.body.style.backgroundColor=colors[randno];
    color.textContent=colors[randno];
})
function randomnumber(){
return Math.floor(Math.random()*colors.length);

}