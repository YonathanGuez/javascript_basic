
// Create Query with parameter 
// run  query : http://localhost:3000/
// run  query : http://localhost:3000/test
// run  query : http://localhost:3000/?zipCode=10016
// run  query : http://localhost:3000/?zipCosss=10016
// and you will get zipCode
const {createServer} = require("http")
const url = require('url');

const server = createServer((req,res) =>{
    let query = url.parse(req.url,true).query
    console.log(query);
    res.writeHead(200, {"Content-Type": "text/html"});
    switch (req.url) {
        case "/":
            res.write("<h1>hello</h1>")
            break;
        case "/test":
            res.write("<h1>test</h1>")
            break;
        default:
            if(query.zipCode){
                res.write("<h1>zip code"+`${query.zipCode}`+"</h1>")
            }
            else{
                res.write("<h1>default</h1>")
            }
            break;
    }
    res.end();
})
server.listen(3000)
