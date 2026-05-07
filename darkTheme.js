// On récup ce dont on a besoin
let all = document.querySelectorAll("*");
let darkButton = document.getElementById("dark_theme_button");

// On défini la variable de darkmode et on lui mets la préférence du navigateur
let darkModeEnabled = false;
darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkModeEnabled) {
    all.forEach(element => {
        element.classList.add("dark")
    });
}

darkButton.addEventListener("click", ()=>{
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
        all.forEach(element => {
            element.classList.add("dark")
        });
    } else {
        all.forEach(element => {
            element.classList.remove("dark")
        });
    }
})