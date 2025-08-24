let abcd=document.querySelector("#abcd")

abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor="green"
})
abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor="red"
})

window.addEventListener("mousemove", function(event) {
    const rect = abcd.getBoundingClientRect();
    const top = event.clientY - rect.height / 2;
    const left = event.clientX - rect.width / 2;
    abcd.style.top = `${top}px`;
    abcd.style.left = `${left}px`;
});