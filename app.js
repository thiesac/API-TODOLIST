const express = require("express")
const app = express ()
const port = 3000
const taskRouter = require ('./routes/task-router')
const mongoose = require ('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const authRouter = require('./routes/auth-router')
const autenticarToken = require ('./middleware/autenticarToken')

mongoose.connect(process.env.MONGO_KEY)

app.use (express.json())
app.use('/auth', authRouter)
app.use('/tasks', autenticarToken, taskRouter)

app.get("/", (req, res) => {
    res.send("API TODO LIST HT V1.0.0 !")
})

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`)
})

