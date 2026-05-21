const downArrow = document.getElementById("down_arrow");
const header = document.querySelector("header");
const contentStart = document.querySelector(".description");

downArrow.addEventListener("click", ()=>{
    let contentStartPosition = 0;
    contentStartPosition += contentStart.getBoundingClientRect().top; // La position du haut du premier "description"
    contentStartPosition -= header.offsetHeight;
    contentStartPosition -= 10;

    window.scrollTo({
        top: contentStartPosition,
        behavior: "smooth",
    });
})