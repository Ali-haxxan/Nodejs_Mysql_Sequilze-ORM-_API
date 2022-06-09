const express = require('express')
const mysql = require('mysql2')
const app = express()
const bodyparser = require('body-parser')
app.use(express.json())
const db = require('./models')
const path = require('path')
// const sequelize = require('sequelize')
app.use(bodyparser.json())
app.use('/',require('./routes/web'))
// app.get('/',(req,res)=>{
// res.send('lorem ipsum doller')
// })

// db.sequelize.sync().then((req)=>{

    const port = 5007
    app.listen(port,()=>{
        console.log(`this app is rining on http://localhost:${port}/`)
    })

// })

