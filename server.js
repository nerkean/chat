const http = require('http')
const fs = require('fs')
const path = require('path')

const pathToIndex = path.join(__dirname, 'static', 'index.html')
const pathToStyle = path.join(__dirname, 'static', 'style.css')
const pathToScript = path.join(__dirname, 'static', 'script.js')

const indexHtmlFile = fs.readFileSync(pathToIndex)
const styleHtmlFile = fs.readFileSync(pathToStyle)
const scriptHtmlFile = fs.readFileSync(pathToScript)

const server = http.createServer((req, res) => {
     if(req.url === '/'){
        return res.end(indexHtmlFile)
     }
     if(req.url === '/script.js'){
        return res.end(scriptHtmlFile)
     }
     if(req.url === '/style.css'){
        return res.end(styleHtmlFile)
     }
     res.statusCode = 404
     return res.end('Error 404')
})

server.listen(3000)