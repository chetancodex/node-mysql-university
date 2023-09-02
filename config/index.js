const dbConfig = require('./dbconfig');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    pool : {
        max : dbConfig.pool.max,
        min : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
});
const db = {} ;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Student = require('../model/student.model')(sequelize,Sequelize);
db.Dean = require('../model/dean.model') (sequelize,Sequelize);
db.Slot = require('../model/slots.model') (sequelize,Sequelize);

module.exports = db