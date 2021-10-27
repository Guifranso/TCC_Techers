const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors');

module.exports = () => {
 const app = express()

 app.use(cors({origin: "http://localhost:3000", credentials:true}))

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 
 consign()
   .include('controllers')
   .into(app)
 
 return app
}