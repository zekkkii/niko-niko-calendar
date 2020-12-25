const express= require("express")
const path = require("path")
const bodyParser = require("body-parser")
const { Sequelize } = require('sequelize')
const  {db}= require("./db/db")
const{survey}= require("./db/models/survey")


const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"build")))



app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"build","index.html"))
})

app.post("/",(req,res)=>{
const{name,lastName,emotion,comments}=req.body
//survey.create({name:name, last_name:lastName, date_info:new date()})
})

app.listen(process.env.PORT||3000, async ()=>{
  console.log("runnig on port 3000")
  try {
    await db.authenticate()
    console.log("connected succesfully to the db")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})