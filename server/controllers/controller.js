const multer=require('multer')
const xtj=require("convert-excel-to-json")
const fsx=require("fs-extra")
const excelToJson = require('convert-excel-to-json')
const mongoose=require('mongoose')
const xlData=require('../models/Excel')

const dir={
    getAllData:(req,res)=>{
        console.log("All the data will come here")
    },
    uploadXl:async (req,res)=>{
        try{
            const fl=req.file
            if(!fl?.filename || fl?.filename == 'undefined') 
                res.status(400).json("NO FILE")
            else{
                const path='uploads/'+fl.filename
                const eDat=excelToJson({
                    sourceFile : path,
                    header : {
                        rows: 1
                    },
                    columnToKey:{
                        "*":"{{columnHeader}}",
                    }
                })
                fsx.remove(path)
                eDat.Sheet1.forEach((item)=>{
                    xlData.create(item)
                })
                res.json(`Done`)
            }
        } catch(error) {
            res.status(500).json(error)
        }
    }
}

module.exports=dir