let phase = document.querySelectorAll(".main-contant");
phase.forEach(m => {
    let icon = m.querySelector(".icon");
    let answer = m.querySelector(".answer");
    m.addEventListener("click", () => {
        icon.classList.toggle("active");
        answer.classList.toggle("active");
        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight=null;
        }
        else{
            icon.classList.add("active");
            answer.style.maxHeight=answer.scrollHeight+"px";

        }
    });
});
