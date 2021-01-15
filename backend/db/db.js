const { Sequelize } = require('sequelize')

 const db = new Sequelize(
    'postgres',
    'postgres',
    'zeki',
    {
        host: 'localhost',
        dialect: 'postgres', 
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
    },{
        reezeTableName: true
}
);
module.exports={db}