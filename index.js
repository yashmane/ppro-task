const express = require('express');
const mysql= require('./database')

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', async (req,res)=>{
    let sql="select * from helloworld limit 1;"
    mysql.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result[0].message)
        res.send(result[0].message)
        console.log("Table created");
      });
})

app.get('*', async (req,res)=>{
    res.status(404).json({
        "message": "Route not found!"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
}) 