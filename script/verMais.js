document.querySelectorAll('.ver-mais')[0].addEventListener('click', () => {
    if( document.querySelectorAll('.projetos-extras')[0].classList.contains('ativo')) {
        document.querySelectorAll('.projetos-extras')[0].classList.remove('ativo')
        document.querySelectorAll('.ver-mais')[0].classList.remove('ativo')
        document.querySelectorAll('.ver-mais')[0].innerHTML = "Ver mais"
    } else {
        document.querySelectorAll('.projetos-extras')[0].classList.add('ativo')
        document.querySelectorAll('.ver-mais')[0].classList.add('ativo')
        document.querySelectorAll('.ver-mais')[0].innerHTML = "Ocultar"
    }
})