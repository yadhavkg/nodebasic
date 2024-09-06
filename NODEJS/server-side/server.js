
const http=require("http");
const fs=require("fs");
const url=require("url");
const queryString=require("querystring");
const {MongoClient}=require("mongodb");
const { error,log } = require("console");


const client = new MongoClient("mongodb://127.0.0.1:27017/");

const app=http.createServer(async(req,res)=>{
    const db=client.db("blood");
    
    const collection=db.collection("donor");
const path=url.parse(req.url);
console.log(req.method);
console.log(path);
if(path.pathname=="/")
    {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../client-side/index.html"));

}
else if(path.pathname=="/js/custom.js")
    {
    res.writeHead(200,{"Content-type":"text/js"});
    res.end(fs.readFileSync("../client-side/js/custom.js"));
}
else if(path.pathname=="/css/index.css")
    {
res.writeHead(200,{"Content-Type":"text/css"});
res.end(fs.readFileSync("../client-side/css/index.css"));
}
else if(path.pathname=="/add")
    {
   res. writeHead(200,{"Content-Type":"text/html"})
   res.end(fs.readFileSync("../client-side/pages/adddonor.html"));
}
else if(path.pathname=="/css/adddonor.css")
{
    res.writeHead(200,{"Content-Type":"text/css"});
    res.end(fs.readFileSync("../client-side/css/adddonor.css"));
}


if (req.method == "POST" && path.pathname == "/submit") {
    let body = "";
    req.on("data", (chunks) => {
      console.log(chunks);
      body += chunks.toString();
      console.log(body);
    });
    req.on("end", async () => {
      if (body != null) {
        const formData = queryString.parse(body);
        console.log(formData);
        
        collection
          .insertOne(formData)
          .then(() => {
            console.log("success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../client-side/index.html"));
  }
});

app.listen(3005);