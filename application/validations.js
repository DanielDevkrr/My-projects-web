// função utilizada para validar Email
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


function menu() {
    window.location.href = "ativaUser.html"
    }
    
function cadastro(){
    window.location.href = "ativaCadas.html"
}

function login() {
    window.location.href = "ativaLogin.html"
}