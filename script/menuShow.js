//  executa uma ação para aparecer o menu suspenso
document.querySelectorAll('.botao-menu')[0].addEventListener('click', () => {
    document.querySelectorAll('.menu')[0].classList.toggle('ativo')
    document.querySelectorAll('.botao-menu')[0].classList.toggle('ativo')
})

//  executa uma ação para quando clicar no menu desaparecer o menu suspenso
document.querySelectorAll('.menu-item').forEach((item, index) => {
    document.querySelectorAll('.menu-item')[index].addEventListener('click', () => {
        document.querySelectorAll('.menu')[0].classList.remove('ativo')
        document.querySelectorAll('.botao-menu')[0].classList.remove('ativo')
    })
})