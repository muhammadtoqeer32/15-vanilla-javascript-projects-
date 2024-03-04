let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let color = document.querySelector(".color");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor +=  hex[randomnumber()];
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
  }
});
function randomnumber(){
    return Math.floor(Math.random()*hex.length);
    
    }
