const http = require('http')

const port = 5000
const host = "localhost"

const showMessage = (message) => {
    return message
}

http.createServer((req, res) => {
    try{
        if(req.url === "/" && req.method === "GET") {
        res.statusCode = 200
        res.end(JSON.stringify({"message": "Accediendo al servidor"}))
    } else if(req.url === "/home" && req.method === "GET") {
        res.statusCode = 300
        res.end(JSON.stringify({"message": "Accediendo al servidor home"}))
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({"message": "Recurso no encontrado"}))
    }
    } catch(error) {
        res.statusCode = 500
        res.end(JSON.stringify({"message": "Error interno del servidor"}))
    }
}).listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})


