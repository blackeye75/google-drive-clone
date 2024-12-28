const express= require('express');
const {upload, uploadToAppwrite} = require('../config/multer.config')

const router= express.Router();

router.get("/home",(req,res)=>{
    res.render('home');
})

router.post('/upload',upload.single('file'),uploadToAppwrite,(req,res)=>{
    res.send(req.file);
    // res.json({ 
       
    //     message: 'File uploaded successfully', 
    //     fileId: req.fileId
    // });
})

module.exports = router;