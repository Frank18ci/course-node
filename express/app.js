const express = require('express')
const app = express()

const morgan = require('morgan')

const path = require('path')

const userRouter = require('./routes/userRoute')

//const userLogged = require('./middlewares/userLogged')

//app.use(userLogged)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    const data = {
        "title": "Home Page",
        "message": "Welcome to the home page",
        "showMessage": false,
        "items": [1, 2, 3, 4, 5]
    }
    res.render('index', data)
})
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})