const http = require('http')
const url = require('url')

const port = 5000
const host = "localhost"

const showMessage = (message) => {
    return message
}

http.createServer((req, res) => {
    try{
        const parsedURL = url.parse(req.url, true)
        const {nombre} = parsedURL.query

        if(req.url === "/" && req.method === "GET") {
        res.statusCode = 200
        res.end(JSON.stringify({"message": "Accediendo al servidor"}))
    } else if(req.url === "/home" && req.method === "GET") {
        res.statusCode = 300
        res.end(JSON.stringify({"message": "Accediendo al servidor home"}))
    } else if(parsedURL.pathname === "/profile" && nombre && req.method === "GET") {
        res.statusCode = 200
        res.end(JSON.stringify({"message": showMessage(`Accediendo al perfil de ${nombre}`)}))
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


