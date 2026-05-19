const mainLynx = document.getElementById("main_lynx");

window.addEventListener("scroll", ()=>{
    let mainLynxPosTop = mainLynx.getBoundingClientRect().top;
    mainLynx.style.backgroundPositionY = String(-mainLynxPosTop * 1.2) + "px";
    console.log(mainLynx.style.backgroundPositionY)
})