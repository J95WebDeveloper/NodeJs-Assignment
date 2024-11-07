const http = require('http')


const myServer = http.createServer((req, res) => {
    res.end('Hello, Students!')
})


myServer.listen(8000, () =>{
    console.log('Server Started...')
})