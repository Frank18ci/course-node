const http = require('http')

const port = 5000
const host = "localhost"

const showMessage = (message) => {
    return message
}

http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.end(JSON.stringify({"message": "Accediendo al servidor"}))
    }
}).listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})


