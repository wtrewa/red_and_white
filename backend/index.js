const express = require('express');
const {connect} = require('./connection/connect');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const productRoute = require('./routes/productRoute');
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',userRouter)
app.use('/api',productRoute)


app.get('/',(req,res)=>{
    res.send('welcome to the homepage')
})

app.listen(process.env.PORT, ()=>{
    console.log('server is running on port 8080')
    connect()
})