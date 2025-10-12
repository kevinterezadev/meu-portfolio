// ==============================
// Alterar Logo
// ==============================
function updateLogo() {
  const logo = document.getElementById("logo");

  if (window.innerWidth > 640) {
    logo.innerText = "</Kevin>";
  } else {
    logo.innerText = "KT";
  }
}

// Executa ao carregar a página
updateLogo();

// Atualiza logo ao redimensionar a janela
window.addEventListener("resize", updateLogo);

// ==============================
// Menu Mobile
// ==============================
const nav = document.getElementById("nav");
const hamburguer = document.getElementById("hamburguer");
const links = document.querySelectorAll(".nav__link");

// Toggle do menu ao clicar no hamburguer
hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fechar menu ao clicar em um link
links.forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
