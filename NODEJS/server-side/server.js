const http= require("http")
const fs= require("fs")
const url= require("url")
const { log } = require("console")
const app=http.createServer((req,res)=>{
    const path=url.parse(req.url)
    console.log(path);
    if(path.pathname == "/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../client-side/index.html"))
    }
    else if(path.pathname == "/js/index.js"){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../client-side/js/index.js"))
    }
    else if(path.pathname == "/add"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../client-side/pages/adddonor.html"))
    }
    

})
app.listen(3000)