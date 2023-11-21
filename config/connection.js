require('dotenv').config();

const Sequelize = require('sequelize');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', //127.0.0.1
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DATABASE,
}).promise();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = connection;
module.exports = sequelize;