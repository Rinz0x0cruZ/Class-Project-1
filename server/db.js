require('dotenv').config()
const mongoose=require('mongoose')
const URI=process.env.DB

mongoose.connect(URI)
    .then(()=>{
        console.log("DB connected")
    })
    .catch((error)=>{
        console.log(error)
    })

module.exports=mongoose