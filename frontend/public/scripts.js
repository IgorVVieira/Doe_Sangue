const name = document.getElementById('name');
const email = document.getElementById('email');
const blood = document.getElementById('blood');

//Muda a visibilidade do formulário
document.querySelector('header button').
    addEventListener("click", function () {
        document.querySelector('.form')
            .classList.toggle('hide');
    });

//Função Utilizando Recursos de ES6, como Arrow Function para validar um simples formulário
const validarForm = () => {
    if (name.value == "" || email.value == "" || blood.value == "") {
        return alert("Todos os campos precisam ser preenchidos!");
    }
    return alert("Dados enviados para cadastro!");
}