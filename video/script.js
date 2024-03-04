
let btn = document.querySelector(".play-btn");
let video = document.querySelector(".video"); 
btn.addEventListener("click", () => {
    if (btn.textContent === "Play") {
        video.play();
        btn.textContent = "Pause";
    } else  {
        video.pause();
        btn.textContent = "Play";
    }
});
