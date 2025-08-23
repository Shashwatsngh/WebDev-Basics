let progress=document.querySelector("#progress")
let percent=document.querySelector("#percent")
let text=document.querySelector("#text")
let count=0
let interval=setInterval(function(){
    if(count<99){
        count+=1
        progress.style.width=`${count}%`
        percent.textContent=`${count}%`
    }
    else if(count==99){
        count+=1
        text.textContent="Download Completed"
        percent.textContent=`${count}% completed`
    }
    else{
        clearInterval(interval)
    }
},10)  