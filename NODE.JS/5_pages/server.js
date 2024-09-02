const http=require("http")
const fs=require("fs")
const url=require("url")
const app=http.createServer((req,res)=>{
    const newUrl=url.parse(req.url)
    console.log(newUrl);
    if(newUrl.pathname =="/"){
        fs.readFile("./pages/index.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-Type": "text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"Content-type": "text/html"})
            res.write(data)
            res.end()
        })
    }
    else if(newUrl.pathname =="/contact"){
        fs.readFile("./pages/contact.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-Type": "text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }
    else if(newUrl.pathname =="/about"){
        fs.readFile("./pages/about.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-Type": "text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }
    else{
        fs.readFile("./pages/error.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"Content-Type": "text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }
})
app.listen(3001)