//Muda a visibilidade do formulário
document.querySelector('header button').
addEventListener("click", function () {
    document.querySelector('.form')
        .classList.toggle('hide');
});