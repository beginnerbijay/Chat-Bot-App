const express = require('express')
const app = express()
const port = process.env.PORT || 5500
const path = require('path')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use('',require('./routing/router'))
app.listen(port, ()=>[
    console.log("server connected at " + port)
])