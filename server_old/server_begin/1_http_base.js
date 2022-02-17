const {createServer} = require("http")

const server = createServer((req,res) =>{
    console.log(req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    switch (req.url) {
        case "/":
            res.write("<h1>hello</h1>")
            break;
        case "/test":
            res.write("<h1>test</h1>")
            break;
        default:
            res.write("<h1>default</h1>")
            break;
    }
    res.end();
})
server.listen(3000)
