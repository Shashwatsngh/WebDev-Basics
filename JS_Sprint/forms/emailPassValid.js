let form=document.querySelector("form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let emailError=document.querySelector("#emailError")
let passwordError=document.querySelector("#passwordError")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display="initial"
    }
    else{
        emailError.style.display="none"
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.style.display="initial"
    }
    else{
        passwordError.style.display="none"
    }
})