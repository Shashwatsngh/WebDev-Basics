let inp=document.querySelector("input")
let count=document.querySelector("#count")
inp.addEventListener("input",function(event){
    count.textContent=event.target.value.length
    if(event.target.value.length<5){
        count.style.color="green"
    }
    else if(event.target.value.length>=5){
        count.style.color="red"
        inp.style.color="red"

    }
})