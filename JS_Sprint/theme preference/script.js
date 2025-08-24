let body=document.body
let themeBtn=document.getElementById("theme-btn")

let savedTheme=localStorage.getItem("theme")

if(savedTheme==="dark"){
    body.classList.remove("light")
    body.classList.add("dark")
}
else{
    body.classList.remove("dark")
    body.classList.add("light")
}

function theme(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        body.classList.remove("light")
        body.classList.add("dark")
    }
    else{
        body.classList.remove("dark")
        body.classList.add("light")
    }
    
}

themeBtn.addEventListener("click",function(){
    body.classList.toggle("dark")
    body.classList.toggle("light")
    localStorage.setItem("theme",body.classList.contains("dark")?"dark":"light")
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change",function(){
    theme()
})

