let form= document.querySelector("form")

// form.addEventListener("submit",function(dets){
//     dets.preventDefault()
//     console.log("form submitted")
// })

form.addEventListener("submit",function(dets){
    dets.preventDefault()
    let card=document.querySelector(".card")
    // let card_container=document.querySelector("#card-container")
    // card.classList.add("card")
    // card_container.appendChild(card)
    let h2=document.querySelector(".h2")
    h2.textContent=dets.target.name.value
    // card.appendChild(h2)
    let h3=document.querySelector(".h3")
    h3.textContent=dets.target.Role.value
    // card.appendChild(h3)
    let p=document.querySelector(".p")
    p.textContent=dets.target.details.value
    // card.appendChild(p)
    let profile=document.querySelector(".profile")
    let img=document.querySelector(".img")
    img.setAttribute("src",dets.target.link.value)
    // profile.appendChild(img)
    img.src=dets.target.link.value
    // card.prepend(profile)
    // h2.classList.add("h2")
    // h3.classList.add("h3")
    // p.classList.add("p")
    // profile.classList.add("profile")
    // img.classList.add("img")
    card.removeAttribute("hidden")
    
})

