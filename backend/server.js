const express= require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require('cors')
const { Sequelize } = require('sequelize')
const  {db}= require("./db/db")
const{survey}= require("./db/models/survey")


const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"build")))
app.use(bodyParser.json())
app.use(cors())



app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"build","index.html"))
})

app.post("/",async (req,res)=>{
  const{userName,userLastName,emotion,textArea}=req.body
  survey.create(
  {name:userName, last_name:userLastName,satisfaction:emotion,comments:textArea})
  .then(()=>res.json({isSaved:true}))
  .catch((err)=>console.log("had an error",err))

})
//api
app.get("/api",async(req,res)=>{
  const data= await db.query("select name,last_name,trunc(avg(satisfaction)) as satisfaction from surveys  group by name, last_name")
  res.json(data[0])
})

app.listen(process.env.PORT||5050, async ()=>{
  console.log("runnig on port 5050")
  try {
    await db.authenticate()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})