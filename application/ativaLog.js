// se o campo está vazio ou não e se o email é valido
// se verdadeiro habilitar o botão recuperar senha
// se falso desabilitar o botão

function onChangeEmail() {
    toggleButtonDisabled();
    toggleEmailErrors();
    
}

function onChangePassword(){
    togglePasswordErrors();
    toggleButtonDisabled();
}

function toggleButtonDisabled() { // ---------------- func para ativação ou não dos buttons

    const emailValid = isEmailValid(); // fun para botão recuperar senha
    emailForm.buttonRecpass().disabled = !emailValid;

    const passwordValid = isPasswordValid(); // func para botão entrar 
    emailForm.buttonLog().disabled = !emailValid || !passwordValid;
}


function login() {
window. location.href = "ativaUser.html"
}




// _______________ func acim a é a principal do code


function isEmailValid(){  //--------- fun que verifica o e-mail para ver se é valido e mostrar o bt recPass
    const  email = emailForm.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}



// func utilizada para verificar se as informações do campo email são validas e mostrar o erro de acordo
function toggleEmailErrors(){
    const email = emailForm.email().value;

    emailForm.errorEmpty().style.display = email ? "none" : "block"; // --- erro para o campo vazio

    emailForm.errorInvalid().style.display = validateEmail(email) ? "none" : "block";// ------ erro para o campo invalido
}

// ---------------------------------------------------- Acima é o Bloco de Email




//-- fun que verifica campo de senha para ver se é valido mostrar o bt pass
function isPasswordValid(){ 
    const password = passwordForm.password().value;

    if (!password){
        return false;
    }
    return true;
}

// -- func para validar o campo senha e mostrar o erro de acordo
function togglePasswordErrors(){

    const password = passwordForm.password().value;
    passwordForm.errorEmptyPass().style.display = password ? "none" : "block";

}
// ------------------------------------------------- Acima é o Bloco de Senha



//  facilitações no codigo para puxar status dos ID referente aos campos de e-mail

const emailForm = { // - objeto para o campo de email
    email: () => document.getElementById("email"), // --- puxa a informação do ID email
    errorEmpty: () => document.getElementById("error-email-empty"), // --puxa a informação do ID do erro do campo vazio
    errorInvalid: () => document.getElementById("error-email-invalid"), // --puxa a informação do ID do erro do campo invalido
    buttonRecpass: () => document.getElementById("button-Recpass"), // pux informação do bt de recuperar senha
    buttonLog: () => document.getElementById("button-log") // puxa informação do bt de login

}

//  facilitações no codigo para puxar status dos ID referente ao campo de senha
const passwordForm = {
    password: () => document.getElementById("password"),
    errorEmptyPass: () => document.getElementById("error-senha-empty")

}