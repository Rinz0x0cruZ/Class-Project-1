const mongoose=require('mongoose')

const excelSchema=mongoose.Schema({
    ID : {
        type : Number,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Diameter : {
        type : Number,
        required : true
    }
})

module.exports=mongoose.model('Excel',excelSchema)