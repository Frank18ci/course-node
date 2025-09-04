const express = require('express')
const app = express()

const morgan = require('morgan')

const userRouter = require('./routes/userRoute')

//const userLogged = require('./middlewares/userLogged')

//app.use(userLogged)

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).json({"message": "Accediendo al servidor"})
})
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})