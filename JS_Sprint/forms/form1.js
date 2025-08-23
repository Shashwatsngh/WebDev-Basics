let nm=document.querySelector("#name")
let form=document.querySelector("form")

form.addEventListener("submit",function(dets){
    dets.preventDefault()
    if(nm.value.length<5){
        document.querySelector("small").style.display="initial"
    }
    else{
        document.querySelector("small").style.display="none"
    }
})