const inputPassword = document.getElementById("password");
const inputPasswordConfirm = document.getElementById("password_confirm");
const messagePassword = document.querySelector("p.password_error");

const passwordCheck = (event) => {
    let password = inputPassword.value;
    let passwordConfirm = inputPasswordConfirm.value;

    if (password !== '' && password === passwordConfirm) {
        inputPassword.setAttribute("class","password_ok");
        inputPasswordConfirm.setAttribute("class","password_ok");
        messagePassword.setAttribute("class", "password_ok");
    };
}

inputPasswordConfirm.addEventListener('focusout', passwordCheck);