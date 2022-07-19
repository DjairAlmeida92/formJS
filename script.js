const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const senha2Value = senha2.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(username); 
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório.');
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");  
    } else {
        setSuccessFor(email)
    }

    if (senhaValue === '') {
        setErrorFor(senha, 'A senha é obrigatória.');
    } else if (senhaValue.length < 7) {
      setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");  
    } else {
        setSuccessFor(senha)
    }

    if (senha2Value === '') {
        setErrorFor(senha2, 'A confirmação de senha é obrigatória.');
    } else if (senha2Value !== senhaValue ) {
      setErrorFor(senha2, "As Senhas não conferem.");  
    } else {
        setSuccessFor(senha2)
    }

    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adciona a mensagem de erro
    small.innerText = message;
    //adciona a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //adicionar a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }