// função utilizada para validar Email


function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


// function menu() {
//     firebase.auth().signInWithEmailAndPassword( emailForm.email().value, passwordForm.password().value).then(response =>{
//         window.location.href ="../tela-usuario/ativaUser.html"
//     }).catch(error => {
//         console.log("error", error)
//     });
//     }
    
// function cadastro(){
//     window.location.href = "../tela-cadas/ativaCadas.html"
// }

// function login() {
//     window.location.href = "../tela-login/ativaLog.html"
// }

// const emailForm = { // - objeto para o campo de email
//     email: () => document.getElementById("email"), // --- puxa a informação do ID email
//     errorEmpty: () => document.getElementById("error-email-empty"), // --puxa a informação do ID do erro do campo vazio
//     errorInvalid: () => document.getElementById("error-email-invalid"), // --puxa a informação do ID do erro do campo invalido
//     buttonRecpass: () => document.getElementById("button-Recpass"), // pux informação do bt de recuperar senha
//     buttonLog: () => document.getElementById("button-log") // puxa informação do bt de login

// }

// //  facilitações no codigo para puxar status dos ID referente ao campo de senha
// const passwordForm = {
//     password: () => document.getElementById("password"),
//     errorEmptyPass: () => document.getElementById("error-senha-empty")

// }