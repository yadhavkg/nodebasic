const http=require("http");
http.createServer((req,res)=>{
    console.log("server started");
    res.end("hello jerike")
}).listen(3000)