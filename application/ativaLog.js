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
    document.getElementById("button-Recpass").disabled = !emailValid;

    const passwordValid = isPasswordValid(); // func para botão entrar 
    document.getElementById("button-log").disabled = !emailValid || !passwordValid;
}



// _____________________________________________ func acim a é a principal do code

function isEmailValid(){  //--------- fun que verifica o e-mail para ver se é valido e mostrar o bt recPass
    const  email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}


// função utilizada para validar Email
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


// func utilizada para verificar se as informações do campo email são validas e mostrar o erro de acordo
function toggleEmailErrors(){
    const email = document.getElementById("email").value;

    if(!email){// --- erro para o campo vazio
        document.getElementById("error-email-empty").style.display = "block";
    } else{ 
        document.getElementById("error-email-empty").style.display = "none";
    }

    if(validateEmail(email)){ // ------ erro para o campo invalido
        document.getElementById("error-email-invalid").style.display = "none";
    } else {
        document.getElementById("error-email-invalid").style.display = "block";
    }
}




// ---------------------------------------------------- Acima é o Bloco de Email

//---------- fun que verifica campo de senha para ver se é valido mostrar o bt pass
function isPasswordValid(){ 
    const password = document.getElementById("password").value;

    if (!password){
        return false;
    }
    return true;
}


// ------ func para validar o campo senha e mostrar o erro de acordo
function togglePasswordErrors(){

    const password = document.getElementById("password").value;

    if(!password){// --- erro para o campo vazio
        document.getElementById("error-senha-empty").style.display = "block";
    } else{ 
        document.getElementById("error-senha-empty").style.display = "none";
    }
}


// ------------------------------------------------- Acima é o Bloco de Senha



