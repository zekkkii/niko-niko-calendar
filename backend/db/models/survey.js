const {Sequelize}=require("sequelize")
const {db}=require("../db")

// const sequelize is the connection to the db 
const survey = db.define("survey",{
    id:{ type:Sequelize.INTEGER,primaryKey:true,autoIncrement: true},
    name:{type:Sequelize.TEXT},
    las_name:{type:Sequelize.TEXT},
    date_info:{type:Sequelize.DATE},
    satisfaction:{type:Sequelize.INTEGER},
    comments:{type:Sequelize.TEXT}
})