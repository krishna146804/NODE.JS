const http = require('http')

const server = http.createServer((req, res)=>{

    if(req.url == '/hello'){
        res.end('Hello Students ! Welcome to learning Node.js')
    }else{
        res.writeHead(404)
        res.end('Use the right url')
    }
})

server.listen(3000,()=>{
    console.log("Server got started")
})