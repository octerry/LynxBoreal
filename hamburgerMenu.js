const hamburgerButton = document.getElementById("hamburger_menu");
const popupMenu = document.getElementById("header_popup");

hamburgerButton.addEventListener("click", ()=>{
    popupMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
})

window.addEventListener('click', event => { // Si on clique en dehors du menu ça le ferme
    if(!event.target.matches('#hamburger_menu') && !event.target.matches('#header_popup')) {
        popupMenu.classList.remove("open");
        hamburgerButton.classList.remove("open");
    }
})