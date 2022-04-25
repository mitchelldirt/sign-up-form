const submitButton = document.getElementById("submitBtn")

submitButton.onclick = () => {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("passwordConfirm");
    const passwordWarning = document.getElementById("passwordWarning");

    if (password.value != passwordConfirm.value) {
        password.classList.add("invalidPassword")
        passwordConfirm.classList.add("invalidPassword")
        passwordWarning.classList.remove("passwordWarning")
    }
}