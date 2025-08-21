
let h1=document.querySelector('h1')
window .addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        h1.textContent="you pressed enter"
    }
    h1.textContent=event.key
})

let ip=document.querySelector("#file")
let btn=document.querySelector("#btn")
btn.addEventListener("click",function(){
    ip.click();
})
ip.addEventListener("change",function(evt){
    btn.textContent=evt.target.files[0].name
})