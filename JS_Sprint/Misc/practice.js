document.getElementById(1)//only first element with id 1
let h1=document.querySelector('h1')//only first element
console.dir(h1)
h1.innerText='hello world'
h1.innerHTML="<i>hello world</i>"
document.querySelectorAll('h1')//all elements
document.querySelector("#Apple")//incase of id put # to start 
document.getElementsByClassName ("class1")
//returns all the elements with class name in a html collection
document.querySelectorAll(".class1")// all with class name h1

// innertext and textcontent are same, while textcontent is faster 
//and also displays the hidden content 
//while innerhtml formats the text according to the code

//creating an element and adding to the document
let object= document.createElement("div")
object.innerText="hello world"
document.body.appendChild(object)
//appendchild adds child to the end of the parent

let object1= document.createElement("div")
object1.innerText="hello world"
document.body.prepend(object1)
//prependchild adds child to the start of the parent

//removing a child
let parent=document.querySelector("#parent")
parent.removeChild(document.querySelector("#child"))

let object2 =document.querySelector("img")
object2.setAttribute("border","10")
object2.removeAttribute("border")
console.log(object2.getAttribute("src"))
//getting,setting and removing attributes


let its=document.querySelectorAll("li");
for(let i=0;i<its.length;i++){
    console.log(its[i].textContent);
}
//iterating through the list


let btn=document.querySelector("button")
btn.removeAttribute("disabled")
//removing attribute


//highlighting every second element by adding a class
// to the elements
let ul=document.querySelectorAll("ul li:nth-child(2n)")
ul.forEach(function(element) {
    element.classList.add("class2")
})
//adding a class

//event listener
let btn1=document.querySelector("#click")
btn1.addEventListener("click",function(){
    console.log("clicked" )
})

let p=document.querySelector("p")
p.addEventListener("dblclick",dblclick)
//doubleclick

function dblclick(){
    p.style.color="red"
}
p.removeEventListener("dblclick",dblclick)
//for removing event listener, we have to pass the same function as the add event listener 


let ip=document.querySelector("input")
ip.addEventListener("keydown",function(text){
    if(event.key=="Enter"){
        let p1=document.createElement("p")
    p1.textContent=text.target.value
    document.body.appendChild(p1)   
    }
})

let dropdown=document.querySelector("#dropdown")
let select = document.querySelector("select")
select.addEventListener("change",function(del){
    dropdown.textContent=`${del.target.value} is selected`
})
//detects the change in the select element  
 