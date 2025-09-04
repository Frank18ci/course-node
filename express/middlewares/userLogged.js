const userLogged = (req, res, next) => {
    const isLoggedIn = true
    if(!isLoggedIn) {
        res.status(401).json({message: "Usuario no autenticado"})
    }
    next()
}
module.exports = userLogged