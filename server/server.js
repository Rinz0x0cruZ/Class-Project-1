require("dotenv").config()
const express=require('express')
const app=express()
const PORT=process.env.PORT || 1234
const Route=require('./routes/approutes')
const db=require('./db')

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//controllers
app.use('/api',Route)

//listener
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})