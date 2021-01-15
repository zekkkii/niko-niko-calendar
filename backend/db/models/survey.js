
const { Sequelize, DataTypes } = require('sequelize');
const {db}=require("../db")

// const sequelize is the connection to the db 
const survey = db.define("survey",{
    id:{ type:DataTypes.INTEGER,primaryKey:true,autoIncrement: true},
    name:{type:DataTypes.STRING, allowNull: false},
    last_name:{type:DataTypes.STRING, allowNull: false},
    date_info:{ type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    satisfaction:{type:DataTypes.INTEGER, allowNull: false},
    comments:{type:DataTypes.STRING}
})

module.exports={survey}