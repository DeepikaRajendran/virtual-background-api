const mysql = require('mysql');
const dbConfig = require('./../config/db.config.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
});
connection.connect((error) =>{
    if (error) throw error;
    console.log("connected to the database");
});

module.exports = connection;

//sequelize model:create --name SearchHistory --attributes "search_term:string, search_type:string"
//sequelize model:create --name Submission --attributes "user_id:INTEGER, category_id:INTEGER, name:string, url:string,id:INTEGER,source_url:string,approved:BOOLEAN"
