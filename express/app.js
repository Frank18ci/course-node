const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({"message": "Accediendo al servidor"})
})
app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})