const http=require("http")

const server=http.createServer((req,res)=>{

    console.log(req.url)
    if(req.url=="/about"){
        res.end("About")
    }
    else if(req.url=="/contact"){
        res.end("Contact")
    }
    else res.end("Hello World")
})

server.listen(8000,()=>{
    console.log("Server running on port 8000")
})

//npx nodemon filename allows us to run the server without restarting it every time we make a change

// 