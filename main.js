const express = require('express');
const app =express();
app.get('/',(req,res)=>{
    return res.json({message:'hello from doc'})
})
app.listen(8080,(req,res)=>{
     console.log('server started at port 8080')
})