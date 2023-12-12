const express=require('express')
const Router=express.Router()
const controller=require('../controllers/controller')
const multer=require('multer')

Router.get('/data',controller.getAllData)
Router.post('/read',multer({dest:'uploads/'}).single('file'),controller.uploadXl)

module.exports=Router


