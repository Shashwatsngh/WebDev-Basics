
//without turning on event capture phase


document.querySelector("#a").addEventListener("click",function(){
    console.log("a clicked")
})
document.querySelector("#b").addEventListener("click",function(){
    console.log("b clicked")
})
document.querySelector("#c").addEventListener("click",function(){
    console.log("c clicked")
})
document.querySelector("#click").addEventListener("click",function(){
    console.log("click clicked")
})

//output
//click clicked
//c clicked
//b clicked
//a clicked

//even if the event listener is added to the child element
//the event will be triggered on the parent element

//when an event is raised, its implemented in two phases, first it goes from parent to child and then from child to parent, first the event is raised in the child element and then the event is raised in the parent element, but the first phase by default is off

//if we turn on the capture phase, then even if we pressed the click button which is inside nested divs, the event listener will frst be raised in the parent element and then in the child element i.e. the click button 

//after turning on event capturning

//first capture phase and then bubble phase,if capture phase is on, else it will ignore the capture phase, capture phase needs to be turned on all the nested divs, fore example in this a(b(c(button))), if the capture phase isnt on on any of the nested divs, then the event will be raised only in the button and then it will be raised in the c and then in the b and then in the a i.e. event bubbling

//as you can see it checks if there are event listeners on the element first in the event capturing phase(if it is turned of for the element) and then by default checks for event listeners in the event bubbling phase
 

// document.querySelector("#a").addEventListener("click",function(){
//     console.log("a clicked")
// },true
// )
// document.querySelector("#b").addEventListener("click",function(){
//     console.log("b clicked")
// },true
// )
// document.querySelector("#c").addEventListener("click",function(){
//     console.log("c clicked")
// },true)
// document.querySelector("#click").addEventListener("click",function(){
//     console.log("click clicked")
// },true) 

//output
//a clicked
//b clicked
//c clicked
//click clicked