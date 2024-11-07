const http = require('http')

//  route
const myServer = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Hello, World!')
    }else{
        res.end('Page Not Found')
    }
})


myServer.listen(8000, () => {
    console.log('Server Started... ')
})