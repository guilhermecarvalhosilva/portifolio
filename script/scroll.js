var btn = document.querySelectorAll(".botao-voltar")[0]
window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        btn.style.opacity = 1
    } else {
        btn.style.opacity = 0
    }
})