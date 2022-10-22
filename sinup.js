function setFormMessage(formEformElement,type,message){
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

}
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}




document.addEventListener("DOMContentLoaded",()=>   {
    const logninForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector("#linkSignup").addEventListener("click",e=>{

        e.preventDefault();
        logninForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click",e=>{
        logninForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden");
    });

 
});


loginForm.addEventListener("submit", e => {
    e.preventDefault();
    setFormMessage(loginForm, "error", "Invalid username/password combination");
});

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "email" && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, "Username must be at least 10 characters in length");
        }
    });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});
