// Alter Logo
function updateLogo() {
    const logo = document.getElementById("logo")
    if (window.innerWidth > 640) {
        logo.innerText = "</Kevin>"
    } else {
        logo.innerText = "KT"
    }
}

updateLogo()

window.addEventListener("resize", updateLogo)

// Mobile Menu
const nav = document.getElementById("nav")
const hamburguer = document.getElementById("hamburguer")
hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active")
})

