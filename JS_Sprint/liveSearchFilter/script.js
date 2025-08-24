// Users array with all user details
const users = [
    {
        id: 0,
        name: "Rose Williams",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quis.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 1,
        name: "John Doe",
        bio: "Software developer with 5 years of experience in web development.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Jane Smith",
        bio: "UI/UX designer passionate about creating beautiful user experiences.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Mike Johnson",
        bio: "Full-stack developer specializing in React and Node.js applications.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Sarah Wilson",
        bio: "Data scientist with expertise in machine learning and Python programming.",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "David Brown",
        bio: "DevOps engineer focused on cloud infrastructure and automation.",
        image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const cardsContainer=document.querySelector("#cards-container")

function createUsers(users){
    users.forEach(user=>{
        let card=document.createElement("div")
        card.id=user.id
        let img=document.createElement("img")
        let blurredLayer=document.createElement("div")
        let content=document.createElement("div")
        let h3=document.createElement("h3")
        let p=document.createElement("p")
        card.classList.add("card")
        img.classList.add("bg-img")
        blurredLayer.classList.add("blurred-layer")
        content.classList.add("content")
        h3.classList.add("h3")
        p.classList.add("p")
        img.setAttribute("src",user.image)
        h3.textContent=user.name
        p.textContent=user.bio
        content.appendChild(h3)
        content.appendChild(p)
        card.appendChild(img)
        card.appendChild(blurredLayer)
        card.appendChild(content)
        cardsContainer.appendChild(card)
        blurredLayer.style.backgroundImage=`url(${user.image})` 
    })
}

function hideUsers(){
    users.forEach(user=>{
        document.getElementById(user.id).style.display="none"
    })
}
function showUsers(users){
    users.forEach(user=>{
        document.getElementById(user.id).style.display="block"
    })
}

createUsers(users)
let inp=document.querySelector("input")
let p=document.querySelector("#error")


inp.addEventListener("input",function(){
    let search=inp.value.toLowerCase()
    let filteredUsers=users.filter(user=>user.name.toLowerCase().includes(search))
    hideUsers()
    if(filteredUsers.length==0){
        p.textContent="No users found"
    }
    else{
        p.textContent=""
    }
    showUsers(filteredUsers)
})
